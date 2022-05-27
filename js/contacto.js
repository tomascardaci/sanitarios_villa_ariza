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
            Username : "comprasvillaariza@gmail.com",
            Password : "00CFE5103EACCD78CF840035D459D964A092",
            To : 'sanitariosvillaariza@gmail.com',
            From : "comprasvillaariza@gmail.com",
            Subject : `${formSubject}`,
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
                      <div style="height: 40px; padding-left: 20px; padding-top: 3px;background-color: #01A3BA; color: white; font-weight: bold; letter-spacing: 1px; font-size: 20px; ">Mensaje del cliente</div>
                      <div style="min-height: 60px; padding-left: 20px; padding-top: 12px; font-size: 20px;">
                          <p>${formMailBody}</p>
                      </div>
                  </div>
              </div>
          </div>`
          }).then(
            message => alert(message)
          );         
        
         
    };
})