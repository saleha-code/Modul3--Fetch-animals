let url_to_fetch_cat = "https://api.thecatapi.com/v1/images/search"; // url
let url_to_fetch_dog = "https://dog.ceo/api/breeds/image/random"; // message
let url_to_fetch_fox = "https://randomfox.ca/floof/"; //image

// HTML elements
let displayedImage = document.querySelector(".displayedImage");
let formElement = document.querySelector(".submitForm");
let selectAnimalElement = document.querySelector(".select-animal");
let favoritesDivElement = document.querySelector(".favoriteImagesContainer");

//Event listener on form element
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  //Select animal at selected index
  let selectedAnimal =
    selectAnimalElement.options[selectAnimalElement.selectedIndex].value;

  //Check for animal chosen and fetch data
  if (selectedAnimal === "Dog")
    fetch(url_to_fetch_dog)
      .then((response) => response.json())
      .then((data) => (displayedImage.src = data.message));
  if (selectedAnimal === "Cat")
    fetch(url_to_fetch_cat)
      .then((response) => response.json())
      .then((data) => (displayedImage.src = data[0].url));
  if (selectedAnimal === "Fox")
    fetch(url_to_fetch_fox)
      .then((response) => response.json())
      .then((data) => (displayedImage.src = data.image));
});

// Click event listener to add image to favorites
document.addEventListener("click", (e) => {
  let target = e.target;
  //Checking if the image clicked is our displayedImage element
  if (target.classList.contains("displayedImage")) {
    let imageURL = target.src;
    //Insert new image to .favoriteImagesContainer by source of the original displayImage src url;
    favoritesDivElement.insertAdjacentHTML(
      "beforeend",
      `<li>
        <img
          src=${target.src}
          height='25%'
          width='25%'
        />
      </li>`
    );
  }
});
