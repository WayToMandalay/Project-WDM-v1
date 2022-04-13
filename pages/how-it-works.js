import React, { useEffect, useState } from 'react'
import MobileCarousel from '@components/MobileCarousel/mobileCarousel'
import DesktopAccordion from '@components/DesktopAccordion'
import { useSwiper } from 'swiper/react'
import { useTheme } from '../context'
import { setHowItWorksAnimation } from '@helpers/animations'

const items = [
    {
        title: '01. No budget needed',
        icon: '1.svg',
        iconClass: 'safeBox',
        color: 'blue',
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    },
    {
        title: '02. You just chill',
        icon: '2.svg',
        iconClass: 'beach',
        color: 'yellow',
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
    },
    {
        title: '03. Pay for results',
        icon: '3.svg',
        iconClass: 'darts',
        color: 'purple',
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
    },
]

const HowItWorks = ({ blockSlider, isActive }) => {
    const [activeItem, setActiveItem] = useState(0)

    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [mouseStart, setMouseStart] = useState(0)

    const [wheelY, setWheelY] = useState(0)
    const [wheelX, setWheelX] = useState(0)
    const [wheelBlock, setWheelBlock] = useState(true)

    const swiper = useSwiper()

    const { setActiveFooterItem, setActiveSliderItem, rollNext, rollPrev } =
        useTheme()

    useEffect(() => {
        if (isActive) {
            setWheelBlock(false)
            setActiveFooterItem(1)
            setActiveSliderItem(null)
        }
    }, [activeItem, isActive])

    // useEffect(() => {
    //     if (wheelX !== 0 && wheelY !== 0) {
    //         if (wheelX === 0 && wheelY < 0) {
    //             prevItem()
    //         } else if (wheelX === 0 && wheelY > 0) {
    //             nextItem()
    //         } else if (wheelX > 0) {
    //             nextItem()
    //         } else if (wheelX < 0) {
    //             prevItem()
    //         }
    //     }
    //
    //     setWheelX(0)
    //     setWheelY(0)
    // }, [wheelBlock])

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
            nextItem()
        }

        if (touchStart - touchEnd < -50 && touchStart !== 0 && touchEnd !== 0) {
            setTouchStart(0)
            setTouchEnd(0)
            prevItem()
        }
    }

    function mouseHandlerStart(e) {
        if (e.target.closest('.desktopAccordion__item:not(.active)')) {
            setActiveItem(
                +e.target
                    .closest('.desktopAccordion__item')
                    .getAttribute('data-item')
            )
        } else if (e.target.closest('.mobileCarousel-item:not(.active)')) {
            setActiveItem(
                +e.target
                    .closest('.mobileCarousel-item')
                    .getAttribute('data-item')
            )
        } else {
            setMouseStart(e.pageX)
        }
    }

    function mouseHandlerEnd(e) {
        if (mouseStart - e.pageX > 50 && mouseStart !== 0) {
            setMouseStart(0)
            nextItem()
        }
        if (mouseStart - e.pageX < -50 && mouseStart !== 0) {
            setMouseStart(0)
            prevItem()
        }
    }

    // function wheelHandler(e) {
    //     if (!wheelBlock) {
    //         setWheelX(e.deltaX)
    //         setWheelY(e.deltaY)
    //         setWheelBlock(true)
    //
    //         setTimeout(() => setWheelBlock(false), 100)
    //     } else {
    //         console.log('blocked')
    //         setWheelX(0)
    //         setWheelY(0)
    //     }
    // }

    function nextItem() {
        if (activeItem === items.length - 1) {
            swiper.slideNext()
            console.log('swiper next')
        } else {
            console.log('item next')
            setActiveItem(activeItem + 1)
        }
        rollNext()
    }

    function prevItem() {
        if (activeItem === 0) {
            swiper.slidePrev()
            console.log('swiper prev')
        } else {
            setActiveItem(activeItem - 1)
            console.log('item prev')
        }
        rollPrev()
    }

    return (
        <section
            className="mainSecond"
            onTouchStart={(e) => touchHandlerStart(e)}
            onTouchMove={(e) => touchHandlerMove(e)}
            onTouchEnd={() => handleTouchEnd()}
            onMouseDown={(e) => mouseHandlerStart(e)}
            onMouseUp={(e) => mouseHandlerEnd(e)}
            // onWheel={(e) => wheelHandler(e)}
            onMouseMove={(e) => setHowItWorksAnimation(e)}
        >
            <h2 className="main__title mainSecond__title">
                How <span className="orange">it all</span> works
            </h2>
            <div className="mainSecond__mobile-carousel-container hide-xl">
                <MobileCarousel
                    items={items}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
            </div>
            <div className="mainSecond__desktop-accordion-container show-xl">
                <DesktopAccordion
                    items={items}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
            </div>
            <span className="decor-1" />
            <span className="decor-2" />
            <span className="decor-3" />
            <span className="decor-4" />
        </section>
    )
}

export default HowItWorks
