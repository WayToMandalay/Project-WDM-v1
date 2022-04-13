import Head from 'next/head'
import MainFirst from '@components/MainFirst'
import HowItWorks from './how-it-works'
import MainFourth from '@components/MainFourth'
import About from './about'
import ContactUs from './contactUs'
import Link from 'next/link'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Portfolio from './portfolio'
import Results from './results'
import { useState } from 'react'
import { Keyboard, Mousewheel, History, Controller } from 'swiper'
import TestElement from '@components/TestElement'

export default function Home() {
    let [allowActions, setAllowActions] = useState([true, true])

    function turnOnSlider(bool) {
        setAllowActions(bool)
    }

    return (
        <>
            <Head>
                <title>WDM</title>
            </Head>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Keyboard, Mousewheel, History]}
                // followFinger={true}
                // onSlideChange={(swiper) => console.log(swiper)}
                // onSwiper={(swiper) => console.log(swiper)}
                // onReachEnd={() => console.log("the end")}
                // allowSlidePrev={allowActions[0]}
                // allowSlideNext={allowActions[1]}
                allowSlidePrev={true}
                allowSlideNext={true}
                allowTouchMove={false}
                speed={600}
                keyboard={{
                    enabled: true,
                }}
                // history={{
                //   replaceState: true,
                //   key: "",
                // }}
                mousewheel={{ enabled: false }}
                // grabCursor={true}
            >
                <SwiperSlide>
                    {({ isActive }) => (
                        <MainFirst
                            isActive={isActive}
                            blockSlider={turnOnSlider}
                        />
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => (
                        <HowItWorks
                            isActive={isActive}
                            blockSlider={turnOnSlider}
                        />
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => (
                        <Results
                            isActive={isActive}
                            blockSlider={turnOnSlider}
                        />
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => (
                        <MainFourth
                            isActive={isActive}
                            blockSlider={turnOnSlider}
                        />
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => (
                        <Portfolio
                            isActive={isActive}
                            blockSlider={turnOnSlider}
                        />
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => (
                        <About isActive={isActive} blockSlider={turnOnSlider} />
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {({ isActive }) => (
                        <ContactUs
                            isActive={isActive}
                            blockSlider={turnOnSlider}
                        />
                    )}
                </SwiperSlide>

                <TestElement />
            </Swiper>
        </>
    )
}
