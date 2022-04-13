import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

const DesktopAccordion = ({ items, activeItem, setActiveItem }) => {
    const itemsControllers = items.map((el, i) => {
        return (
            <div
                key={i}
                className={clsx(
                    `desktopAccordion__controllers-item`,
                    activeItem === i && 'active'
                )}
                onClick={() => setActiveItem(i)}
            />
        )
    })

    const carouselItems = items.map((el, i) => {
        return (
            <div
                key={i}
                className={clsx(
                    'desktopAccordion__item',
                    el.color,
                    i === activeItem ? 'active' : ''
                )}
                data-item={i}
            >
                <div className="desktopAccordion__item__count">
                    {el.title.split('.')[0]}
                </div>
                <div className="desktopAccordion__item__title">
                    <h2>{el.title.split('.')[1].trim()}</h2>
                </div>
                <div className="desktopAccordion__item__content">
                    <div className="desktopAccordion__item-icon">
                        <img
                            src={`/icons/carouselMobile/${el.icon}`}
                            alt="icon"
                        />
                    </div>
                    <div className="desktopAccordion__item__right">
                        <h3 className="desktopAccordion__item-semiTitle">
                            <div className="desktopAccordion__item-semiTitle-arrow" />
                            {el.title.split('.')[1].trim()}
                        </h3>
                        <p className="desktopAccordion__item-text">{el.text}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="desktopAccordion">
            <div className="desktopAccordion__items-wrapper">
                {carouselItems}
            </div>
            <div className="desktopAccordion__controllers-wrapper">
                <div className="desktopAccordion__controllers-inner">
                    {itemsControllers}
                    <div className="desktopAccordion__controllers-line" />
                </div>
            </div>
        </div>
    )
}

export default DesktopAccordion
