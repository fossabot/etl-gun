import { from, Observable } from "rxjs";
import { Endpoint } from "../core/endpoint";

export class BufferEndpoint<T = any> extends Endpoint<T> {
    protected buffer: T[];

    constructor(...values: T[]) {
        super();
        this.buffer = [...values];
    }

    public createReadStream(): Observable<T> {
        return from(this.buffer);
    }

    public async push(value: T) {
        this.buffer.push(value); 
    }

    public sort(compareFn: ((v1: T, v2: T) => number | boolean) | undefined = undefined): void {
        if (compareFn === undefined) {
            this.buffer.sort();
            return;
        }

        this.buffer.sort((v1: T, v2: T) => {
            let res = compareFn(v1, v2);
            if (typeof res === "boolean") res = res? 1 : -1;
            return res;
        })
    }

    public forEach(callbackfn: (value: T, index: number, array: T[]) => void) {
        this.buffer.forEach(callbackfn);
    }
}