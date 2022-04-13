import clsx from 'clsx'

import styles from './PhoneNumber.module.scss'

const PhoneNumberCountry = ({
    name,
    iso,
    code,
    selected,
    onClick,
    darkTheme,
}) => {
    return (
        <div
            // className={clsx(styles.phoneNumberCountry, {
            //     [styles.phoneNumberCountryActive]: selected === iso,
            // })}
            className={clsx(styles.phoneNumberCountry, {
                [darkTheme
                    ? styles.phoneNumberCountryActive
                    : styles.lightPhoneNumberCountryActive]: selected === iso,
            })}
            onClick={onClick}
        >
            <span
                className={clsx(styles.phoneNumberCountryFlag, styles[iso])}
            />
            <span>{name}</span>
            <span className={styles.phoneNumberCountryCode}>+{code}</span>
        </div>
    )
}

export default PhoneNumberCountry
