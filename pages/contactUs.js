import React, { useEffect, useState } from 'react'
import Form from '@components/Form'
import FormSent from '@components/FormSent'
import BackToHomeOwlButton from '@components/BackToHomeOwlButton'
import { useSwiper, useSwiperSlide } from 'swiper/react'
import { useTheme } from '../context'
import { setContactAnimation } from '@helpers/animations'

const ContactUs = ({ blockSlider, isActive }) => {
    const [formSent, sendForm] = useState(false)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [mouseStart, setMouseStart] = useState(0)

    const swiper = useSwiper()

    const { setActiveFooterItem, setActiveSliderItem, rollPrev } = useTheme()

    useEffect(() => {
        if (isActive) {
            setActiveFooterItem(5)
            setActiveSliderItem(null)
            blockSlider([true, true])
            document.querySelector('.secondFooter__rollerBlock').style.display =
                'none'
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
            swiper.slideNext()
        } else if (mouseStart - e.pageX < -100 && mouseStart !== 0) {
            setMouseStart(0)
            rollPrev()
            swiper.slidePrev()
        }
    }

    return (
        <section
            className="contactUs"
            onTouchStart={(e) => touchHandlerStart(e)}
            onTouchMove={(e) => touchHandlerMove(e)}
            onTouchEnd={() => handleTouchEnd()}
            onMouseDown={(e) => mouseHandlerStart(e)}
            onMouseUp={(e) => mouseHandlerEnd(e)}
            onMouseMove={(e) => setContactAnimation(e)}
        >
            {!formSent && (
                <>
                    <div className="contactUs__form">
                        <h2 className="main__title contactUs__title">
                            Contact{' '}
                            <span className="orange contactUs-title-span">
                                us
                            </span>
                        </h2>
                        <Form sendForm={sendForm} />
                    </div>
                    <div className="contactUs__backToHomeOwlWrapper">
                        <BackToHomeOwlButton />
                    </div>
                </>
            )}

            {formSent && <FormSent sendForm={sendForm} />}
            <span className="decor-1" />
            <span className="decor-2" />
            <span className="decor-3" />
            <span className="decor-4" />
        </section>
    )
}

export default ContactUs
