function addAndRemoveStyle(elems, counter = 0, className) {
    elems.forEach((elem, index) => {
        elem.classList.remove(className)

        if (index == counter) {
            elem.classList.add(className)
        }
    })
}

export default addAndRemoveStyle;