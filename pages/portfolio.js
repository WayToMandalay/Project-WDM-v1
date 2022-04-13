import React, { useEffect, useState } from 'react'
import MobileMagicCarousel from '@components/MobileMagicCarousel/mobileMagicCarousel'
import DesktopMagicCarousel from '@components/DesktopMagicCarousel'
import { useSwiper } from 'swiper/react'
import { useTheme } from '../context'
import { setDecorArrayAnimation } from '@helpers/animations'

const items = [
    {
        title: '<span class="orange">Chb</span>Express',
        content:
            'A leading digital agency that provides 360° website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.',
        url: '/',
        img: '1',
    },
    {
        title: '<span class="orange">Chb</span>Express2',
        content:
            'A leading digital agency that provides 360° website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.',
        url: '/',
        img: '2',
    },
    {
        title: '<span class="orange">Chb</span>Express3',
        content:
            'A leading digital agency that provides 360° website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.',
        url: '/',
        img: '3',
    },
    {
        title: '<span class="orange">Chb</span>Express4',
        content:
            'A leading digital agency that provides 360° website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.',
        url: '/',
        img: '4',
    },
    {
        title: '<span class="orange">Chb</span>Express5',
        content:
            'A leading digital agency that provides 360° website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.',
        url: '/',
        img: '5',
    },
]

const Portfolio = ({ blockSlider, isActive }) => {
    const [activeItem, setActiveItem] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [mouseStart, setMouseStart] = useState(0)

    const swiper = useSwiper()
    const { setActiveFooterItem, setActiveSliderItem, rollNext, rollPrev } =
        useTheme()

    useEffect(() => {}, [])

    useEffect(() => {
        if (isActive) {
            setActiveFooterItem(3)
            setActiveSliderItem(null)
            console.log('use in portfolio')
            if (activeItem === 0) {
                blockSlider([true, false])
            } else if (activeItem === items.length - 1) {
                blockSlider([false, true])
            } else {
                blockSlider([false, false])
            }
        }
    }, [activeItem, isActive])

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
        setMouseStart(e.pageX)
    }

    function mouseHandlerEnd(e) {
        if (mouseStart - e.pageX > 100 && mouseStart !== 0) {
            setTouchStart(0)
            nextItem()
        } else if (mouseStart - e.pageX < -100 && mouseStart !== 0) {
            setTouchStart(0)
            prevItem()
        }
    }

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
            className="mainFifth"
            onTouchStart={(e) => touchHandlerStart(e)}
            onTouchMove={(e) => touchHandlerMove(e)}
            onTouchEnd={() => handleTouchEnd()}
            onMouseDown={(e) => mouseHandlerStart(e)}
            onMouseUp={(e) => mouseHandlerEnd(e)}
            onMouseMove={(e) => setDecorArrayAnimation(e)}
        >
            <div className="mmc hide-xl">
                <MobileMagicCarousel
                    items={items}
                    activeItem={activeItem}
                    setActiveItem={setCarouselItem}
                />
                <span className="decor-1" />
                <span className="decor-2" />
                <span className="decor-3" />
                <span className="decor-4" />
            </div>

            <div className="dmc show-xl">
                <DesktopMagicCarousel
                    items={items}
                    activeItem={activeItem}
                    setActiveItem={setCarouselItem}
                    next={nextItem}
                    prev={prevItem}
                />
                <span className="decor-1" />
                <span className="decor-2" />
                <span className="decor-3" />
                <span className="decor-4" />
            </div>
        </section>
    )
}

export default Portfolio
