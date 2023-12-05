class NetworkCalls {
    constructor(type) {
        this.type = type;
    }

    setType(type) {
        this.type = type;
    }

    calculate(num1, num2) {
        return this.type.calculate(num1, num2);
    }
}

class UseNetworkCall {
    constructor() {}

    calculate(num1, num2) {
        return num1 + num2;
    }
}

class VehicleNetworkCall {
    constructor() {
    }

    calculate(num1, num2) {
        return num1 * num2;
    }
}

const network = new NetworkCalls(new UseNetworkCall());
console.log(network.calculate(10, 5)); // 15
network.setType(new VehicleNetworkCall()); 
console.log(network.calculate(10, 5)); // 50