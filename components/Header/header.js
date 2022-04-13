import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/index'
import clsx from 'clsx'
import Link from 'next/link'
import MainButton from '@components/MainButton'

const Header = () => {
    const { darkTheme, setDarkTheme } = useTheme()

    const toggleBtn = () => {
        if (darkTheme) {
            localStorage.setItem('colorTheme', 'false')
            document.body.classList.add('light')
        } else {
            localStorage.setItem('colorTheme', 'true')
            document.body.classList.remove('light')
        }

        setDarkTheme(!darkTheme)
    }

    return (
        <header className="header">
            <Link href={'/'}>
                <a className="header__logo"></a>
            </Link>
            <div className="header__partner hide-xl">
                {/*<img src="/logo/google-partner.svg" alt="google partner"/>*/}
            </div>

            <div className="header__day-night__container">
                <div className="header__day-night__toggler">
                    <button
                        onClick={toggleBtn}
                        className={clsx(
                            'header__day-night',
                            darkTheme && 'header__day-day'
                        )}
                    />
                </div>
            </div>

            <div className="header-btn-s-container">
                <div className="header-btn-s-wrapper">
                    <button className="header-btn-s">Say Hello</button>
                </div>
            </div>

            <div className="header-btn-m-container">
                <MainButton size={'small'} color={'black'} text={'Say hello'} />
            </div>
        </header>
    )
}

export default Header
