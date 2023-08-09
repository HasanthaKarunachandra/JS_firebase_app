const database= firebase.firestore();

function createCustomer(description,unitPrice, qty){
    database.collection('item').add({
        description:description,
        unitPrice:unitPrice, 
        qty:qty
    })
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })

}
const saveData=() => {
    let descriptionData = document.getElementById('description');
    let unitPriceData = document.getElementById('unitPrice');
    let qtyData = document.getElementById('qty');

    let description=descriptionData.value;
    let unitPrice=unitPriceData.value;
    let qty=qtyData.value;

    createCustomer(description,unitPrice, qty);

}
