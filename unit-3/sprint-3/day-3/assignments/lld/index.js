



class Vehicle {

    constructor (t,r) {

        this.type = t;
        this.regNum = r;
    }

}

class car extends Vehicle {
    constructor(regNum) {

        super('car', this.regNum);

    }

}

class Bike extends Vehicle {
    constructor(regNum) {

        super('Bike', this.regNum);

    }

}

class Truck extends Vehicle {
    constructor(regNum) {

        super('Truck', this.regNum);
    }
}


class slot {

    constructor(number, type) {

        this.Number = number;
        this.type = type;
        this.isBooked = false;
    }

}

class parking {

    constructor(floor,maxfloor) {
        this.floorNum = floor

        this.parkingslots = [];

        for(let i=0; i<maxfloor; i++) {

            if(i===0) {
                this.parkingslots.push(new slot(i,'Bike'))
            }

            else if(i===1) {
                this.parkingslots.push(new slot(i, 'car'));
            }

            else {
                this.parkingslots.push(new slot(i, 'Truck'))
            }
        }
    }

}

class Mall {

    constructor(NumberofFloors) {
        this.floors = [];
        //this.NumberofFloor = NumberofFloors;

        for(let i=0; i<NumberofFloors; i++) {
            this.floors.push(new parking(i,NumberofFloors))
        }
    }

    parkVehicle(Vehicle) {

        let type = Vehicle.type;

        let slot = this.findslot(type)
        
        if(!slot) {
            console.log('all slots full');
            return false;
        }

        slot.isBooked = true;

    }

    findslot(userVehicletype) {

        for(let i=0; i<NumberofFloors; i++) {

            for(let slot of this.floors[i].parkingslots) {

                if(slot.type === userVehicletype && !slot.isBooked) {

                    return {floorNum: i, foundedslot: slot}
                }
            }
        }

        return false;
    }

}

let m1 = new Mall (3);
console.log(m1);

let b1 = new Bike ('MH45 2304');

let b2 = new Bike ('MH11 2004');

m1.parkVehicle(b1);

m1.parkVehicle(b2)

console.log(m1);


// let c1 = new Truck ('MH876387');
// console.log(c1)