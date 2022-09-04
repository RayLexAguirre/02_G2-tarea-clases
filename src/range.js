export default class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    
    getAllNumbers() {
        let array = [];
        
        for(let i = this.start; i <= this.end; i++){
           array.push(i);
        }

        return array; 
    }

    getAllNumbersInverted() {
        let array = [];
        
        for(let i = this.end; i >= this.start; i--){
           array.push(i);
        }

        return array;
    }

    getAllEven() {
        let array = [];
        
        for(let i = this.start; i <= this.end; i++){
           if(i%2 === 0) {
            array.push(i);
           }
        }

        return array;
    }

    getSum() {
        let suma = 0

        for(let i = this.start; i <= this.end; i++){
           suma = suma + i;
        }

        return suma;
    }
}