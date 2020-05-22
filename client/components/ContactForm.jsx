import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

export default function ContactForm() {
    const URI = 'http://localhost:3000/';
    // const URI = 'https://brian-price-portfolio.herokuapp.com/'

    var code;

    function createCaptcha() {
        document.getElementById('captcha').innerHTML = "";
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
        var captcha = [];
        while (captcha.length < 6) {
          var index = Math.floor(Math.random() * chars.length + 1);
          if (captcha.indexOf(chars[index]) == -1) {
              captcha.push(chars[index]);
          }
        }
        var canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 150;
        canv.height = 50;
        var ctx = canv.getContext("2d");
        ctx.font = "30px Georgia";
        ctx.strokeText(captcha.join(""), 0, 30);
        code = captcha.join("");
        document.getElementById("captcha").appendChild(canv);
    }

    useEffect(() => createCaptcha())

    const initialFormInfo = { name: '', email: '', subject: '', message: '', captcha: '' }

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
        let captchaText = formInfo.captcha;
        if (captchaText !== code) {
            confirm('incorrect captcha');
            createCaptcha();
            return;
        }
        axios.post(URI, formInfo)
            .then(res => confirm(res.data))
            .catch(err => confirm(err.data))
        document.getElementById('contactme').reset()
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

                <div className='ContactFormrow'>
                    <div className='col-25'>
                        <label>Captcha</label>
                    </div>
                    <div className='col-75'>
                        <div id='captcha'></div>
                        <input type='text' name='captcha' placeholder='Enter the captcha text' required onChange={addNewInfo}></input>
                    </div>
                </div>

                <div className="ContactFormrow">
                    <input type="submit" value="Send Message"></input>
                </div>

            </form>
        </div>

    )

}