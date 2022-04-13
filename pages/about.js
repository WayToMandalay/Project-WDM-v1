import React, { useEffect, useState } from 'react'
import MainButton from '@components/MainButton'
import { useSwiper } from 'swiper/react'
import { useTheme } from '../context'
import { setDecorAnimation } from '@helpers/index'
import { setAboutAnimation } from '@helpers/animations'

const About = ({ blockSlider, isActive }) => {
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [mouseStart, setMouseStart] = useState(0)

    const swiper = useSwiper()

    const { setActiveFooterItem, setActiveSliderItem, rollNext, rollPrev } =
        useTheme()

    useEffect(() => {
        if (isActive) {
            setActiveFooterItem(4)
            console.log('use in about')
            setActiveSliderItem(null)
            blockSlider([true, true])
            document.querySelector('.secondFooter__rollerBlock').style.display =
                'block'
        }
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
            className="mainSixth container"
            onTouchStart={(e) => touchHandlerStart(e)}
            onTouchMove={(e) => touchHandlerMove(e)}
            onTouchEnd={() => handleTouchEnd()}
            onMouseDown={(e) => mouseHandlerStart(e)}
            onMouseUp={(e) => mouseHandlerEnd(e)}
            onMouseMove={(e) => setAboutAnimation(e)}
        >
            <h2 className="main__title mainSixth__title">
                Who <span className="orange underline-sm">we</span> are
            </h2>
            <div className="mainSixth__content">
                <p>
                    WDM is a digital marketing and website development agency
                    that provides a wide range of services to businesses and
                    companies in all fields. Digital marketing is a world in
                    progress. Keeping your brand at the forefront and
                    outperforming the competition requires professional, precise
                    work and constant innovation to make your business a
                    highlight.
                </p>
                <p>
                    Proper digital marketing combines all the parameters -
                    building a top-notch website, maintaining constant contact
                    with your target audience through professional social media
                    management, effective organic promotion that generates
                    traffic, sponsored promotion that increases conversion
                    rates, and a clear understanding of what can really benefit
                    your business.
                </p>
            </div>

            <div className="mainSixth-btn-container">
                <MainButton
                    size={'small'}
                    color={'yellow'}
                    text={"Let's talk"}
                />
            </div>
            <span className="decor-1" />
            <span className="decor-2" />
            <span className="decor-3" />
            <span className="decor-4" />
        </section>
    )
}

export default About
