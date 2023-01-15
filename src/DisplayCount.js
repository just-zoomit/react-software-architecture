// import { useRecoilState} from "recoil";
import { useRecoilValue } from "recoil";
import { counterState } from "./counterState";

export const DisplayCount = () => {
    // const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);

    //Only gives the value of the state and does allow to change it
    const clicksData = useRecoilValue(counterState);
    
    return (
        <>
        <h2> Number of Clicked: {clicksData.length}</h2>
        </>
    );
    }