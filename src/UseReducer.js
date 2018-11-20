import React, {useReducer} from 'react'

const init_state = {
    count: 0,
}

const reducer = (state=init_state, action) => {
    switch (action.type) {
        case 'add':
            return {
                count: state.count + action.n
            }
        case 'sub':
            return {
                count: state.count - action.n
            }
        case 'reset':
            return init_state
        default:
            return state
    }
}


const actions = {
    add(n) {
        return {
            type: 'add',
            n,
        }
    },
    sub(n) {
        return {
            type: 'sub',
            n,
        }
    },
    reset() {
        return {
            type: 'reset'
        }
    }
}

export default function (props) {
    const [state, dispatch] = useReducer(reducer, init_state)

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch(actions.add(2))}>+ 2</button>
            <button onClick={() => dispatch(actions.sub(1))}>- 1</button>
            <button onClick={() => dispatch(actions.reset())}>reset</button>
        </div>
    )
}
