import clsx from 'clsx'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { throttle } from '../../helpers'

const MobileCarouselLong = ({
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
        const el = document.querySelector('.mobileCarouselLong-wrapper-inner')

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

        if (document.querySelector('.mobileCarouselLong-wrapper')) {
            document.querySelector(
                '.mobileCarouselLong-wrapper'
            ).style.marginLeft = `${mobileWrapperMarginLeft}px`
        }

        let arr = document.querySelectorAll('.mobileCarouselLong-item')

        if (arr.length > 0) {
            arr.forEach((el) => {
                el.style.width = `${elWidth}px`
            })
        }

        if (document.querySelector('.mobileCarouselLong-wrapper-inner')) {
            document.querySelector(
                '.mobileCarouselLong-wrapper-inner'
            ).style.width = `${contWidth}px`
            document.querySelector(
                '.mobileCarouselLong-wrapper-inner'
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
                    `mobileCarouselLong-controllers-item`,
                    activeItem === i && 'active'
                )}
                onClick={() => setActiveItem(i)}
            />
        )
    })

    const itemsCards = items.map((el, i) => {
        return (
            <div
                key={i}
                data-item={i}
                className={clsx(
                    'mobileCarouselLong-item',
                    el.color,
                    i === activeItem ? 'active' : ''
                )}
            >
                <h3 className="mobileCarouselLong-item__title">{el.title}</h3>

                {el.icon ? (
                    <div
                        className={`mobileCarouselLong-item__icon ${el.iconClass}`}
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
                    <h4 className="mobileCarouselLong-item__semiTitle">
                        {el.semiTitle}
                    </h4>
                ) : (
                    <></>
                )}
                <div className="mobileCarouselLong-item__content">
                    {el.text}
                </div>
                {i === items.length - 1 ? (
                    <span className="keepSwiping">Keep swiping...</span>
                ) : (
                    <></>
                )}
            </div>
        )
    })

    return (
        <>
            <div className={`mobileCarouselLong-wrapper`}>
                <div className="mobileCarouselLong-wrapper-inner">
                    {itemsCards}
                </div>
            </div>

            <div className={`mobileCarouselLong-controllers-wrapper `}>
                <div
                    className={`mobileCarouselLong-controllers-inner ${controllersClass}`}
                >
                    {itemsControllers}
                    <div className="mobileCarouselLong-controllers-line" />
                </div>
            </div>
        </>
    )
}

export default MobileCarouselLong
