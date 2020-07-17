class Player {
    constructor() {
        this.status = "X"
    }

    changeStatus() {
        this.status = this.status === "X" ? "O" : "X";
    }
}