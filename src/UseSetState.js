import React, { useState, Component } from 'react'

function useSetState(initState = {}) {
    const [state, replaceState] = useState(initState)
    function setState(newState) {
        if (typeof newState === 'function') {
            replaceState((prevState) => ({
                ...prevState,
                ...newState(prevState),
            }))
        } else {
            replaceState((prevState) => {
                return {
                    ...prevState,
                    ...newState,
                }
            })
        }
    }
    return [state, setState]
}

export default function UseSetState(props) {
    const [state, setState] = useSetState({
        count: 0,
        disableAdd: false,
        disableSub: false,
    })

    const onAdd = () => {
        setState({
            disableAdd: true,
        })
        setState(({ count }) => ({
            count: count + 1,
        }))
        setTimeout(() => {
            setState({
                disableAdd: false,
            })
        }, 3000)
    }

    const onSub = () => {
        setState(({ count }) => ({
            count: count - 1,
        }))
        setTimeout(() => {
            setState({
                disableSub: false,
            })
        }, 3000)
    }

    return (
        <div>
            <button onClick={onSub} disabled={state.disableSub}>
                -1
            </button>
            <button>{state.count}</button>
            <button onClick={onAdd} disabled={state.disableAdd}>
                +1
            </button>
        </div>
    )
}
