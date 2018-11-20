import React, { useMemo, useState } from 'react'

const fib = (n) => {
    return n <= 2 ? n : fib(n-1) + fib(n-2)
}

export default function() {
    const [n, setN] = useState(1)
    const [m, setM] = useState(1)
    const result = useMemo(() => (
        fib(n)
    ), [n])

    return (
        <div>
            <h1>{result}</h1>
            <h1>{m}</h1>
            <button onClick={() => setN(44)}>calc fib 44</button>
            <button onClick={() => setM(m => m+1)}>re-render</button>
        </div>
    )
}