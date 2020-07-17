class BoardGame {

    constructor() {
        this.fields = []; //objects field class
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.player = null
        this.gameState = ["", "", "", "", "", "", "", "", ""];
        this.div1 = null
        this.div2 = null
        this.endGame = false
    }

    StartGame() {
        this.player = new Player()
        this.div1 = new Div()
        this.div2 = new Div()
        this.draw()
    }

    draw() {
        var body = document.body
        var table = document.createElement("table")
        table.style.borderCollapse = "collapse";
        var a = 0
        for (let i = 0; i < 3; i++) {
            var tr = document.createElement("tr")
            table.appendChild(tr)
            for (let j = 0; j < 3; j++) {
                var td = document.createElement("td")
                td.style.border = "1px solid black";
                td.style.height = "60px"
                td.style.width = "60px"
                td.style.padding = "15px"
                td.style.cursor = "pointer"
                td.setAttribute("id", a)
                a++
                var field = new Field(td)
                field.element.addEventListener("click", e => { this.handleClick(e) }) // to może dodawać klasa field
                this.fields.push(field)
                tr.appendChild(td)
            }
        }
        body.appendChild(table)
        this.div1.appendToElement(document.body)
        this.div2.appendToElement(document.body)
    }

    handleClick(e) {
        var index = e.target.id
        if (this.gameState[index] !== "" || this.endGame == true) {
            return;
        }
        else {

            this.fields[index].changeState(this.player.status)
            this.gameState[index] = this.player.status
            this.checkEndGame()
            this.checkWinner()
            this.player.changeStatus()
            this.div1.changeContent("Player: " + this.player.status)

        }
    }

    checkWinner() {
        for (let i = 0; i < this.winningConditions.length; i++) {
            var winningConditions = this.winningConditions[i]
            var a = this.gameState[winningConditions[0]]
            var b = this.gameState[winningConditions[1]]
            var c = this.gameState[winningConditions[2]]

            if (a == "" || b == "" || c == "") {
                continue
            }
            if (a == b && b == c) {
                this.div2.changeContent("Winner: " + this.player.status)
                this.color(winningConditions)
                this.endGame = true
            }
        }

    }

    color(tab) {
        this.fields[tab[0]].changeColor()
        this.fields[tab[1]].changeColor()
        this.fields[tab[2]].changeColor()
    }

    checkEndGame() {
        var end = true
        for (let i = 0; i < this.winningConditions.length; i++) {

            if (this.gameState[i] == "") {
                end = false
                break
            }
        }
        if (end) {
            this.endGame = false
            this.div2.changeContent("Nobody has won")
        }

    }

}