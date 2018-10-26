import React, { useState } from 'react'
import useTransfer from './transfer'

export function SimpleTransfer(props) {
    let [source, target, add, remove, selected] = useTransfer(props.source, 'name')

    return (
        <div>
            <ul>
                {source.map((item) => (
                    <li
                        key={item.name}
                        className={selected(item) ? 'selected' : ''}
                        onClick={() => {
                            add(item)
                        }}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            <ul>
                {target.map((item) => (
                    <li
                        key={item.name}
                        onClick={() => {
                            remove(item)
                        }}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function InputTransfer(props) {
    let [source, target, add, remove, selected] = useTransfer(props.source, 'name')
    let [value, setValue] = useState('')
    return (
        <div>
            <ul>
                {source.map((item) => (
                    <li
                        key={item.name}
                        className={selected(item) ? 'selected' : ''}
                        onClick={() => {
                            add(item)
                        }}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button
                onClick={() => {
                    let item = target.filter((item) => item.name === value)[0]
                    if (item) {
                        remove(item)
                    }
                    setValue('')
                }}
            >
                Remove
            </button>
            <ul>
                {target.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
