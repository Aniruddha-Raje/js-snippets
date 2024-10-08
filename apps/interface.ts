interface Device {
    name: String,
    age: Number,
    phone?: Number
}

let request = {
    name: "Ani",
    age: 25
}

let test = async (device :Device) => {
    
    console.log("device => ", device);

}

test(request);
