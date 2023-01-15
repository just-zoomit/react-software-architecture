import {atom } from 'recoil';

export const counterState = atom({
    key: 'counterState',
    // Contains object with timestamp and amount from button click in CounterButton.js
    //[...clicksData,{timestamp: Date.now(), amount: incrementBy}
    default: [],
});