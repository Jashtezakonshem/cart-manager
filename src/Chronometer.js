import React, { useEffect, useState, useRef } from 'react';
import CustomButton from './components/CustomButton'
import Time from './components/Time'

const Chronometer = () => {
    const counter = useRef()
    const [seconds, setSeconds] = useState(0)

    useEffect(() => { }, []);

    const start = () => {
        counter.current = setInterval(() => {
            setSeconds(n => n + 1)
        }, 1000)
    }



    return (
        <div className={'main-container'}>
            <Time seconds={seconds}/>
            <CustomButton label={'start'} onPress={start} />
        </div>
    );
};

export default Chronometer;
