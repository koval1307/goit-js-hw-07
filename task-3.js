const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


// const galleryRef = document.querySelectorAll("#gallery");

// const galleryCollection = ((img) => {
//     const itemRef = document.createElement('li');
//     const imgRef = document.createElement('img');
//     itemRef.classList.add("gallery__item");
//     imgRef.classList.add("gallery__img");
//     itemRef.appendChild(imgRef);
//     imgRef.setAttribute("src", img.url);
//     imgRef.setAttribute("alt", img.alt);
//     return itemRef;
// }
// );
// const createCollection = images.map((img) => galleryCollection(img));
// document.querySelector('#gallery').append(...createCollection);