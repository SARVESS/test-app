function Dog(name, breed, color) {
    this.name = name;
    this.bread = breed;
    this.color = color;
    this.bark = function () {
        return 'Woof!';
    }
}


class Dog {
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }

    bark() {
       return 'Woof!'
    }
}




