let selectedCustomer=null;
let selectedItem=null;
let cart=[];

const database= firebase.firestore();


const loadCustomerData=()=>{
    const customerDataItem = document.getElementById('nic');
    let nic=customerDataItem.value;
    database.collection('customer')
    .where('nic','==', nic)
    .get()
    .then(response=>{
        response.forEach((dataOption)=>{
            if(dataOption.data()){
                selectedCustomer=dataOption.data();
                document.getElementById('nic').value=dataOption.data().nic;
                document.getElementById('name').value=dataOption.data().name;
                document.getElementById('address').value=dataOption.data().address;
            }
        });
    }).catch(error=>{
         

    });

}



const loadItemData=()=>{
    const itemDataComponent = document.getElementById('description');
    let description=itemDataComponent.value;
    database.collection('item')
    .where('description','==', description)
    .get()
    .then(response=>{
        response.forEach((dataOption)=>{
            if(dataOption.data()){
                selectedItem=dataOption.data();
                document.getElementById('description').value=dataOption.data().description;
                document.getElementById('unitPrice').value=dataOption.data().unitPrice;
                document.getElementById('qty').value=dataOption.data().qty;
            }
        });
    }).catch(error=>{
         

    });

}

const customerDataItem = document.getElementById('nic');
customerDataItem.addEventListener('keypress',(event)=>{
    if(event.key == 'Enter'){
        loadCustomerData();
    }
});

const itemDataComponent = document.getElementById('description');
itemDataComponent.addEventListener('keypress',(event)=>{
    if(event.key == 'Enter'){
        loadItemData();
    }
});

addToCart=()=>{
    let qty = parseInt(document.getElementById('myQty').value);
    let unitPrice = document.getElementById('unitPrice').value;
    let total=qty*unitPrice;

    cart.push({
        item:selectedItem,
        qty:qty,
        total:total
    });

    let tBody = $('#tBody');
    tBody.empty();
    let rowData = '';
    cart.forEach(function(data){
        rowData+=`<tr> <td>${data.item.description}</td><td>${data.qty}</td><td>${data.item.unitPrice}</td><td>${data.total}</td> </tr>`
            // console.log(data);
            // const rowData = $("<tr>");
            // rowData.append($("<td>")).text(data.item.description);
            // rowData.append($("<td>")).text(data.qty);
            // rowData.append($("<td>")).text(data.item.unitPrice);
            // rowData.append($("<td>")).text(data.total);
            // tBody.append(rowData);
            tBody.html(rowData);
    });
}