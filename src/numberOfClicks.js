import { selector } from "recoil"; 
import { counterState } from "./counterState";

export const numberOfClicks = selector({
    key: "numberOfClicksSelector",
    get: ({get}) => {
        const clicksData = get(counterState);
        const totalClicks = clicksData.reduce((total, click) => {
            return total + click.amount;
        }, 0);
        return totalClicks;
    },
});
