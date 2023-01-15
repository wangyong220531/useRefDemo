import React, { useMemo, useRef, useState } from "react"
import "./App.css"

const Counter: React.FC = () => {
    const [count, setCount] = useState(0)

    let timer = useRef<any>()

    const start = useMemo(() => {
        return () => {
            if (!timer.current) {
                timer.current = setInterval(() => {
                    setCount(c => c + 1)
                }, 1000)
            }
        }
    }, [])

    const pause = useMemo(() => {
        return () => {
            if (timer.current) {
                clearInterval(timer.current)
                timer.current = null
            }
        }
    }, [])

    const reset = useMemo(() => {
        return () => {
            pause()
            setCount(0)
        }
    }, [])

    return (
        <>
            <div className={"container"}>
                <div>{count}</div>
                <button onClick={start}>开始计数</button>
                <button onClick={pause}>暂停</button>
                <button onClick={reset}>重置</button>
            </div>
        </>
    )
}

export default Counter