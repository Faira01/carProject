class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model
        this.year=year
    }
    honk(){
        return 'Beep'
    };
    toString(){
        return (`This vehicle is a ${this.make} ${this.model} from ${this.year} `)
    };
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
    }
    numWheels(){
        return 4
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year)
    }
    revEngine(){
        return 'VROOM!!!'
    }
    numWheels(){
        return 2
    }
}

class Garage{
    constructor(capactiy,vehicles){
        this.vehicles=[];
        this.capactiy=capactiy;
    }
    add(newVehicle){
        if(!newVehicle instanceof Vehicle){
            return "Only Vehicles are allowed in here!"
        }
        if (this.vehicles.length >= this.capactiy){
            return "Sorry we're full."
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle added!'
    }
}
