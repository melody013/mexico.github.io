const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/Chichén Itza.jfif')";
    title.innerText = 'Chichén Itza';
    textCard.innerText = 'Es el hogar de una serie de maravillas arquitectónicas y naturales que incluyen: El Castillo, la Gran Cancha de Pelota, el Templo de los Guerreros, el Cenote Sagrado, entre otros. ';
});
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/Truchas La Cabañita.jfif')";
    title.innerText = 'Truchas La Cabañita';
    textCard.innerText = 'Opciones de servicio: Consumo en el lugar ,Para llevar · No ofrece servicio de entrega a domicilio'
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/ciudad.jfif')";
    title.innerText = 'Ciudad de México';
    textCard.innerText = ' Es la densamente poblada capital de México que se encuentra a gran altura. Es famosa por su Templo Mayor (un templo azteca del siglo XIII), la Catedral Metropolitana de México, de estilo barroco, de los conquistadores españoles y el Palacio Nacional, que alberga murales históricos de Diego Rivera. ';
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/Cancun.jfif')";
    title.innerText = 'Cancun';

    textCard.innerText = ' es una ciudad de México ubicada en la península de Yucatán que limita con el mar Caribe y que es conocida por sus playas, los numerosos centros turísticos y la vida nocturna.Cancún también es un destino popular entre estudiantes durante el período de vacaciones universitarias en la primavera. ';
})

/* MENU MOBILE */

const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelector('.links');
const linksItens = document.querySelectorAll('.links a');

menuMobile.addEventListener('click', () => {
    links.classList.toggle('active');
});

/* FECHA O MENU AO CLICAR NO LINK */
linksItens.forEach((linksItem) => {
    linksItem.addEventListener('click', () => {
        links.classList.toggle('active');
    })
})