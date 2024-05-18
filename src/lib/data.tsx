export class Data {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    getData() {
        return this.value;
    }

}

export class DataView {
    data: Data;

    constructor(data: Data) {
        this.data = data;
    }

    render() {
        return(
            <div className="border-2 w-20 h-20 flex justify-center items-center">
                <p>{this.data.getData()}</p>
            </div>
        );
    }
}

