const form = document.querySelector ('form');

const img = document.querySelector('.qr-img img');
   
form.addEventListener('submit', event => {
    event.preventDefault ();
    img.src = `https://chart.googleapis.com/chart?cht=qr&chl=${event.target.qr.value}&chs=160x160&chld=L|0;`
    img.parentNode.classList.add('active');

})
