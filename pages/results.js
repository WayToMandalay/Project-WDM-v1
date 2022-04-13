import React, { useEffect, useState } from 'react'
import MediumCarousel from '@components/MediumCarousel'
import { useSwiper } from 'swiper/react'
import MobileCarouselLong from '@components/MobileCarouselLong'
import { useTheme } from '../context'
import { setDecorAnimation, setResultsAnimation } from '@helpers/animations'

const items = [
    {
        title: 'Online Education',
        semiTitle: '150% Growth',
        color: 'blue',
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
    },
    {
        title: 'Chargeback',
        semiTitle: '150% Growth',
        color: 'yellow',
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
    },
    {
        title: 'Online Casinos',
        semiTitle: '150% Growth',
        color: 'red',
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
    },
    {
        title: 'Chargeback',
        semiTitle: '150% Growth',
        color: 'purple',
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
    },
    {
        title: 'Online Education',
        semiTitle: '150% Growth',
        color: 'white',
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
    },
]

const Results = ({ blockSlider, isActive }) => {
    const [activeItem, setActiveItem] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [mouseStart, setMouseStart] = useState(0)
    const [wheelY, setWheelY] = useState(0)
    const [wheelX, setWheelX] = useState(0)
    const [wheelBlock, setWheelBlock] = useState(false)

    const swiper = useSwiper()
    const { setActiveFooterItem, setActiveSliderItem, rollNext, rollPrev } =
        useTheme()

    useEffect(() => {
        if (isActive) {
            setActiveFooterItem(2)
            setActiveSliderItem(null)
        }
    }, [activeItem, isActive])

    // useEffect(() => {
    //     if (wheelX === 0 && wheelY < 0) {
    //         prevItem()
    //     } else if (wheelX === 0 && wheelY > 0) {
    //         nextItem()
    //     } else if (wheelX > 0) {
    //         nextItem()
    //     } else if (wheelX < 0) {
    //         prevItem()
    //     }
    //     setWheelX(0)
    //     setWheelY(0)
    // }, [wheelBlock])

    function setCarouselItem(i) {
        setTouchStart(0)
        setTouchEnd(0)
        setActiveItem(i)
    }

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
        if (e.target.closest('.mobileCarouselLong-item:not(.active)')) {
            setActiveItem(
                +e.target
                    .closest('.mobileCarouselLong-item')
                    .getAttribute('data-item')
            )
        } else if (e.target.closest('.mediumCarousel2-item:not(.active)')) {
            console.log('here')
            setActiveItem(
                +e.target
                    .closest('.mediumCarousel2-item')
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
        } else if (mouseStart - e.pageX < -50 && mouseStart !== 0) {
            setMouseStart(0)
            prevItem()
        }
    }

    // function wheelHandler(e) {
    //     if (!wheelBlock) {
    //         setWheelX(e.deltaX)
    //         setWheelY(e.deltaY)
    //         setWheelBlock(true)
    //     }
    //     setTimeout(() => setWheelBlock(false), 800)
    // }

    function nextItem() {
        if (activeItem === items.length - 1) {
            swiper.slideNext()
        } else {
            setActiveItem(activeItem + 1)
        }
        rollNext()
    }

    function prevItem() {
        if (activeItem === 0) {
            swiper.slidePrev()
        } else {
            setActiveItem(activeItem - 1)
        }
        rollPrev()
    }
    return (
        <section
            className="aboutSection"
            onTouchStart={(e) => touchHandlerStart(e)}
            onTouchMove={(e) => touchHandlerMove(e)}
            onTouchEnd={() => handleTouchEnd()}
            onMouseDown={(e) => mouseHandlerStart(e)}
            onMouseUp={(e) => mouseHandlerEnd(e)}
            // onWheel={(e) => wheelHandler(e)}
            onMouseMove={(e) => setResultsAnimation(e)}
        >
            <h2 className="main__title aboutSection__title">
                Our <span className="orange">latest</span> results
            </h2>

            <div className="hide-m">
                <div className="aboutSection__mobile-carousel-container">
                    <MobileCarouselLong
                        items={items}
                        controllersClass="large"
                        activeItem={activeItem}
                        setActiveItem={setCarouselItem}
                    />
                </div>
            </div>
            <div className="show-m">
                <div className="aboutSection__medium-carouser-container">
                    <MediumCarousel
                        items={items}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                    />
                </div>
            </div>
            <span className="decor-1" />
            <span className="decor-2" />
            <span className="decor-3" />
            <span className="decor-4" />
        </section>
    )
}

export default Results
