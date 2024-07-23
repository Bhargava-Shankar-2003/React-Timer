import { useState } from "react";

const defaults = {
    _seconds: 0,
    _minutes: 0,
}
export class Stopwatch{
    _seconds = 0
    _minutes = 0
    static _running = false
    constructor(minutes,seconds) {
        this._minutes = minutes || defaults._minutes;
        this._seconds = seconds || defaults._seconds;
    }
    increase() {
        if (this._seconds < 59) {
            this._seconds += 1   
        }
        else {
            if (this._minutes < 59) {
                this._minutes += 1
                this._seconds = 0
            }
            else {
                this.reset()
            }   
        }
    }
    start(setWatch) {
        console.log(Stopwatch._running)
        if (!Stopwatch._running) {
            Stopwatch._running = true 
            new Promise(resolve => { 
            var timer = setInterval(() => {
                console.log(Stopwatch._running)
                if (!Stopwatch._running) {
                    clearInterval(timer)
                    return resolve(this)
                } 
                this.increase()
                setWatch(new Stopwatch(this._minutes, this._seconds))
                return resolve(this)
            }, 1000)
        }
    )
        }
        
    }
    stop() {
        Stopwatch._running = false
        return
    }
    reset(setWatch) {
        setWatch(new Stopwatch(0,0))
    }
    getTime() {
        return `${this._minutes.toString().padStart(2,'0')}:${parseInt(this._seconds).toString().padStart(2,'0')}`
    }
}

export const useStopwatch = () => {
    let stopwatch = new Stopwatch(0,0,true)
    const [watch, setWatch] = useState(stopwatch)
    return [watch,setWatch]
}