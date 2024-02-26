import { useState, useEffect } from "react"
import { getDataBreakfastFirebase } from "../firebase/functionsFirebase"

export const useBreakfastFirebaseData = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getDataBreakfastFirebase()
            .then(products => {
                setState({
                    data: products,
                    loading: false
                })
            })
    }, [])

    return state;
}
