import React, { useEffect } from 'react'
import { useTheme } from '../../context'

const SecondFooter = () => {
    const { rollerAngle } = useTheme()

    useEffect(() => {
        document.querySelector(
            '.secondFooter__rollerBlock'
        ).style.transform = `rotate(${rollerAngle}deg)`
    }, [rollerAngle])

    return (
        <div className="secondFooter show-xl">
            <div className="secondFooter__rollerBlock show-xl" />
        </div>
    )
}

export default SecondFooter
