import React, { Component } from 'react'
import './App.css'
import Counter from './Counter'
import {SimpleTransfer, InputTransfer} from './TransferComps'
import Demo from './Demo'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Demo title="基本用法">
                    <Counter />
                </Demo>
                <Demo title="自定义Hooks">
                    <SimpleTransfer source={[{ name: 'Tom' }, { name: 'Jerry' }, {name: 'Luke'}, {name: 'Anakin'}, {name: 'Walter'}]} />
                </Demo>
                <Demo title="自定义Hooks复用">
                    <InputTransfer source={[{ name: 'Tom' }, { name: 'Jerry' }, {name: 'Luke'}, {name: 'Anakin'}, {name: 'Walter'}]} />
                </Demo>
            </div>
        )
    }
}

export default App
