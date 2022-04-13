import clsx from 'clsx'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { throttle } from '../../helpers'
import MainButton from '../MainButton/mainButton'

const MobileMagicCarousel = ({ items, activeItem, setActiveItem }) => {
    const carouselItems = items.map((el, i) => {
        return (
            <div
                key={i}
                className={clsx('mmc-item', activeItem === i && 'active')}
                // onClick={() => setActiveItem(i)}
            />
        )
    })

    const contentItems = items.map((el, i) => {
        return (
            <div
                key={i}
                className={clsx(
                    'mmc-content-item',
                    activeItem === i && 'active'
                )}
            >
                <h2
                    className="main__title"
                    dangerouslySetInnerHTML={{ __html: el.title }}
                />
                <div className="mmc-content-item__content">{el.content}</div>
                <MainButton
                    size="medium"
                    color="black"
                    text={'Full case study'}
                />
            </div>
        )
    })

    useEffect(() => {
        onResize()
        let windowWidth = getRealWidth()

        let stepLeft = windowWidth - 270

        if (windowWidth >= 768) {
        }

        const el = document.querySelector('.mmc-wrapper-inner')
        const contInner = document.querySelector('.mmc-content-wrapper-inner')

        if (el) {
            // el.style.left = `${-activeItem * (windowWidth - 60)}px`;
        }

        if (contInner) {
            // contInner.style.left = `${-activeItem * windowWidth}px`;
        }
    }, [activeItem])

    function onResize() {
        let windowWidth = getRealWidth()
        let elWidth = windowWidth - 80
        let stepLeft = windowWidth - 60
        let contentElWidth = windowWidth - 32
        let contWidth = elWidth * items.length + 40 + 32 * (items.length - 1)
        let containerContentElWidth = windowWidth * items.length
        let stepContentLeft = windowWidth
        let firstItemMarginLeft = 40
        let firstContentItemMarginLeft = 16

        if (windowWidth >= 542) {
            elWidth = 462
            firstItemMarginLeft = (windowWidth - elWidth) / 2
            stepLeft = elWidth + 20
        }

        if (windowWidth >= 768) {
            elWidth = 480
            firstItemMarginLeft = (windowWidth - elWidth) / 2
            contentElWidth = elWidth
            containerContentElWidth = contWidth
            stepLeft = elWidth + 32
            stepContentLeft = stepLeft
            contWidth =
                elWidth * items.length +
                stepContentLeft +
                32 * (items.length - 1)
            firstContentItemMarginLeft = firstItemMarginLeft
        }

        if (windowWidth >= 992) {
            contentElWidth = 625
            firstContentItemMarginLeft = (windowWidth - contentElWidth) / 2
            stepContentLeft = contentElWidth + 32
        }

        document.querySelectorAll('.mmc-item').forEach((el) => {
            el.style.width = `${elWidth}px`
        })

        document.querySelectorAll(
            '.mmc-item'
        )[0].style.marginLeft = `${firstItemMarginLeft}px`

        document.querySelector(
            '.mmc-wrapper-inner'
        ).style.width = `${contWidth}px`
        document.querySelector('.mmc-wrapper-inner').style.left = `${
            -activeItem * stepLeft
        }px`

        document.querySelectorAll('.mmc-content-item').forEach((el) => {
            el.style.width = `${contentElWidth}px`
        })

        document.querySelectorAll(
            '.mmc-content-item'
        )[0].style.marginLeft = `${firstContentItemMarginLeft}px`

        document.querySelector(
            '.mmc-content-wrapper-inner'
        ).style.width = `${containerContentElWidth}px`

        document.querySelector('.mmc-content-wrapper-inner').style.left = `${
            -activeItem * stepContentLeft
        }px`
    }

    useLayoutEffect(() => {
        const handler = throttle(onResize, 100)
        window.addEventListener('resize', handler)
        return () => {
            window.removeEventListener('resize', handler)
        }
    })

    function getRealWidth() {
        return window.visualViewport.width * window.visualViewport.scale
    }

    function stepLeft() {
        if (activeItem !== 0) {
            setActiveItem(activeItem - 1)
        }
    }

    function stepRight() {
        if (activeItem !== 4) {
            setActiveItem(activeItem + 1)
        }
    }

    return (
        <>
            <div className="mmc-wrapper">
                <div className="mmc-wrapper-inner">{carouselItems}</div>
            </div>

            <div className="mmc-content-wrapper">
                <div className="mmc-content-wrapper-inner">{contentItems}</div>
                <div
                    // className="mmc-content-wrapper__controller-left show-m"
                    className={clsx(
                        'mmc-content-wrapper__controller-left',
                        'show-m',
                        activeItem !== 0 ? 'active' : ''
                    )}
                    onClick={() => stepLeft()}
                />
                <div
                    className={clsx(
                        'mmc-content-wrapper__controller-right',
                        'show-m',
                        activeItem !== 4 ? 'active' : ''
                    )}
                    onClick={() => stepRight()}
                />
            </div>
        </>
    )
}

export default MobileMagicCarousel
