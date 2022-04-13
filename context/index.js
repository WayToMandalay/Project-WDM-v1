import React, { createContext, useState, useContext, useEffect } from 'react'
import clsx from 'clsx'

export const GlobalContext = createContext()

export function useTheme() {
    const context = useContext(GlobalContext)

    if (!context) throw new Error('sdasdas')

    return context
}

export function MyProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)
    const [activeFooterItem, setActiveFooterItem] = useState(0)
    const [activeSliderItem, setActiveSliderItem] = useState(null)
    const [rollerAngle, setRollerAngle] = useState(0)

    useEffect(() => {
        // localStorage.clear()
        if (localStorage.getItem('colorTheme')) {
            let value = JSON.parse(localStorage.getItem('colorTheme'))
            setDarkTheme(value)
            value
                ? document.body.classList.remove('light')
                : document.body.classList.add('light')
        }
    }, [])

    function rollNext() {
        setRollerAngle(rollerAngle + 130)
    }

    function rollPrev() {
        setRollerAngle(rollerAngle - 130)
    }

    return (
        <GlobalContext.Provider
            value={{
                darkTheme,
                setDarkTheme,
                activeFooterItem,
                setActiveFooterItem,
                activeSliderItem,
                setActiveSliderItem,
                rollNext,
                rollPrev,
                rollerAngle,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
