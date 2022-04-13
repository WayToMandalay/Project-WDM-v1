import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { useTheme } from '../../context'
import { setDecorAnimation } from '@helpers/index'

const TestElement = () => {
    const swiper = useSwiper()
    const {
        setActiveFooterItem,
        setActiveSliderItem,
        activeSliderItem,
        activeFooterItem,
    } = useTheme()

    // useEffect(() => {
    //     if (window.visualViewport.width >= 1440) {
    //         window.addEventListener('mousemove', setDecorAnimation)
    //     }
    // }, [])

    useEffect(() => {
        // if (activeSliderItem != activeFooterItem) {
        if (activeSliderItem !== null) {
            swiper.slideTo(activeSliderItem)
        }

        setActiveSliderItem(activeSliderItem)
        // }
    }, [activeSliderItem])

    return <></>
}

export default TestElement
