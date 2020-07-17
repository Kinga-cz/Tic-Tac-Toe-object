class Div {
    constructor() {
        this.element = null //element DOM
    }
    createElement() {
        var div = document.createElement("div")
        this.element = div
    }

    appendToElement(element) {
        this.createElement()
        element.appendChild(this.element)
    }

    changeContent(text) {
        this.element.innerHTML = text
    }

}