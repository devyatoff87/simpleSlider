import addAndRemoveStyle from "./js-helpers/addAndRemoveStyle.js";
import slideFuction from "./js-helpers/slideFunction.js";
import { hello } from "./js-helpers/newfile.js"
const mainContainer = document.querySelector(".main-container");
const slider = mainContainer.querySelector(".slider-itself");
const sliderItems_nodeList = slider.querySelectorAll(".slider-item");
const sliderItems = Array.from(sliderItems_nodeList);
const navItems = mainContainer.querySelectorAll(".slider-nav .nav-item");
let counter = 0;
console.log(hello);
addAndRemoveStyle(sliderItems, counter, "active")

navItems.forEach((navItem, navItemIndex) => {
    navItem.addEventListener("click", (e) => {
        if (navItemIndex < 1) {
            counter = slideFuction(false, counter, sliderItems, "active");
            //(false==left nav button true==right nav button)
            return;
        }
        counter = slideFuction(true, counter, sliderItems, "active")
    })

    sliderItems.forEach((sliderItem, index) => {
        sliderItem.addEventListener("click", () => {
            counter = index;
            addAndRemoveStyle(sliderItems, counter, "active")
        })
    })
})


