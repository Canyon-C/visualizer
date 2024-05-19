// import  { Data } from './data';

export class ArrayPopulation {
    list: Array<number>;

    constructor() {
        this.list = [];
    }
    
    insert(data: number) {
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
                
                this.data.list.map((data, index) => 
                    
                 <div key={index} className=" flex rounded-2xl border-2 items-center h-full justify-center flex-grow">
                    <p className="">{data}</p>
                </div>
                )

            );


    }
}