import React, { useEffect, useLayoutEffect, useState } from 'react'
import KeepSwiping from '@components/KeepSwiping'
import clsx from 'clsx'
import KeepSwipingOwl from '@components/KeepSwipingOwl/keepSwipingOwl'
import { throttle } from '@helpers/index'

const MediumCarousel2 = ({ items, activeItem, setActiveItem }) => {
    useLayoutEffect(() => {
        const handler = throttle(onResize, 100)
        window.addEventListener('resize', handler)
        return () => {
            window.removeEventListener('resize', handler)
        }
    })

    function onResize() {
        let elWidth = window.innerWidth
        let padLeft = (elWidth - 304) / 2 - 16
        document.querySelector(
            '.mediumCarousel2-wrapper-inner'
        ).style.marginLeft = `${padLeft}px`
        document.querySelector('.mediumCarousel2-wrapper').style.width = `${
            1680 + padLeft
        }px`
    }

    const contentItems = items.map((el, i) => {
        return (
            <div
                data-item={i}
                key={i}
                className={clsx(
                    'mediumCarousel2-item',
                    activeItem > 0 ? `disabled-${activeItem}` : '',
                    activeItem > i ? `disabled` : '',
                    `${el.color}`,
                    activeItem === i && 'active'
                )}
            >
                <div className="mediumCarousel2-item-inner">
                    <h3 className="mediumCarousel2-item__title">{el.title}</h3>
                    {el.semiTitle ? (
                        <h4 className="mediumCarousel2-item__semiTitle">
                            {el.semiTitle}
                        </h4>
                    ) : (
                        <></>
                    )}
                    <p className="mediumCarousel2-item__content">{el.text}</p>
                    {i === 4 ? <KeepSwipingOwl /> : <></>}
                </div>
            </div>
        )
    })

    const itemsControllers = items.map((el, i) => {
        return (
            <div
                key={i}
                className={clsx(
                    `mediumCarousel2-controllers-item`,
                    activeItem === i && 'active'
                )}
                onClick={() => setActiveItem(i)}
            />
        )
    })

    return (
        <>
            <div className="mediumCarousel2-wrapper">
                <div className="mediumCarousel2-wrapper-inner">
                    {contentItems}
                    {activeItem === 0 && <KeepSwiping />}
                </div>
            </div>
            <div className="mediumCarousel2-controllers-wrapper">
                <div className={`mediumCarousel2-controllers-inner`}>
                    {itemsControllers}
                    <div className="mediumCarousel2-controllers-line"></div>
                </div>
            </div>
        </>
    )
}

export default MediumCarousel2
