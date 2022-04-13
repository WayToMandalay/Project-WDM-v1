import { useEffect, useRef, useState } from 'react'
import { useOutsideAlerter } from '@helpers/index'
import PhoneNumberCountry from './PhoneNumberCountry'
import { allCountries } from './static'
import clsx from 'clsx'

import styles from './PhoneNumber.module.scss'
import { useTheme } from '../../../context'

const PhoneNumber = ({ id, invalid, onChange, interacted = false }) => {
    const wrapperRef = useRef(null)
    const { darkTheme } = useTheme()

    const setDefaults = () => {
        setSelectedCode('1')
        setSelectedCountry('us')
        setPlaceholderFromIso('us')
    }

    const setFromFetchedCountry = (fetchedCountry) => {
        setSelectedCode(fetchedCountry['code'])
        setSelectedCountry(fetchedCountry['iso'])
        setPlaceholderFromIso(fetchedCountry['iso'])
    }

    const setPlaceholderFromIso = (iso) => {
        if (
            window.hasOwnProperty('intlTelInputUtils') &&
            window.intlTelInputUtils.hasOwnProperty('getExampleNumber')
        ) {
            setSelectedPlaceholder(
                window.intlTelInputUtils.getExampleNumber(iso, true, 1)
            )
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (window.countryInfo) {
                setFromFetchedCountry(window.countryInfo)
            }
        }, 100)
    }, [interacted])

    useEffect(() => {
        if (
            !window.hasOwnProperty('countryInfo') &&
            !window.hasOwnProperty('countryInfoLoading')
        ) {
            window.countryInfoLoading = true
            fetch('/api/info')
                .then((res) => res.text())
                .then(
                    (country) => {
                        const fetchedCountry = allCountries.find(
                            (e) =>
                                e['iso'] ===
                                country
                                    .split('')
                                    .reverse()
                                    .join('')
                                    .toLowerCase()
                        )

                        if (fetchedCountry) {
                            window.countryInfo = fetchedCountry
                            setFromFetchedCountry(fetchedCountry)
                        } else {
                            setDefaults()
                        }
                    },
                    () => {
                        setDefaults()
                    }
                )
        } else {
            setFromFetchedCountry(window.countryInfo)
        }
    }, [])

    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedCode, setSelectedCode] = useState('1')
    const [selectedCountry, setSelectedCountry] = useState('us')
    const [selectedPlaceholder, setSelectedPlaceholder] = useState('')
    const [phone, setPhone] = useState('')

    const countryList = allCountries.map(({ iso, name, code }) => (
        <PhoneNumberCountry
            key={iso}
            iso={iso}
            name={name}
            code={code}
            selected={selectedCountry}
            darkTheme={darkTheme}
            onClick={() => selectCountry(iso, code)}
        />
    ))

    useOutsideAlerter(wrapperRef, (_) => {
        setShowDropdown(false)
    })

    const updateNumber = (code, number) => {
        const dialCode = wrapperRef.current.querySelector('[name="dialCode"]')
        if (dialCode) {
            dialCode.value = code
        }
        setTimeout(() => onChange({ code, number }), 100)
    }

    const selectCountry = (iso, code) => {
        setSelectedCountry(iso)
        setSelectedCode(code)
        setPlaceholderFromIso(iso)
        setShowDropdown(false)
        if (phone.length > 0) {
            updateNumber(code, phone)
        }
    }

    const handleChange = (e) => {
        let newValue = e.target.value.replace(/\D/g, '').trim()
        e.target.value = newValue
        setPhone(newValue)
        updateNumber(selectedCode, newValue)
    }

    return (
        <div
            ref={wrapperRef}
            className={clsx(styles.phoneNumber, {
                [styles.phoneNumberActive]: showDropdown,
                [styles.phoneNumberInvalid]: invalid,
            })}
        >
            {!interacted ? (
                <div className={styles.phoneNumberLoading}>
                    <span />
                </div>
            ) : (
                <>
                    <div
                        onClick={() => setShowDropdown(!showDropdown)}
                        className={clsx(
                            styles.phoneNumberToggle,
                            darkTheme ? '' : styles.lightPhoneNumberToggle,
                            {
                                [styles.phoneNumberToggleActive]: showDropdown,
                            }
                        )}
                    >
                        <div
                            className={clsx(
                                styles.phoneNumberCountryFlag,
                                styles[selectedCountry]
                            )}
                        />
                        <span>+{selectedCode}</span>
                    </div>
                    <input type="hidden" name="dialCode" />
                    <input
                        id={id}
                        type="text"
                        name={id}
                        className={clsx(styles.phoneNumberInput)}
                        onFocus={() => setShowDropdown(false)}
                        onChange={handleChange}
                        onPaste={handleChange}
                        maxLength={18}
                        placeholder={selectedPlaceholder}
                    />
                    <div
                        className={clsx(
                            styles.phoneNumberDropdown,
                            {
                                [styles.phoneNumberDropdownActive]:
                                    showDropdown,
                            },
                            !darkTheme ? styles.lightPhoneNumberDropdown : ''
                        )}
                    >
                        {countryList}
                    </div>
                </>
            )}
        </div>
    )
}

export default PhoneNumber
