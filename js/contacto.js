$('#sendContactMail').click(function() {
    const getForm = document.querySelector('#cartForm');
    getForm.addEventListener('submit', handleSubmit);
    console.log(getForm)

    function handleSubmit(event) {
        event.preventDefault();
         const form = new FormData(this);
         var formName = form.get('name');
         var formPhone = form.get('phone');
         var formEmail = form.get('email');
         var formSubject = form.get('subject');
         var formMailBody = form.get('mailbody');
         

          Email.send({
              Host : "smtp.elasticemail.com",
              Username : "rodo.toms@gmail.com",
              Password : "CE7FB8D3C8517DB74A184E8A7FE0C742783E",
              To : 'tomascardaci88@gmail.com',
              From : `rodo.toms@gmail.com`,
              Subject : `${formName} / ${formSubject}`,
              Body : `<div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
              <div style="width: 50%; margin:40px; ">
                  <div style="width: 100%; margin-bottom: 30px; display: flex; flex-direction: column; align-items: center;">
                      <img height="120px" src="https://lh3.googleusercontent.com/Qx-2vVx7nXhfr5AZFS_9fOJDDXq2lsQWje3Byf6xqWIRkoDLsEWbALxo-LbLyrDSLUL-Acu4jHzTLXpXRL75u853UUZz_hajK62oDg0mSe6Yc60eb_XhvCMeMRRF71doxNqD6QP9Tx-rJ47DjtIoGaGAjSIudLc6d9E3vQtJVmZAIKih760F3XQ1-8qD5HR4BiUnSP_rXfiNURiFbs98Em1O2TBbogtYitLJE_MpkMLWKef5ryFZwG35Tuv_gsA9x9HYfIkoOXiUyFDcLEP5g_WTrdjIhV5mQdiBTlrIRDePVTVemhUJqe-BU0zK07kulZ6Jbi9D3UUCtHG4R1fAD2Ld_w6hXNa2cZCoRhzuCJBqBexyZSM--Ege9bnhTzsSh_m6Ak4ME_1XV2e24IV6aJtQgXUmpb7EAoqrCw55BLv4Tfxv2keTU8XcFdxXz8q5kFSQZ6y74s8ZjoJvy5x3Sydpev58O_9GeMRqz9GB6bouW9Bt4rbJvup1Qv7jdlfIYyf8UMPadgn-MAhXrKqi5-mnVR4bpYYgN-lMGtW5b2aZbO_KuhhW8Z_oTOrs1tNIwlvvgh9UE_ZMkaNAa2ahJfWf-iNrIN4EBoK4cH6IR7D9C8VjH3kHb8I-lFlul535RcuMSAE0apyiPlzur8D108rxqUTdPj-FYBwDCGJZxpjvmRBy0xnXbhLoqDayunokGKzU8gDDk6BbaBv6Y3gVCfkY-3I5ielf3TgKd0fxws7Zclazb2CowL5PigKN2lGhrQk73O1jyX5pj-x-1K91F80wF-wn7Wj1DGVfs215oC8CfFSAjoNATj969NVlMSL9hloT=w900-h300-no?authuser=2">
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
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Mensaje del cliente</div>
                      <div style="min-height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">
                          <p>${formMailBody}</p>
                      </div>
                  </div>
              </div>
          </div>`
          });         
        
        
        location.href="carrito_success.html"  
    };
})