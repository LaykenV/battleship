export class Ship {
    constructor(length) {
        this.length = length;
        this.ship = this.CreateShipArray();
    }
    CreateShipArray() {
        let shipArray = [];
        for (let i = 0; i < this.length; i++) {
            shipArray[i] = { hit: false };
            }
        return shipArray;
    }
    hit(index) {
        this.ship[index].hit = true;
    }
    getShip() {
        return this.ship;
    }
    getShipLength() {
        return this.ship.length;
    }
    checkHit(item) {
        if (item.hit === true) {
            return true;
        } else {return false};
    }
    isSunk() {
        if (this.ship.every(this.checkHit)) {
            return true;
        } else {return false};
    };
}