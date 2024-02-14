'use strict'

window.addEventListener('DOMContentLoaded', _=>{

    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector){
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.parent = document.querySelector(parentSelector)
        }

        render(){
            const element = document.createElement('div')
            element.innerHTML = `
            <div class="our-services__products__card">
                <img src="${this.src}" alt="">
                <p class="our-services__products__card__title">${this.title} </p>
                <p class="our-services__products__card__price">Стоимость работ <br> <span>от 6000 руб</span></p>
                <div class="our-services__products__card__excerpt">
                    <p>подробнее</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.707 16.707L16.707 12.707C16.8935 12.519 16.9981 12.2649 16.9981 12C16.9981 11.7352 16.8935 11.4811 16.707 11.293L12.707 7.29304C12.5184 7.11088 12.2658 7.01009 12.0036 7.01237C11.7414 7.01465 11.4906 7.11981 11.3052 7.30522C11.1198 7.49063 11.0146 7.74144 11.0123 8.00364C11.01 8.26584 11.1108 8.51844 11.293 8.70704L13.586 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4805 7 11.7348 7 12C7 12.2653 7.10536 12.5196 7.29289 12.7071C7.48043 12.8947 7.73478 13 8 13H13.586L11.293 15.293C11.1108 15.4816 11.01 15.7342 11.0123 15.9964C11.0146 16.2586 11.1198 16.5095 11.3052 16.6949C11.4906 16.8803 11.7414 16.9854 12.0036 16.9877C12.2658 16.99 12.5184 16.8892 12.707 16.707Z" fill="#D2AC69"/>
                        <path d="M22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51809 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92894 4.92894C3.53041 6.32746 2.578 8.10929 2.19215 10.0491C1.8063 11.9889 2.00433 13.9996 2.76121 15.8268C3.51809 17.6541 4.79981 19.2159 6.4443 20.3147C8.08879 21.4135 10.0222 22 12 22C14.6513 21.9971 17.1931 20.9426 19.0679 19.0679C20.9426 17.1931 21.9971 14.6513 22 12ZM11.293 16.707C11.1055 16.5195 11.0002 16.2652 11.0002 16C11.0002 15.7348 11.1055 15.4805 11.293 15.293L13.586 13H8C7.73479 13 7.48043 12.8946 7.2929 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.2929 11.2929C7.48043 11.1054 7.73479 11 8 11H13.586L11.293 8.707C11.1108 8.5184 11.0101 8.2658 11.0123 8.0036C11.0146 7.74141 11.1198 7.49059 11.3052 7.30519C11.4906 7.11978 11.7414 7.01461 12.0036 7.01233C12.2658 7.01005 12.5184 7.11085 12.707 7.293L16.707 11.293C16.8935 11.481 16.9981 11.7352 16.9981 12C16.9981 12.2648 16.8935 12.519 16.707 12.707L12.707 16.707C12.5195 16.8945 12.2652 16.9998 12 16.9998C11.7348 16.9998 11.4805 16.8945 11.293 16.707Z" fill="#F2F2F2"/>
                    </svg>
                </div> 
            </div>
            `
            this.parent.append(element)
        }
    }

    const forms = document.querySelectorAll('form');
    const addContent = document.querySelector('.post-content')
    let count = 4
    let aa = []
    const ww = new MenuCard
    

    const message = {
        loading: 'loading',
        success: 'thank you',
        failure: 'mistake',

    }

    forms.forEach(item =>{
        bindPostData(item);
    })
    const getResources = async (url) =>{
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()

    }

    // getResources('./db.json')
    //     .then(({menu}) => {
    //         menu.forEach(({img, altimg, title, descr, price}) =>{
    //             new MenuCard(img, altimg, title, descr, price, '.our-services .container .our-services__products').render()
    //         })
    //     })
    //     .then(Response => {
    //         console.log(JSON.stringify(Object.fromEntries(Response.entries())))
    //     })

    // addContent.addEventListener('click', async url=>{
    //     const res2 = await fetch(url);

    //     aa = await res2.json()
    //     return aa
    //     // new MenuCard(
    //     //     "images/image44.png",
    //     //     "altimg",
    //     //     'title',
    //     //     'descr',
    //     //     'price',
    //     //     '.our-services .container .our-services__products'
    //     // ).render()
    // })

    // addContent('http://localhost:3000/menu')
    //     .then(Response => {
    //         Response.forEach(({img, altimg, title, descr, price}) =>{
    //             new MenuCard(img, altimg, title, descr, price, '.our-services .container .our-services__products').render()
    //         })
    //     })

    // fetch('./db.json')
    // .then(Response => Response.json())
    // .then(({menu}) => {
    //     console.log(menu)
    // })

    


    const postData = async (url, data) =>{
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json()
    }

    const wer = document.querySelector('.our-services__products')

    async function fgh(){
        const res = await fetch('./db.json')
        const {menu} = await res.json()

        
        aa = menu
        aa.length = count
        
        // const {menu} = await getResources('./db.json')
        // const menu = await Promise.all([
        //     getResources('./db.json'),
        //     getResources('./db.json'),
        //     getResources('./db.json'),
        //     // getResources('./db.json'),
        //     // getResources('./db.json')
        // ])

        for(let j of aa){

            const el = document.createElement('div')
            
            el.innerHTML = `
            <div class="our-services__products__card">
                <img src="${j.img}" alt="">
                <p class="our-services__products__card__title">${j.title} </p>
                <p class="our-services__products__card__price">Стоимость работ <br> <span>от 6000 руб</span></p>
                <div class="our-services__products__card__excerpt">
                    <p>подробнее</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.707 16.707L16.707 12.707C16.8935 12.519 16.9981 12.2649 16.9981 12C16.9981 11.7352 16.8935 11.4811 16.707 11.293L12.707 7.29304C12.5184 7.11088 12.2658 7.01009 12.0036 7.01237C11.7414 7.01465 11.4906 7.11981 11.3052 7.30522C11.1198 7.49063 11.0146 7.74144 11.0123 8.00364C11.01 8.26584 11.1108 8.51844 11.293 8.70704L13.586 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4805 7 11.7348 7 12C7 12.2653 7.10536 12.5196 7.29289 12.7071C7.48043 12.8947 7.73478 13 8 13H13.586L11.293 15.293C11.1108 15.4816 11.01 15.7342 11.0123 15.9964C11.0146 16.2586 11.1198 16.5095 11.3052 16.6949C11.4906 16.8803 11.7414 16.9854 12.0036 16.9877C12.2658 16.99 12.5184 16.8892 12.707 16.707Z" fill="#D2AC69"/>
                        <path d="M22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51809 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92894 4.92894C3.53041 6.32746 2.578 8.10929 2.19215 10.0491C1.8063 11.9889 2.00433 13.9996 2.76121 15.8268C3.51809 17.6541 4.79981 19.2159 6.4443 20.3147C8.08879 21.4135 10.0222 22 12 22C14.6513 21.9971 17.1931 20.9426 19.0679 19.0679C20.9426 17.1931 21.9971 14.6513 22 12ZM11.293 16.707C11.1055 16.5195 11.0002 16.2652 11.0002 16C11.0002 15.7348 11.1055 15.4805 11.293 15.293L13.586 13H8C7.73479 13 7.48043 12.8946 7.2929 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.2929 11.2929C7.48043 11.1054 7.73479 11 8 11H13.586L11.293 8.707C11.1108 8.5184 11.0101 8.2658 11.0123 8.0036C11.0146 7.74141 11.1198 7.49059 11.3052 7.30519C11.4906 7.11978 11.7414 7.01461 12.0036 7.01233C12.2658 7.01005 12.5184 7.11085 12.707 7.293L16.707 11.293C16.8935 11.481 16.9981 11.7352 16.9981 12C16.9981 12.2648 16.8935 12.519 16.707 12.707L12.707 16.707C12.5195 16.8945 12.2652 16.9998 12 16.9998C11.7348 16.9998 11.4805 16.8945 11.293 16.707Z" fill="#F2F2F2"/>
                    </svg>
                </div> 
            </div>
            `
            wer.append(el)
            
        }
    }

    fgh()
    

    async function addy(){
        // const res = await fetch('./db.json')
        // const {menu} = await res.json()

        // aa.length = 1
        
        
        for(let j of aa){

            const el = document.createElement('div')
            
            el.innerHTML = `
            <div class="our-services__products__card">
                <img src="${j.img}" alt="">
                <p class="our-services__products__card__title">${j.title} </p>
                <p class="our-services__products__card__price">Стоимость работ <br> <span>от 6000 руб</span></p>
                <div class="our-services__products__card__excerpt">
                    <p>подробнее</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.707 16.707L16.707 12.707C16.8935 12.519 16.9981 12.2649 16.9981 12C16.9981 11.7352 16.8935 11.4811 16.707 11.293L12.707 7.29304C12.5184 7.11088 12.2658 7.01009 12.0036 7.01237C11.7414 7.01465 11.4906 7.11981 11.3052 7.30522C11.1198 7.49063 11.0146 7.74144 11.0123 8.00364C11.01 8.26584 11.1108 8.51844 11.293 8.70704L13.586 11H8C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4805 7 11.7348 7 12C7 12.2653 7.10536 12.5196 7.29289 12.7071C7.48043 12.8947 7.73478 13 8 13H13.586L11.293 15.293C11.1108 15.4816 11.01 15.7342 11.0123 15.9964C11.0146 16.2586 11.1198 16.5095 11.3052 16.6949C11.4906 16.8803 11.7414 16.9854 12.0036 16.9877C12.2658 16.99 12.5184 16.8892 12.707 16.707Z" fill="#D2AC69"/>
                        <path d="M22 12C22 10.0222 21.4135 8.08879 20.3147 6.4443C19.2159 4.79981 17.6541 3.51809 15.8268 2.76121C13.9996 2.00433 11.9889 1.8063 10.0491 2.19215C8.10929 2.578 6.32746 3.53041 4.92894 4.92894C3.53041 6.32746 2.578 8.10929 2.19215 10.0491C1.8063 11.9889 2.00433 13.9996 2.76121 15.8268C3.51809 17.6541 4.79981 19.2159 6.4443 20.3147C8.08879 21.4135 10.0222 22 12 22C14.6513 21.9971 17.1931 20.9426 19.0679 19.0679C20.9426 17.1931 21.9971 14.6513 22 12ZM11.293 16.707C11.1055 16.5195 11.0002 16.2652 11.0002 16C11.0002 15.7348 11.1055 15.4805 11.293 15.293L13.586 13H8C7.73479 13 7.48043 12.8946 7.2929 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.2929 11.2929C7.48043 11.1054 7.73479 11 8 11H13.586L11.293 8.707C11.1108 8.5184 11.0101 8.2658 11.0123 8.0036C11.0146 7.74141 11.1198 7.49059 11.3052 7.30519C11.4906 7.11978 11.7414 7.01461 12.0036 7.01233C12.2658 7.01005 12.5184 7.11085 12.707 7.293L16.707 11.293C16.8935 11.481 16.9981 11.7352 16.9981 12C16.9981 12.2648 16.8935 12.519 16.707 12.707L12.707 16.707C12.5195 16.8945 12.2652 16.9998 12 16.9998C11.7348 16.9998 11.4805 16.8945 11.293 16.707Z" fill="#F2F2F2"/>
                    </svg>
                </div> 
            </div>
            `
            wer.append(el)
            
        }
    }

    addContent.addEventListener('click', addy)



    function bindPostData(form){
        form.addEventListener('submit', e=>{
            // const btn = document.querySelector('discount__content__left__form__btn')

            // Чтобы страница не перезагружалась
            e.preventDefault();

            const btn = document.querySelectorAll('.nnn')
            const word = 'cooool'
            

            const statusMess = document.createElement('div');
            // statusMess.classList
            statusMess.textContent = message.loading;
            form.append(statusMess);

            const request = new XMLHttpRequest();
            request.open('POST', './db.json');

            

            // request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            // const object = {}
            // formData.forEach(function(value, key){
            //     object[key] = value
            // })

            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            // const json = JSON.stringify(object)

            // request.send(json);

            // fetch('server.php', {
            //     method: "POST",
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            // })
            postData('./db.json', json)
            // .then(data =>data.text())
            .then(({requests}) =>{
                console.log('good', requests)
                // for(let i of btn){
                //     const inn = i.innerHTML
                //     i.innerHTML = word
                //     setTimeout(()=>{
                //         statusMess.remove()
                //         i.innerHTML = inn
                //     }, 2000)
                // }
                statusMess.textContent = message.success;
                statusMess.remove()
                
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

    // fetch('http://localhost:3000/menu')
        // .then(Response => Response.json())
        // .then(Response => console.log(Response))

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

const reviewPhone = document.querySelectorAll('.reviews__phone')
const phoneMaket = document.querySelectorAll('.reviews__phone-maket')
const phoneScreen = document.querySelectorAll('.reviews__phone-screen')
let reviewCount = 0


document.querySelector('.reviews__right_circle').addEventListener('click', _=>{
    

    reviewPhone[reviewCount].classList.add('dnone')
    // phoneMaket[reviewCount].classList.add('dnone')
    // phoneScreen[reviewCount].classList.add('dnone')
    ++reviewCount
})



document.querySelector('.reviews__left_circle').addEventListener('click', _=>{
    console.log(reviewPhone)
})
