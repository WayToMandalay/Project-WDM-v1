import React, { useEffect, useState } from 'react'
import MainButton from '../MainButton/mainButton'
import { useSwiper } from 'swiper/react'
import { useTheme } from '../../context'
import { setMainFourthAnimation } from '@helpers/animations'

const MainFourth = ({ blockSlider, isActive }) => {
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [mouseStart, setMouseStart] = useState(0)

    const swiper = useSwiper()

    const { rollNext, rollPrev, setActiveSliderItem } = useTheme()

    useEffect(() => {
        if (isActive) {
            blockSlider([true, true])
            setActiveSliderItem(null)
            console.log('use in 4th')
            setTimeout(() => {
                document
                    .querySelector('.mainFourth__keepSwiping')
                    .classList.add('show')
            }, 600)
        }
        return document
            .querySelector('.mainFourth__keepSwiping')
            .classList.remove('show')
    }, [isActive])

    function touchHandlerStart(event) {
        setTouchStart(event.targetTouches[0].clientX)
    }

    function touchHandlerMove(event) {
        setTouchEnd(event.targetTouches[0].clientX)
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 50 && touchStart !== 0 && touchEnd !== 0) {
            setTouchStart(0)
            setTouchEnd(0)
            rollNext()
            swiper.slideNext()
        }

        if (touchStart - touchEnd < -50 && touchStart !== 0 && touchEnd !== 0) {
            setTouchStart(0)
            setTouchEnd(0)
            rollPrev()
            swiper.slidePrev()
        }
    }

    function mouseHandlerStart(e) {
        setMouseStart(e.pageX)
    }

    function mouseHandlerEnd(e) {
        if (mouseStart - e.pageX > 100 && mouseStart !== 0) {
            setMouseStart(0)
            rollNext()
            swiper.slideNext()
        } else if (mouseStart - e.pageX < -100 && mouseStart !== 0) {
            setMouseStart(0)
            rollPrev()
            swiper.slidePrev()
        }
    }

    return (
        <section
            className="container mainFourth"
            onTouchStart={(e) => touchHandlerStart(e)}
            onTouchMove={(e) => touchHandlerMove(e)}
            onTouchEnd={() => handleTouchEnd()}
            onMouseDown={(e) => mouseHandlerStart(e)}
            onMouseUp={(e) => mouseHandlerEnd(e)}
            onMouseMove={(e) => setMainFourthAnimation(e)}
        >
            <h2 className="main__title mainFourth-title">
                <span className="orange mainFourth-title-padding">
                    Feel like
                </span>
                <span className="mainFourth-doubling" />
                <br />
                your monthly sales?
            </h2>
            <MainButton size={'small'} color={'yellow'} text={"Let's talk"} />
            <div className="mainFourth__keepSwiping">
                Keep <span className="hide-xl">swiping</span>{' '}
                <span className="show-xl">scrolling</span> to see the portfolio
            </div>

            <span className="decor-1" />
            <span className="decor-2" />
            <span className="decor-3" />
            <span className="decor-4" />
        </section>
    )
}

export default MainFourth
