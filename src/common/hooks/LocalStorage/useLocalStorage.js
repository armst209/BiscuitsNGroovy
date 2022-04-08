import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    let result = initialValue;
    const write = JSON.stringify;
    const read = JSON.parse;

    const [localStorageState, setLocalStorageState] = useState(result);

    if (localStorage.getItem(key) != null) {
        result = read(localStorage.getItem(key));
    }
    else {
        localStorage.setItem(key, write(initialValue));
    }

    const setStateWithLocalStorage = (value) => {
        localStorage.setItem(key, write(value));
        setLocalStorageState(value);
    };
    return [localStorageState, setStateWithLocalStorage];

}

export default useLocalStorage