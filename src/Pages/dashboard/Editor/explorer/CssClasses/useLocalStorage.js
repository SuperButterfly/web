import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = window.localStorage.getItem(key)
        //si encuentra ese valor almacenado en jsonValue en localStorage lo convierte a json y lo retorna
        if (jsonValue != null) return JSON.parse(jsonValue)
      
        if (typeof initialValue === "function") {
            return initialValue
        } else {
            //al comienzo como no tenemos items almacenados devolvera el initialValue que es el array vacio []
            return initialValue
        }
    })

    useEffect(() => {
        //actualizara el localStorage con el key predeterminada que no cambia, y el valor que son nuestros objetos o array
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
