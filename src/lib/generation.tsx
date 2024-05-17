import  { Data } from './data';

export class ArrayGeneration {
    data: Data;
    list: Array<Data>;

    constructor(data: Data) {
        this.data = data;
        this.list = [];
    }
    
    insert(data: Data) {
        this.list.push(data);
    }

    // create() {
    //     for (int i = 0; i<)
    // }

    
}