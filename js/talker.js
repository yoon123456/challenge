const image =["11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg",];
const talker = document.getElementById("talker")

const chosenImages= image[Math.floor(Math.random()* image.length)];

const bgImages = document.createElement("img");
bgImages.src=`img/${chosenImages}`;
talker.appendChild(bgImages);