const database= firebase.firestore();

function createCustomer(nic,name, address){
    database.collection('customer').add({
        nic:nic,
        name:name,
        address:address
    })
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })

}
const saveData=() => {
    let nicData = document.getElementById('nic');
    let nameData = document.getElementById('name');
    let addressData = document.getElementById('address');

    let nic=nicData.value;
    let name=nameData.value;
    let address=addressData.value;

    createCustomer(nic,name, address);

}

