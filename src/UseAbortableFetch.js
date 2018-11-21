import React, { useState } from 'react'

function useAbortableFetch() {
    const [controller, setController] = useState(new AbortController())

    const abortRequest = () => {
        controller.abort()
        let newController = new AbortController()
        setController(newController)
        return newController.signal
    }

    const fetchData = async (url, query) => {
        let newSignal = abortRequest()

        try {
            const response = await fetch(url, {
                signal: newSignal,
                method: 'GET',
            })
            return response.json()
        } catch (error) {
            console.group('----- fetch error -----')
            console.error(error)
            console.groupEnd()
            return
        }
    }

    return [fetchData, abortRequest]
}

export default function() {
    const [fetchData, abortRequest] = useAbortableFetch()

    return (
        <div>
            <button
                onClick={() => {
                    fetchData('http://httpbin.org/get')
                        .then((json) => {
                            console.warn(json)
                        })
                }}
            >
                fetch
            </button>
            <button onClick={abortRequest}>abort</button>
        </div>
    )
}
