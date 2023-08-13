import React, { useState } from "react";
import './Contact.css'
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const FORM_ENDPOINT = "https://public.herotofu.com/v1/97a30c90-3931-11ee-a55b-3734174ed356"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

    return (
        <div id='for-m'>
            <div  className="container">
                <div className="bg-light">
                    <div className="row">
                    <div className="col-lg-8 col-md-12 p-5 bg-white rounded-3">
                        <div className="d-flex mb-3 flex-column">
                        <h1 className="h5 text-capitalize my-4">What Product Do You need ?</h1>
                        <div className="d-flex flex-wrap">
                            <div className="
                                    d-flex
                                    flex-wrap
                                    justify-content-center
                                    align-items-center
                                    me-4
                                ">
                            <input type="checkbox" name="webdev" className="form-check-input m-0 me-3" id="webdev" />
                            <label for="webdev">Phones & Tablets</label>
                            </div>
                            <div className="
                                    d-flex
                                    flex-wrap
                                    justify-content-center
                                    align-items-center
                                    me-4
                                ">
                            <input type="checkbox" name="webdes" className="form-check-input m-0 me-3" id="webdes" />
                            <label for="webdes">Clothes</label>
                            </div>
                            <div className="
                                    d-flex
                                    flex-wrap
                                    justify-content-center
                                    align-items-center
                                    me-4
                                ">
                            <input type="checkbox" name="logodes" className="form-check-input m-0 me-3" id="logodes" />
                            <label for="logodes">Bags</label>
                            </div>
                            <div className="
                                    d-flex
                                    flex-wrap
                                    justify-content-center
                                    align-items-center
                                    me-4
                                ">
                            <input type="checkbox" name="others" className="form-check-input m-0 me-3" id="others" />
                            <label for="others"> Shoes </label>
                            </div>
                        </div>
                        </div>
                        <form className="row mb-3" 
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST">
                        <div className="col-md-6 p-3">
                            <input required placeholder="first name" type="text" name="First Name" id="" />
                        </div>
                        <div className="col-md-6 p-3">
                            <input required placeholder="last name" type="text" name="Last Name" id="" />
                        </div>
                        <div className="col-md-6 p-3">
                            <input required placeholder="E-mail" type="email" name="email" id="" />
                        </div>
                        <div className="col-md-6 p-3">
                            <input required placeholder="phone" type="tel" name="phone" id="" />
                        </div>
                        <div className="col-md">
                            <textarea required name="message" placeholder="write your message" id="" cols="30" rows="1"></textarea>
                        </div>
                        <div className="text-end mt-4">
                            <input className="btn px-4 py-3 btn-outline-dark" type="submit" value="Send Message" />
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-12 text-white aside px-4 py-5">
                        <div className="mb-5">
                        <h1 className="h3">Contact Information</h1>
                        <p className="opacity-50">
                            <small>
                            Fill out the from and we will get back to you whitin 24 hours
                            </small>
                        </p>
                        </div>
                        <div className="d-flex flex-column px-0">
                        <ul className="m-0 p-0">
                            <li className="d-flex justify-content-start align-items-center mb-4">
                            <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                                <CallIcon name="call" />
                            </span>
                            <span>+134 1234 1234</span>
                            </li>
                            <li className="d-flex align-items-center r mb-4">
                            <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                                <AttachEmailIcon name="mail" />
                            </span>
                            <span>Help@contact.com</span>
                            </li>
                            <li className="d-flex justify-content-start align-items-center mb-4">
                            <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                                <LocationOnIcon name="pin" />
                            </span>
                            <span>52 Buddy Ln Conway, <br />
                                Arkansas(AR), 72032
                            </span>
                            </li>
                        </ul>
                        <div className="text-muted text-center">
                            <code>
                            Inspiration from :
                            <a href="https://dribbble.com/shots/14126196-Contact-Form-01/attachments/5749555?mode=media">
                                Erşad Başbağ
                            </a></code>
                            <br />
                            <code>Created By : walid cherhane </code> <br />
                            <code><a className="fs-3" href="https://codepen.io/walidcherhane" target="_blank">
                                <ion-icon name="logo-codepen"></ion-icon>
                            </a></code>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;