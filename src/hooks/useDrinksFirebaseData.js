import { useState, useEffect } from "react"
import { getDataDrinkssFirebase } from "../firebase/functionsFirebase"

export const useDrinksFirebaseData = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getDataDrinkssFirebase()
            .then(products => {
                setState({
                    data: products,
                    loading: false
                })
            })
    }, [])

    return state;
}
