 // setTimeout(() => window.location='/', 5000) 

 const countDown = document.querySelector('#countdown')
 let timeout = 5
 countDown.textContent = timeout

 let timer = setInterval(() => {
     timeout = timeout - 1
     countDown.textContent = timeout;

     if(timeout === 0) {
         clearInterval(timer)
         window.location='/'
 }

 }, 1000);