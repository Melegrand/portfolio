import { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import './index.scss';
import validator from 'validator';
const Portfolio = ({getLocation, location, handleChangeLocation}) => {
    const[errorEmpty, setErrorEmpty] = useState(false)
    const[errorEmail, setErrorEmail] = useState(false)
    const[errorMessage, setErrorMessage] = useState(false)
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')
    const[change, setChange] = useState(false)
    const[submit, setSubmit] = useState(false)

    const emailRef = useRef(null)
    const messageRef = useRef(null)
    const formRef = useRef(null)
    document.title = 'Contact | Mélody Legrand'

    function resetErrors() {
        setErrorEmpty(false)
        setErrorEmail(false)
        setErrorMessage(false)
        setSubmit(false)
    }
    function handleSubmit() {
        resetErrors()
        if(!validator.isEmail(email)) {
            setErrorEmail(true)
        }

        if(typeof(message) ==! 'string' || message.length > 1000) {
            setErrorMessage(true)
        }

        if (validator.isEmpty(message)) {
            setErrorEmpty(true)
        }

        setChange(change ? false : true)
        setSubmit(true)
    }

    useEffect(() => {
        if(submit) {
            if (errorEmpty) {
                messageRef.current.focus()
            } else if (errorEmail) {
                emailRef.current.focus()
            } else if (errorMessage) {
                messageRef.current.focus()
            } else {
                formRef.current.submit()
            }
        }
    }, [change])

    return (
        <>
        <Header getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>
        <section className="contact">
            <form action="https://formspree.io/f/xjvqdwpy" className='contact__form' ref={formRef} method='POST'>
                <h1 className='contact__form__title'>Contact</h1>
                <div className='contact__form__email'>
                    <label htmlFor='email'>Votre email: (format exemple@exemple.com)</label>
                    <input 
                        id='email'
                        type="email" 
                        name="email" 
                        ref={emailRef} 
                        onChange={(e) => {setEmail(e.target.value), resetErrors()}}
                        aria-required="true"
                        aria-invalid={errorEmail ? true : null}
                        aria-describedby={errorEmail ? 'errorEmail' : null}
                    />
                </div>
                {errorEmail && <p id="errorEmail" className='contact__form__error'>Veuillez renseigner une adresse email valide</p>}
                <div className='contact__form__message'>
                    <label>Votre message: (1000 caractères maximum)</label>
                    <textarea 
                    name="message" 
                    ref={messageRef} 
                    onChange={(e) => {setMessage(e.target.value), resetErrors()}}
                    aria-required="true"
                    aria-invalid={errorMessage || errorEmpty ? true : null}
                    aria-describedby={errorMessage ? 'errorMessage' : errorEmpty ? 'errorEmpty' : null}
                    />
                </div>
                {errorMessage && <p id="errorMessage" className='contact__form__error'>Veuillez renseigner un message de moins de 1000 caractères</p>}
                {errorEmpty && <p id="errorEmpty" className='contact__form__error'>Veuillez renseigner tous les champs</p>}

                <button className='contact__form__button' type="button" onClick={handleSubmit}>Envoyer</button>
            </form>
        </section>
        </>
    );
}

export default Portfolio;