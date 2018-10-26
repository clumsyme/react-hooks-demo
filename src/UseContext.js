import React, { createContext, useState, useContext } from 'react'

let ParentContext = createContext({ color: 'yellow' })
let ChildContext = createContext({ color: 'yellow' })

export default function Parent(props) {
    let [color, setColor] = useState('yellow')
    return (
        <ParentContext.Provider value={{ color }}>
            <button onClick={() => setColor('red')}>PARENT CONTEXT RED</button>
            <button onClick={() => setColor('green')}>PARENT CONTEXT GREEN</button>
            <Child />
        </ParentContext.Provider>
    )
}

function Child(props) {
    let parentContext = useContext(ParentContext)
    let [color, setColor] = useState('yellow')
    return (
        <ChildContext.Provider value={{ color }}>
            <button onClick={() => setColor('red')}>CHILD CONTEXT RED</button>
            <button onClick={() => setColor('green')}>CHILD CONTEXT GREEN</button>
            <h1 style={{ color: parentContext.color }}>I STYLED BY PARENT CONTEXT</h1>
            <GrandChild />
        </ChildContext.Provider>
    )
}

function GrandChild(props) {
    let childContext = useContext(ChildContext)
    let parentContext = useContext(ParentContext)
    return (
        <>
            <h1 style={{ color: childContext.color }}>I STYLED BY CHILD CONTEXT</h1>
            <h1 style={{ color: parentContext.color }}>I STYLED BY Parent Context TOO</h1>
        </>
    )
}
