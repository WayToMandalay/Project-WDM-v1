import React, { useEffect, useState } from 'react'
import MainButton from '@components/MainButton'
import clsx from 'clsx'

const DesktopMagicCarousel = ({
    items,
    activeItem,
    setActiveItem,
    next,
    prev,
}) => {
    useEffect(() => {
        setTransformation()
    }, [activeItem])

    function setTransformation() {
        let arr = document.querySelectorAll('.dmc-inner-item')
        let angUp = 33
        let angDown = 26
        switch (activeItem) {
            case 0:
                arr[0].style.transform = `rotate(0deg)`
                arr[1].style.transform = `rotate(${angUp}deg)`
                arr[2].style.transform = `rotate(${angUp * 2}deg)`
                arr[3].style.transform = `rotate(${angUp * 2}deg)`
                arr[4].style.transform = `rotate(${angUp * 2}deg)`
                break

            case 1:
                arr[0].style.transform = `rotate(-${angDown}deg)`
                arr[1].style.transform = 'rotate(0deg)'
                arr[2].style.transform = `rotate(${angUp}deg)`
                arr[3].style.transform = `rotate(${angUp * 2}deg)`
                arr[4].style.transform = `rotate(${angUp * 2}deg)`
                break

            case 2:
                arr[0].style.transform = `rotate(-${angDown * 2}deg)`
                arr[1].style.transform = `rotate(-${angDown}deg)`
                arr[2].style.transform = 'rotate(0deg)'
                arr[3].style.transform = `rotate(${angUp}deg)`
                arr[4].style.transform = `rotate(${angUp * 2}deg)`
                break

            case 3:
                arr[0].style.transform = `rotate(-${angDown * 2}deg)`
                arr[1].style.transform = `rotate(-${angDown * 2}deg)`
                arr[2].style.transform = `rotate(-${angDown}deg)`
                arr[3].style.transform = 'rotate(0deg)'
                arr[4].style.transform = `rotate(${angUp}deg)`
                break

            case 4:
                arr[0].style.transform = `rotate(-${angDown * 2}deg)`
                arr[1].style.transform = `rotate(-${angDown * 2}deg)`
                arr[2].style.transform = `rotate(-${angDown * 2}deg)`
                arr[3].style.transform = `rotate(-${angDown}deg)`
                arr[4].style.transform = 'rotate(0deg)'
                break
        }
    }

    const array = items.map((el, i) => {
        return (
            <div
                key={i}
                className={clsx(
                    'dmc-inner-item',
                    activeItem === i ? 'active' : 'disabled',
                    activeItem < i ? 'next' : '',
                    activeItem > i ? 'prev' : ''
                )}
                // onClick={() => setActiveItem(i)}
            >
                <div className="dmc-inner-item-image" />
                <div className="dmc-inner-item-contentBlock">
                    <h2
                        className="dmc-inner-item-title"
                        dangerouslySetInnerHTML={{ __html: el.title }}
                    />
                    <div className="dmc-inner-item-content">{el.content}</div>
                    <MainButton
                        size="medium"
                        color="black"
                        text={'Full case study'}
                        link={el.url}
                    />
                </div>
            </div>
        )
    })

    return (
        <div className="dmc-inner-container">
            <div className="dmc-inner">
                {array}
                <div className="dmc-inner-controllers">
                    <div
                        className={clsx(
                            'dmc-inner-controllers-controllerNext',
                            activeItem !== 4 ? 'active' : ''
                        )}
                        onClick={() => next()}
                    />
                    <div
                        className={clsx(
                            'dmc-inner-controllers-controllerPrev',
                            activeItem !== 0 ? 'active' : ''
                        )}
                        onClick={() => prev()}
                    />
                </div>
            </div>
        </div>
    )
}

export default DesktopMagicCarousel
