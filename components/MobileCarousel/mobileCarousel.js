import clsx from 'clsx'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { throttle } from '../../helpers'

const MobileCarousel = ({
    items,
    controllersClass = '',
    activeItem,
    setActiveItem,
}) => {
    useEffect(() => {
        let elWidth = window.innerWidth - 62
        let contWidth = elWidth * items.length + 30 + 16 * (items.length - 1)
        let onRes = -activeItem * (window.innerWidth - 47)

        if (window.innerWidth >= 542) {
            elWidth = 480
            contWidth = elWidth * items.length + 32 * (items.length - 1)
            onRes = -activeItem * (elWidth + 32)
        }

        onResize()
        const el = document.querySelector(
            '.isActive .mobileCarousel-wrapper-inner'
        )

        if (el) {
            el.style.left = `${onRes}px`
        }
    }, [activeItem])

    function onResize() {
        let elWidth = window.innerWidth - 62
        let contWidth = elWidth * items.length + 30 + 16 * (items.length - 1)
        let onRes = -activeItem * (window.innerWidth - 47)
        let mobileWrapperMarginLeft = 0

        if (window.innerWidth >= 542) {
            elWidth = 480
            contWidth = elWidth * items.length + 32 * (items.length - 1)
            onRes = -activeItem * (elWidth + 32)
            mobileWrapperMarginLeft = (window.innerWidth - elWidth) / 2
        }

        if (document.querySelector('.mobileCarousel-wrapper')) {
            document.querySelector(
                '.mobileCarousel-wrapper'
            ).style.marginLeft = `${mobileWrapperMarginLeft}px`
        }

        let arr = document.querySelectorAll('.mobileCarousel-item')

        if (arr.length > 0) {
            arr.forEach((el) => {
                el.style.width = `${elWidth}px`
            })
        }

        if (document.querySelector('.mobileCarousel-wrapper-inner')) {
            document.querySelector(
                '.mobileCarousel-wrapper-inner'
            ).style.width = `${contWidth}px`
            document.querySelector(
                '.mobileCarousel-wrapper-inner'
            ).style.left = `${onRes}px`
        }
    }

    useLayoutEffect(() => {
        const handler = throttle(onResize, 100)
        window.addEventListener('resize', handler)
        return () => {
            window.removeEventListener('resize', handler)
        }
    })

    const itemsControllers = items.map((el, i) => {
        return (
            <div
                key={i}
                className={clsx(
                    `mobileCarousel-controllers-item`,
                    i === activeItem ? 'active' : ''
                )}
                onClick={() => setActiveItem(i)}
            />
        )
    })

    const itemsCards = items.map((el, i) => {
        return (
            <div
                data-item={i}
                key={i}
                className={clsx(
                    'mobileCarousel-item',
                    el.color,
                    i === activeItem ? 'active' : ''
                )}
            >
                <h3 className="mobileCarousel-item__title">{el.title}</h3>

                {el.icon ? (
                    <div
                        className={`mobileCarousel-item__icon ${el.iconClass}`}
                    >
                        <img
                            src={`/icons/carouselMobile/${el.icon}`}
                            alt="icon"
                        />
                    </div>
                ) : (
                    <></>
                )}

                {el.semiTitle ? (
                    <h4 className="mobileCarousel-item__semiTitle">
                        {el.semiTitle}
                    </h4>
                ) : (
                    <></>
                )}
                <div className="mobileCarousel-item__content">{el.text}</div>
            </div>
        )
    })

    return (
        <>
            <div className={`mobileCarousel-wrapper`}>
                <div className="mobileCarousel-wrapper-inner">{itemsCards}</div>
            </div>

            <div className={`mobileCarousel-controllers-wrapper `}>
                <div
                    className={`mobileCarousel-controllers-inner ${controllersClass}`}
                >
                    {itemsControllers}
                    <div className="mobileCarousel-controllers-line" />
                </div>
            </div>
        </>
    )
}

export default MobileCarousel
