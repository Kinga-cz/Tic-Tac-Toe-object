class Field {
    constructor(element) {
        this.element = element //element DOM
    }

    changeState(playerStatus) {
        if (playerStatus === "O")
            this.element.innerHTML = '<img src="img\\o.png" style="width:50px;height:50px;">'
        if (playerStatus === "X")
            this.element.innerHTML = '<img src="img\\x.png" style="width:50px;height:50px;">'

    }


    changeColor() {
        this.element.style.backgroundColor = "green"
    }

}