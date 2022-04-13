import React, { useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '../../context'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const links = [
    {
        name: 'Home',
        href: '/',
        icon: 'home-icon',
        cls: 'active',
        slideId: 0,
    },
    {
        name: 'How it works',
        href: '/how-it-works',
        icon: 'how_it_works-icon',
        cls: '',
        slideId: 1,
    },
    {
        name: 'Results',
        href: '/results',
        icon: 'results-icon',
        cls: '',
        slideId: 2,
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
        icon: 'portfolio-icon',
        cls: '',
        slideId: 4,
    },
    {
        name: 'About',
        href: '/about',
        icon: 'about-icon',
        cls: '',
        slideId: 5,
    },
    {
        name: 'Contact',
        href: '/contactUs',
        icon: 'contact-icon',
        cls: '',
        slideId: 6,
    },
]

const Footer = () => {
    const { darkTheme, setDarkTheme, activeFooterItem, setActiveSliderItem } =
        useTheme()

    useEffect(() => {
        setTimeout(showFooter, 500)
        return clearTimeout(showFooter)
    }, [])

    function showFooter() {
        document.querySelector('footer').classList.add('show')
    }

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

    const items = links.map((el, i) => {
        // const isActive = el.href === router.pathname
        const isActive = activeFooterItem === i

        return (
            <div
                key={i}
                className={clsx('footer-inner-item', isActive ? 'active' : '')}
                onClick={() => setActiveSliderItem(el.slideId)}
            >
                <div className={`footer-inner-item-icon ${el.icon}`} />

                <div className="footer-inner-item-title">{el.name}</div>
            </div>
        )
    })

    return (
        <footer className="footer">
            <div className="footer-inner">{items}</div>

            <div className="footer-inner-bottom show-xl">
                <div className="footer-day-night-toggler" onClick={toggleBtn}>
                    <div
                        className={clsx(
                            `footer-inner-item-icon`,
                            `day-night-m`,
                            !darkTheme && `day-night-m-day`
                        )}
                    />
                </div>
                <div className="footer-inner-bottom__partner" />
                <div className="footer-inner-bottom__copyright">2021 © WDM</div>
            </div>
        </footer>
    )
}

export default Footer
