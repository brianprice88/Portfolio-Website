import React, { useReducer } from 'react'
import axios from 'axios'

export default function ContactForm() {
    const URI = 'http://localhost:3000/contactme'

    const initialFormInfo = { name: '', email: '', subject: '', message: '' }

    const addNewInfo = function (e) {
        dispatch({ type: e.target.name, payload: e.target.value })
    }

    const updateFormInfoState = function (state, action) {
        let updatedState = Object.assign(state);
        updatedState[action.type] = action.payload;
        return updatedState
    }

    const [formInfo, dispatch] = useReducer(updateFormInfoState, initialFormInfo)


    function handleSubmit(e) {
        e.preventDefault();
        document.getElementById('contactme').reset()
        axios.post(URI, formInfo)
            .then(res => confirm(res.data))
            .catch(err => confirm(err.data))
    }
    return (
        <div id='ContactForm'>
        
        <div className='scroll-right'>
        <p><i className="fa fa-envelope-o"></i></p>
        </div>

        <form id='contactme' onSubmit={handleSubmit}>

            <div className='ContactFormrow'>
                <div className='col-25'>
                    <label>Your Name</label>
                </div>
                <div className='col-75'>
                    <input type='text' name='name' placeholder='First and Last Name' required onChange={addNewInfo}></input>
                </div>
            </div>

            <div className='ContactFormrow'>
                <div className='col-25'>
                    <label>Your Email</label>
                </div>
                <div className='col-75'>
                    <input type='email' name='email' placeholder='Email Address' required onChange={addNewInfo}></input>
                </div>
            </div>

            <div className='ContactFormrow'>
                <div className='col-25'>
                    <label>Subject</label>
                </div>
                <div className='col-75'>
                    <input type='text' name='subject' placeholder='Subject' required onChange={addNewInfo}></input>
                </div>
            </div>

            <div className="ContactFormrow">
                <div className="col-25">
                    <label>Message</label>
                </div>
                <div className="col-75">
                    <textarea name="message" placeholder="Enter your message" required onChange={addNewInfo}></textarea>
                </div>
            </div>

            <div className="ContactFormrow">
                <input type="submit" value="Send Message"></input>
            </div>

        </form>
        </div>

    )

}