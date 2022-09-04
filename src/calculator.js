export default class Calculator {
    constructor(value) {
        this.value = 0;
    }

    add(amount) {
        this.value = this.value + amount;
        return this.value;
    }
    
    multiply(amount) {
        this.value = this.value * amount;
        return this.value;
    }

    power(number) {
        this.value = this.value ** number;
        return this.value;
    }

    reset() {
        this.value = 0;
        return this.value;
    }
    
}