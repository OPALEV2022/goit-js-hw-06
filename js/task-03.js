const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const createGallery = document.querySelector('.gallery');

const createGalleryItem = images
.map(({ url, alt }) =>
`<li><img src=${url} alt='${alt}' height=350 width= 420</li>`)
.join('');


createGallery.insertAdjacentHTML("beforeend", createGalleryItem);

createGallery.style.listStyle = "none";
createGallery.style.display = "flex";
createGallery.style.flexWrap = "wrap";
createGallery.style.justifyContent = "space-around";
createGallery.style.alignItems = "center";
createGallery.style.margin = "0 auto";
createGallery.style.padding = "20px";
createGallery.style.border = "2px solid black";
createGallery.style.borderRadius = "10px";
createGallery.style.backgroundColor = "palevioletred";

