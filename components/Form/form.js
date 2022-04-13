import React, { useState, useEffect } from 'react'
import FormGroup from './Group/formGroup'
import Checkbox from './Checkbox'
import MainButton from '@components/MainButton'

const defaultForm = () => ({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    message: null,
})

const Form = ({ stateless = true, sendForm }) => {
    const [form, setForm] = useState(defaultForm())
    const [showForm, setShowForm] = useState(true)
    const [selectBox, updateBox] = useState(false)

    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        message: false,
    })

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [interacted, setInteracted] = useState(false)

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY

    useEffect(() => {
        const firstLoad = async () => {
            if (window.hasOwnProperty('captchaLoad')) return
            window.captchaLoad = true
            setInteracted(true)
            document.removeEventListener('click', firstLoad)
            document.removeEventListener('wheel', firstLoad)
            document.removeEventListener('mousemove', firstLoad)
            document.removeEventListener('touchstart', firstLoad)
            window.removeEventListener('scroll', firstLoad)
            // (await import("recaptcha-v3"))
            //   .load(siteKey, {
            //     useRecaptchaNet: true,
            //     autoHideBadge: true,
            //     explicitRenderParameters: { size: "invisible" },
            //   })
            //   .then((e) => {
            //     window.recaptcha = e;
            //   });
            // await import("../Form/Phone/utils");
        }

        document.addEventListener('click', firstLoad)
        document.addEventListener('wheel', firstLoad)
        document.addEventListener('mousemove', firstLoad)
        document.addEventListener('touchstart', firstLoad)
        setTimeout(function () {
            window.addEventListener('scroll', firstLoad)
        }, 1000)
        if (window.captchaLoad) {
            setInteracted(true)
        }
    }, [])

    useEffect(() => {
        setTimeout(
            // () => setErrors(validateForm(form, CONTACT_FORM_VALIDATION)),
            100
        )
    }, [form])

    const changeEvent = (key, value) => {
        const newForm = { ...form, [key]: value }
        setForm(newForm)
        setTimeout(() => setTouched({ ...touched, [key]: true }), 150)
        if (!stateless) {
            return onChange(newForm)
        }
    }

    const setAllTouched = (state) => {
        setTouched({
            ...Object.keys(touched).reduce(
                (reduced, key) => ({ ...reduced, [key]: state }),
                {}
            ),
        })
    }
    /*
  const submitEvent = async (e) => {
    e.preventDefault();
    setAllTouched(true);
    if (Object.keys(errors).length > 0) return;
    setLoading(true);
    const data = new FormData(e.target);
    const dialCode = data.get("dialCode");
    const phone = data.get("phone");
    data.set("phone", `+${dialCode}${phone}`);
    data.append("meta", JSON.stringify(getMeta()));
    sendContact(data)
      .then(() => {
        setLoading(false);
        setShowForm(false);
        setForm(defaultForm());
        setAllTouched(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
*/
    const backToForm = () => {
        setShowForm(true)
    }

    const validateStatus = (key) =>
        errors.hasOwnProperty(key) && touched[key] === true
    const getError = (key) => (errors.hasOwnProperty(key) ? errors[key] : null)

    const mySubmit = (e) => {
        e.preventDefault()
        sendForm(true)
    }

    return (
        <>
            {showForm && (
                <form className="form" onSubmit={mySubmit}>
                    <div className="form-line">
                        <FormGroup
                            invalid={validateStatus('firstName')}
                            required={true}
                            name="firstName"
                            label="Your name"
                            placeholder="Your Name*"
                            onChange={changeEvent}
                            error={getError('firstName')}
                        />
                        <FormGroup
                            invalid={validateStatus('email')}
                            required={true}
                            name="email"
                            label="E-mail"
                            placeholder="Your E-mail*"
                            onChange={changeEvent}
                            type="email"
                            error={getError('email')}
                        />
                    </div>

                    <div className="form-line-expend">
                        <FormGroup
                            invalid={validateStatus('phone')}
                            required={true}
                            name="phone"
                            label="Phone"
                            interacted={interacted}
                            placeholder="Your Phone"
                            onChange={changeEvent}
                            error={getError('phone')}
                            type="phone"
                        />
                        <FormGroup
                            required={false}
                            name="company"
                            label="Company Name"
                            interacted={interacted}
                            placeholder="Company Name"
                            onChange={changeEvent}
                            error={getError('company')}
                        />
                    </div>

                    <div className="form-line">
                        <FormGroup
                            required={false}
                            name="story"
                            label=""
                            interacted={interacted}
                            placeholder="Tell us your story"
                            onChange={changeEvent}
                            error={getError('company')}
                        />
                    </div>

                    <div className="form-line-expend">
                        <Checkbox onChange={updateBox} value={selectBox} />

                        <MainButton
                            size={'small'}
                            color={'yellow'}
                            text={'Send'}
                            type="submit"
                        />
                    </div>
                </form>
            )}
        </>
    )
}

export default Form
