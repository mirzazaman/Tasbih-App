import { useState } from "react";
import { Vibration } from 'react-native';
import { useSelector } from "react-redux";

export default function useHome() {

    const state = useSelector(store => store.state);

    const [count, setCount] = useState(0);


    const increament = () => {
        let newCount = count + 1;
        if (state) {
            Vibration.vibrate(100);
        }
        setCount(newCount);
    };

    const initial = () => {
        if (state) {
            Vibration.vibrate(100);
        }
        setCount(0);
    }

    return [count, increament, initial];
}