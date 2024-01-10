'use strict'

window.addEventListener('DOMContentLoaded', _=>{
    const forms = document.querySelectorAll('form');
    

    const message = {
        loading: 'loading',
        success: 'thank you',
        failure: 'mistake',

    }

    forms.forEach(item =>{
        postData(item);
    })

    function postData(form){
        form.addEventListener('submit', e=>{
            const btn = document.querySelector('discount__content__left__form__btn')

            // Чтобы страница не перезагружалась
            e.preventDefault();

            const statusMess = document.createElement('div');
            // statusMess.classList
            statusMess.textContent = message.loading;
            form.append(statusMess);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            

            // request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {}
            formData.forEach(function(value, key){
                object[key] = value
            })

            // const json = JSON.stringify(object)

            // request.send(json);

            fetch('server.php', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then(data =>data.text())
            .then(data =>{
                console.log('good', data);
                statusMess.textContent = message.success;
                // statusMess.remove()
                setTimeout(()=>{
                    statusMess.remove()
                }, 2000)
            }).catch(() =>{
                console.log('bad');
                statusMess.textContent = message.failure;
            }).finally(()=>{
                // form.reset()
                
            })

            // request.addEventListener('load', _=>{

            //     if(request.status == 200){
            //         console.log('good', request.response);
            //         statusMess.textContent = message.success;
            //         // btn.innerHTML.textContent = message.success
            //         form.reset()
            //         setTimeout(()=>{
            //             statusMess.remove()
            //         }, 2000)
            //     }else{
            //         console.log('bad');
            //         statusMess.textContent = message.failure;
            //     }

            // })
        })

        
        
    }

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: "POST",
    //     body: JSON.stringify({name: 'alex'}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json));
    // for(let i of forms){
    //     i.addEventListener('submit', e=>{

    //         // Чтобы страница не перезагружалась
    //         e.preventDefault()

    //         const statusMess = document.createElement('div')
    //         // statusMess.classList
    //         statusMess.textContent = message.loading
    //         i.append(statusMess)

    //         const request = new XMLHttpRequest()
    //         request.open('POST', 'server.php')

    //         request.setRequestHeader('Content-type', 'multipart/form-data')
    //         const formData = new FormData(i)
    //         request.send(formData)

    //         request.addEventListener('load', _=>{
    //             if(request.status == 200){
    //                 console.log('good', request.response)
    //                 statusMess.textContent = message.success
    //             }else{
    //                 console.log('bad')
    //                 statusMess.textContent = message.failure
    //             }
    //         })
    //     })
    // }
})