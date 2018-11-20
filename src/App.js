import React, { Component } from 'react'
import './App.css'
import Counter from './Counter'
import {SimpleTransfer, InputTransfer} from './TransferComps'
import UseContext from './UseContext'
import UseSetState from './UseSetState'
import Demo from './Demo'
import UseReducer from './UseReducer'
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
                <Demo title="useContext">
                    <UseContext />
                </Demo>
                <Demo title="useSetState">
                    <UseSetState />
                </Demo>
                <Demo title="useReducer">
                    <UseReducer />
                </Demo>
            </div>
        )
    }
}

export default App
