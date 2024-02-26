import { useState, useEffect } from "react"
import { getDataProductsFirebase } from "../firebase/functionsFirebase"

export const useProductsFirebaseData = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getDataProductsFirebase()
            .then(products => {
                setState({
                    data: products,
                    loading: false
                })
            })
    }, [])

    return state;
}
