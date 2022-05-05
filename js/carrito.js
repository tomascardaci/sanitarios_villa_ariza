

var arrayCarrito = JSON.parse(sessionStorage.getItem('arrayCarrito'));

$(document).ready(function() {
    let setCartCount = sessionStorage.getItem('cartCount');
    if (sessionStorage.getItem('cartCount') == null){
        $('.menu_conteiner_list-cartCounter').html(0);
    } else{
        $('.menu_conteiner_list-cartCounter').html(setCartCount);
    }
});

$(document).ready(function() {


    for (let i = 0; i < arrayCarrito.length; i++){

        let elementsTitle = document.getElementsByClassName('getProductName');

        if(elementsTitle.length === 0){
            $('.carrito_conteiner_list').append(`
        
                <div class="carrito_conteiner_product shadow-sm">
                    <img src="${arrayCarrito[i].img1}">
                    <span id="productName" class="getProductName">${arrayCarrito[i].name}</span>
                    <div class="productQuantity">
                        <input class="productQuantityInput" type="number" value="1">
                    </div>
                    <div id="deleteItem">X</div>
                </div>`
            );
        } else{
            function addquantity(){
                for (let a = 0; a < elementsTitle.length; a++) {
                    if(elementsTitle[a].innerText === arrayCarrito[i].name){
                        let elementQuantity = elementsTitle[a].parentElement.querySelector('.productQuantityInput');
                        elementQuantity.value++
                        return;   
                    } else{
                        $('.carrito_conteiner_list').append(`
                            <div class="carrito_conteiner_product shadow-sm">
                                <img src="${arrayCarrito[i].img1}">
                                <span id="productName" class="getProductName">${arrayCarrito[i].name}</span>
                                <div class="productQuantity">
                                    <input class="productQuantityInput" type="number" value="1">
                                </div>
                                <div id="deleteItem">X</div>
                            </div>`);
                        
                        return;
                    }
                }
            }
            addquantity()

            
        }   

            
    }

    
});





const productDiv = document.querySelectorAll('.carrito_conteiner_product');
productDiv.forEach((quantityInput) => {
    quantityInput.addEventListener('change', quantityChanged);
});

function quantityChanged(event) {
   const input = event.target;
   input.value <= 0 ? (input.value = 1) : null;   
}



const cartDeleteButtons = document.querySelectorAll('#deleteItem');
cartDeleteButtons.forEach((deleteItemButton) => {
    deleteItemButton.addEventListener('click', deleteItemClicked);
});

function deleteItemClicked(event) {
    const button = event.target;
    button.closest('.carrito_conteiner_product').remove();
    var deleteCartCount = sessionStorage.getItem('cartCount');
    deleteCartCount--;
    $('.menu_conteiner_list-cartCounter').html(deleteCartCount);
    sessionStorage.setItem('cartCount', deleteCartCount);
}

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
              Username : "rodo.toms@gmail.com",
              Password : "CE7FB8D3C8517DB74A184E8A7FE0C742783E",
              To : 'ariza@resistemas.com.ar',
              From : `rodo.toms@gmail.com`,
              Subject : `Lista de precios ${formName}`,
              Body : `<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
              <div style="width: 50%; margin:40px; ">
                  <div style="width: 100%; margin-bottom: 30px; display: flex; flex-direction: column; align-items: center;">
                      <img height="120px" src="https://lh3.googleusercontent.com/k06NSKUphZmhplcDH1-KdH_Bdpq7R2sLEFwsS8uda6hRRuV4AdJT8Q1_3nVcVkI6L8Y5ykbpLLZThMLeizwY0T0txYYnceAKwVYt_pz8XadZrxv4Tuhr4eVNoqvLwZ1y8G5OQZ9I2XNTrR81wLuv0rZO3ooZ9_aPv84Tbv4m1LrFLbkVIUN1VgiJhxSajimdnWsCYgcVGJjgA0zPd-vqdVHRjyctPlCMXBBp7rYVA4ZMS9VprV8intu5M3ow5K2t0Bm2i8OuVGxfEcyZ1ISmhPeCNPQ1URZA1ox5hBbt8OnQLKSC-SP0x_RHsQ8R3Tb8nA0_Kooxp2W4eNz19DMfc6Dy122FjCBy0rD9F-EeUwOMr_qAfg10RCaK6RX_BIku20eA2AojvDOq6EtqiIOSzead4_TUMjwRPzyrAR9j1eXsS7lOMfeJjX-6m4ORfcvKIasK1nnfXfTubDe-lOzOu7uhUnvIqzueK5kqyHxyeAaRdveH6gcBD-zjlCLPusCp1y-k_Gfx3AKPxFBXWUPiJ60txxXJ2SU1oIcVWNBEBtKmAvYBkQvHQ4IHDlmne0bmnmtBzHVpkqjurCDKFxLlL6QS3laCQpwnqVBF-7_zecjRn4EhBGjZkCGhs6T1g5k1Iz98GgbSOhBAo6MfzYSmy9PZlLA1fNAD3sWE-gfR9VxpQztgHHTT_fKdEucxJjzWfKYTPWZ9BghbhTOFjvq4254kgyWMTWm3LupNNYBEjGhVyjF7YEoAREfaP1JNvuEioZt45ik0KdZ1mZ2Ga813rlq1mpVx_f288PDT5JMBkDBVGmsjG1TgQQmIyHVYNDCZ2vGG=w900-h300-no?authuser=2">
                  </div>
                  <div style="width: 100%; border: 1px solid gray; margin-bottom: 30px;">
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Nombre del cliente</div>
                      <div style="height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">${formName}</div>
                  </div>
                  <div style="width: 100%; border: 1px solid gray; margin-bottom: 30px;">
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Número de teléfono</div>
                      <div style="height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">${formPhone}</div>
                  </div>
                  <div style="width: 100%; border: 1px solid gray; margin-bottom: 30px;">
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Correo electrónico</div>
                      <div style="min-height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">${formEmail}</div>
                  </div>
                  <div style="width: 100%; border: 1px solid gray; margin-bottom: 30px;">
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


   