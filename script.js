const mainContainer = document.querySelector(".main-container");
const slider = mainContainer.querySelector(".slider-itself");
const sliderItems_nodeList = slider.querySelectorAll(".slider-item");
const sliderItems = Array.from(sliderItems_nodeList);
const navItems = mainContainer.querySelectorAll(".slider-nav .nav-item");
let counter = 0;

function addStyle(counter) {
    sliderItems.forEach((sliderItem, index) => {
        sliderItem.classList.remove("active")

        if (index == counter) {
            sliderItem.classList.add("active")
        }
    })
}
addStyle(counter);

function moveForwards() {
    counter = counter + 1;
    sliderItems.forEach((sliderItem) => {
        if (counter == sliderItems.length) {
            counter = 0;
            addStyle(counter)
            return
        }
        addStyle(counter)
    })
}

function moveBackwards() {
    counter = counter - 1;
    if (counter < 0) {
        counter = sliderItems.length - 1;
        addStyle(counter);
        console.log('counter is: ' + counter);
        return
    }
    addStyle(counter)
}

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        if (navItem.classList.contains("right")) {
            moveForwards();
            return
        }
        moveBackwards();
    })

    sliderItems.forEach((sliderItem, index) => {
        sliderItem.addEventListener("click", () => {
            counter = index;
            addStyle(index)
        })
    })
})


