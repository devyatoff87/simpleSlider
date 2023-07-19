import addAndRemoveStyle from "./addAndRemoveStyle.js";

function slideFuction(directionArg, counter, sliderItems, className) {
    if (directionArg) {
        counter = counter + 1;
        if (counter == sliderItems.length) {
            counter = 0;
            addAndRemoveStyle(sliderItems, counter, className);
            return counter
        }
        addAndRemoveStyle(sliderItems, counter, className);
        return counter;
    }

    counter = counter - 1;

    if (counter < 0) {
        counter = sliderItems.length - 1;
        addAndRemoveStyle(sliderItems, counter, className);
        return counter;
    }
    addAndRemoveStyle(sliderItems, counter, className);
    return counter;

};

export default slideFuction;