let year = document.querySelector('.year');


setInterval(() => {
    year.innerHTML ='2023 - ' +  new Date().getFullYear();
}, 1000);