

// set add-cart
const addButtons = document.querySelectorAll(".add-button");
const cartButton = document.querySelector(".cart-button");

for (let i = 0; i < addButtons.length; i++) {
  let addButton = addButtons[i];

  addButton.onclick = () => {
    let numberCart = cartButton.textContent;
    numberCart++;
    cartButton.innerHTML = numberCart;
  };
}

// set add-cart

// header-bar-menu
const header_nav = document.querySelector(".header-nav");
const mobilebar = document.querySelector(".menu-bar");
const heightmenu = header_nav.clientHeight;

mobilebar.onclick = () => {
  let isClose = header_nav.clientHeight === heightmenu;
  if (isClose) {
    header_nav.style.height = "auto";
  } else {
    header_nav.style.height = null;
  }
};
// header-bar-menu responsive

// banner

let index__banner = 1;
const changeImage = () => {
  let imgs = [
    "./imgs/banner--one.png",
    "./imgs/banner--two.png",
    "./imgs/banner--three.png",
    "./imgs/banner--four.png",
    "./imgs/banner--five.png",
    "./imgs/banner--six.png",
  ];
  document.getElementById("banner-img").src = imgs[index__banner];
  index__banner++;
  if (index__banner == 6) {
    index__banner = 0;
  }
};
setInterval(changeImage, 5000);
// banner


