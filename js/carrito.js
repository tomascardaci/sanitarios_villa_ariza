

let arrayCarrito = JSON.parse(sessionStorage.getItem('arrayCarrito'));


$(document).ready(function() {
    let setCartCount = sessionStorage.getItem('cartCount');

    if (sessionStorage.getItem('cartCount') == null){
        $('.menu_conteiner_list-cartCounter').html(0);
    } else{
        $('.menu_conteiner_list-cartCounter').html(setCartCount);
    }

    if (setCartCount <= 0){

        $('.menu_conteiner_list-cartCounter').css("background-color","#2d4b55");

        setCartCount = 0;

        sessionStorage.removeItem('arrayCarrito');
        sessionStorage.setItem('cartCount', 0);
     
    };

});


$(document).ready(function() {


    // recorrer el array de productos en el carrito
    for (let i = 0; i < arrayCarrito.length; i++){

        if(arrayCarrito[i].category == 3){

            $('.carrito_conteiner_list').append(`
        
                <div class="carrito_conteiner_product shadow-sm">
                 <img src="PRODUCTOS/griferias/img/${arrayCarrito[i].img}">
                <span id="productName" class="getProductName">${arrayCarrito[i].name}</span>
                <div class="productQuantity">
                    <input class="productQuantityInput" type="number" value=${arrayCarrito[i].count} name="${arrayCarrito[i].name}">
                 </div>
                <div class="deleteItemSelected" id="deleteItem">X</div>
                </div>`);

        }else {

            $('.carrito_conteiner_list').append(`
        
                <div class="carrito_conteiner_product shadow-sm">
                 <img src="${arrayCarrito[i].img}">
                <span id="productName" class="getProductName">${arrayCarrito[i].name}</span>
                <div class="productQuantity">
                    <input class="productQuantityInput" type="number" value=${arrayCarrito[i].count} name="${arrayCarrito[i].name}">
                 </div>
                <div class="deleteItemSelected" id="deleteItem">X</div>
                </div>`);

        };     
       
    };

    

    const productDiv = document.querySelectorAll('.carrito_conteiner_product');
    productDiv.forEach((quantityInput) => {
    quantityInput.addEventListener('change', quantityChanged);

    function updateSessionStorage(productName, newCount) {
        var getCarritoStorage = sessionStorage.getItem('arrayCarrito');
        var carritoStorageParse = JSON.parse(getCarritoStorage);
        const oldProduct = carritoStorageParse.find(product => product.name === productName);
        carritoStorageParse[carritoStorageParse.indexOf(oldProduct)] = {...oldProduct, count: newCount };
        sessionStorage.setItem('arrayCarrito', JSON.stringify(carritoStorageParse));

        let cartCount = 0;

        for (let e = 0; e < carritoStorageParse.length; e++) {
            cartCount += parseInt(carritoStorageParse[e].count);

        }

        
        $('.menu_conteiner_list-cartCounter').html(cartCount);
        sessionStorage.setItem('cartCount', cartCount);




    }


    function quantityChanged(event) {
        const input = event.target;
        input.value <= 0 ? (input.value = 1) : null;
        input.value >= 30 ? (input.value = 30) : null; 
        updateSessionStorage(input.name, input.value);


    };
});





const cartDeleteButtons = document.querySelectorAll('#deleteItem');
cartDeleteButtons.forEach((deleteItemButton) => {
    deleteItemButton.addEventListener('click', deleteItemClicked);
});

function deleteItemClicked(event) {

    const button = event.target;
    button.closest('.carrito_conteiner_product').remove();

    let deleteCartCount = sessionStorage.getItem('cartCount');
    deleteCartCount--;
    $('.menu_conteiner_list-cartCounter').html(deleteCartCount);
    sessionStorage.setItem('cartCount', deleteCartCount);

    

    
    
    
};

const deleteButtons = document.querySelectorAll('.deleteItemSelected');
deleteButtons.forEach((div,index) => div.addEventListener('click', ()=> {

    let deleteCartItem = JSON.parse(sessionStorage.getItem('arrayCarrito'));

    let arrayCarritoUpdate = deleteCartItem.splice(index, 1);

    sessionStorage.setItem('arrayCarrito', JSON.stringify(arrayCarritoUpdate));

    let getCartCount = sessionStorage.getItem('cartCount');

    if(getCartCount <= 0){

        getCartCount = 0;

        sessionStorage.removeItem('arrayCarrito');
     
        $('.menu_conteiner_list-cartCounter').css("background-color","#2d4b55");
        

    }

}));









$('#cartConfirmation').click(function() {
    
 const getForm = document.querySelector('#cartForm');
    getForm.addEventListener('submit', handleSubmit);
    
    function handleSubmit(event) {
        event.preventDefault();
         const form = new FormData(this);
         var formName = form.get('name');
         var formPhone = form.get('phone');
         var formEmail = form.get('email');
         var cartConfirmedItems = Array.from(document.querySelectorAll('.carrito_conteiner_product'));
         

            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "comprasvillaariza@gmail.com",
                Password : "00CFE5103EACCD78CF840035D459D964A092",
                To : 'sanitariosvillaariza@gmail.com',
                From : "comprasvillaariza@gmail.com",
                Subject : `Lista de precios ${formName}`,
                Body : `<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
                <div style="width: 50%; margin:40px; ">
                  <div style="width: 100%; border: 1px solid gray; margin-bottom: 30px; overflow: auto;">
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Nombre del cliente</div>
                      <div style="height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">${formName}</div>
                  </div>
                  <div style="width: 100%; border: 1px solid gray; margin-bottom: 30px; overflow: auto;">
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Número de teléfono</div>
                      <div style="height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">${formPhone}</div>
                  </div>
                  <div style="width: 100%; border: 1px solid gray; margin-bottom: 30px; overflow: auto;">
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Correo electrónico</div>
                      <div style="min-height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">${formEmail}</div>
                  </div>
                  <div style="width: 100%; border: 1px solid gray; margin-bottom: 30px; overflow: auto;">
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Lista de productos</div>
                      <div style="min-height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">
                          <ul id="emailItemsList">
                              ${cartConfirmedItems.map((item) => `<li> ${item.getElementsByClassName('getProductName')[0].innerHTML} <span style="color: red;">( x${item.getElementsByClassName('productQuantityInput')[0].value} )</span></li>`)}
                          </ul>
                      </div>
                  </div>
                </div>
                </div>`
            });         
        
        
        location.href="carrito_success.html"  
    };
});

    
});








   