import StartSwiping from '../StartSwiping/startSwiping'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { useTheme } from '../../context'
import { setDecorAnimation } from '@helpers/animations'
import TextScrambler from 'react-scramble-text'

const MainFirst = ({ blockSlider, isActive }) => {
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [mouseStart, setMouseStart] = useState(0)

    const [wheelY, setWheelY] = useState(0)
    const [wheelX, setWheelX] = useState(0)
    const [wheelBlock, setWheelBlock] = useState(false)

    const swiper = useSwiper()
    const { darkTheme, setActiveFooterItem, setActiveSliderItem, rollNext } =
        useTheme()

    useEffect(() => {
        if (isActive) {
            // Leaving these two code options, if css animations work incorrectly'

            // if (window.innerWidth >= 1440) {
            //     slideSection.addEventListener(
            //         'mousemove',
            //         setDecorAnimation,
            //         false
            //     )
            // }
            // if (
            //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            //         navigator.userAgent
            //     ) === false
            // ) {
            //     console.log('not mobile')
            // }
            setActiveFooterItem(0)
            setActiveSliderItem(null)

            setTimeout(() => {
                document
                    .querySelector('.main__own-wrapper')
                    .classList.add('show')
            }, 600)
        }
        return document
            .querySelector('.main__own-wrapper')
            .classList.remove('show')
    }, [isActive])

    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                document
                    .querySelector('.main .main__title')
                    .classList.add('show')
            }, 600)
        }
        return document
            .querySelector('.main .main__title')
            .classList.remove('show')
    }, [isActive])

    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                document
                    .querySelector('.main__start-swiping')
                    .classList.add('show')
            }, 600)
        }
        return document
            .querySelector('.main__start-swiping')
            .classList.remove('show')
    }, [isActive])

    // useEffect(() => {
    //     if (wheelX === 0 && wheelY < 0) {
    //         swiper.slidePrev()
    //     } else if (wheelX === 0 && wheelY > 0) {
    //         swiper.slideNext()
    //     } else if (wheelX > 0) {
    //         swiper.slideNext()
    //     } else if (wheelX < 0) {
    //         swiper.slidePrev()
    //     }
    //     setWheelBlock(true)
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
            rollNext()
            swiper.slideNext()
        }

        if (touchStart - touchEnd < -50 && touchStart !== 0 && touchEnd !== 0) {
            setTouchStart(0)
            setTouchEnd(0)
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
            swiper.slidePrev()
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

    return (
        <section
            className={'container main'}
            onTouchStart={(e) => touchHandlerStart(e)}
            onTouchMove={(e) => touchHandlerMove(e)}
            onTouchEnd={() => handleTouchEnd()}
            onMouseDown={(e) => mouseHandlerStart(e)}
            onMouseUp={(e) => mouseHandlerEnd(e)}
            // onWheel={(e) => wheelHandler(e)}
            onMouseMove={(e) => setDecorAnimation(e)}
        >
            {/*<h1 className="main__title">*/}
            {/*    <span className="orange">What's</span> the{' '}*/}
            {/*    <span className="orange">difference</span> between{' '}*/}
            {/*    <span className="orange circle">us</span> and a{' '}*/}
            {/*    <span className="orange">Marketing Agency?</span>*/}
            {/*</h1>*/}

            <h1 className="main__title">
                <div className="main__title-line">
                    <div className="main__title-line-inner">
                        <span className="orange">What's</span> the{' '}
                        <span className="orange">difference </span>
                    </div>
                </div>
                <div className="main__title-line">
                    <div className="main__title-line-inner">
                        between <span className="orange circle">us</span> and a{' '}
                    </div>
                </div>
                <div className="main__title-line">
                    <div className="main__title-line-inner">
                        <span className="orange">Marketing Agency?</span>
                    </div>
                </div>
            </h1>

            <div className="main__start-swiping_wrapper">
                <div className="main__start-swiping">
                    <div className="main__start-swiping-text">
                        <TextScrambler
                            phrases={[
                                'We bring you sales!',
                                'We bring you hope!',
                                'We bring you sales!',
                            ]}
                            speed={50}
                            pauseTime={800}
                            repetitions={3}
                            symbolColor={darkTheme ? '#ffffff' : '#040C0F'}
                        />
                    </div>
                </div>
                <span className="main__swiper-pointer" />
                <div className="main__start-swiping-textBlock">
                    <StartSwiping />
                </div>
            </div>

            <div className="main__ownWindow-wrapper show-xl">
                <div className="main__ownWindow-wrapper-inner">
                    <div className="main__ownWindow-wrapper-inner-owl">
                        <div className="main__ownWindow-wrapper-inner-owl-inner">
                            <div className="eyeBrowLeft" />
                            <div className="eyeBrowRight" />
                            <div className="eyeLeft">
                                {/*<img src="/eye-left.png" alt="" />*/}
                                <div className="leftLid" />
                            </div>
                            <div className="eyeRight">
                                <div className="rightLid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <span className="decor-1" />
            <span className="decor-2" />
            <span className="decor-3" />
            <span className="decor-4" />
        </section>
    )
}

export default MainFirst
