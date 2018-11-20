import {useState} from 'react'

class Transfer {
    static addToTarget(target, item, attrKey) {
        if (target.some(currentItem => currentItem[attrKey] === item[attrKey])) {
            return target
        } else {
            return target.concat(item)
        }
    }
    static removeFromTarget(target, item, attrKey) {
        return target.filter(currentItem => currentItem[attrKey] !== item[attrKey])
    }
}

export default function useTransfer(initSource, attrKey) {
    let [source] = useState(initSource)
    let [target, setTarget] = useState([])
    function add(item) {
        setTarget(Transfer.addToTarget(target, item, attrKey))
    }
    function remove(item) {
        setTarget(Transfer.removeFromTarget(target, item, attrKey))
    }
    function selected(item) {
        return target.some(currentItem => item[attrKey] === currentItem[attrKey])
    }
    return [source, target, add, remove, selected]
}