import React, { useEffect, useState, useRef } from 'react';
import CustomButton from './components/CustomButton'
import Time from './components/Time'

const Chronometer = () => {
    const counter = useRef()
    const [seconds, setSeconds] = useState(119)
    const [minutes, setMinutes] = useState(0)
    const [isPlaying, setPlay] = useState(false)

    useEffect(() => { }, []);

    const start = () => {
        setPlay(true)
        counter.current = setInterval(() => {
            setSeconds(n => n + 1)
        }, 1000)
    }

    const pause = () => {
        setPlay(false)
        clearInterval(counter.current)
    }

    const reset = () => {
        pause()
        setSeconds(0)
    }

    useEffect(() => {
        if (seconds >= 60) {
            const computedMinutes = Math.floor(seconds / 60 )
            setMinutes(computedMinutes)
        }
    }, [seconds]);


    return (
        <div className={'main-container'}>
            <Time seconds={seconds}/>
            <div className="buttons-container">
                <CustomButton label={isPlaying ? 'pause' : 'start'} onPress={isPlaying ? pause : start} />
                <CustomButton label={'reset'} onPress={reset} />
            </div>
            {
                minutes === 1 && <div>E' passato un minuto</div>
            }
            {
                minutes > 1 && <div> sono passati {minutes} minuti </div>
            }
        </div>
    );
};

export default Chronometer;
