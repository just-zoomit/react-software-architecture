import { makeObservable, observable, action } from "mobx";

export class Counter {
    numberOfClicks = 0;

    constructor() {
        makeObservable(this, {
            numberOfClicks: observable,
            increment: action
        });
    }
    
    //Components can use this to increment the number of clicks
    increment = amount => {
        this.numberOfClicks += amount;
    }
}