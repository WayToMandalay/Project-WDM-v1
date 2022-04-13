import React, {useEffect} from "react";
import MainButton from "@components/MainButton";

const FormSent = ({sendForm, value}) => {

    useEffect(() => {
        const show = setTimeout(showGuy, 1000)
        return () => {
            clearTimeout(show)
        }
    }, [])

    const showGuy = () => {
        const guy = document.querySelector('.theGuy');
        guy.classList.add('showGuy')
        setTimeout(() => {
            guy.classList.remove('showGuy')
        }, 500)

    }

    return (
        <>
            <div className="formSent-container">
                <div className="formSent-title"></div>

                <div className="formSent-content">We’re on it!
                    One of our representatives
                    will contact you shortly.
                </div>

                <MainButton size={'small'} color={'black'} text={'Back to form'} onClick={()=>sendForm(false)} type='button'/>
            </div>
            <div className="theGuy"></div>
        </>

    )
}

export default FormSent