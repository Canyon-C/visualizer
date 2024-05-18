import  { Data } from './data';

export class ArrayPopulation {
    list: Array<Data>;

    constructor() {
        this.list = [];
    }
    
    insert(data: Data) {
        this.list.push(data);
    }
    
}

export class GenerateMarkup {
    data: ArrayPopulation;

    constructor(data: ArrayPopulation) {
        this.data = data;
    }
    
    render() {
        return(
           <div className="flex justify-center items-center">
            <section>
                <p></p>
            </section>
           </div>
        );
    }
}