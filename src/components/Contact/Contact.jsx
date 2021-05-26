import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            <div className='contact-form-container'>
                <form
                    action='https://formspree.io/f/myylwzwl'
                    method='POST'
                    className='contact-form'
                >
                    {/* EmailID Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'
                    />

                    {/* Email body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit Button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            <div className='social-icons-container'>
                <a className='social-icon' href='https://github.com/MadhavBahl'>
                    <img src={github} alt='github' />
                </a>
                <a
                    className='social-icon'
                    href='https://linkedin.com/in/madhavbahl/'
                >
                    <img src={linkedin} alt='linkedin' />
                </a>
                <a
                    className='social-icon'
                    href='https://instagram.com/theleanprogrammer/'
                >
                    <img src={instagram} alt='instagram' />
                </a>
                <a className='social-icon' href='https://madhavbahl.medium.com'>
                    <img src={medium} alt='medium' />
                </a>
                <a className='social-icon' href='https://madhavbahl.tech'>
                    <img src={web} alt='web' />
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                link='about me.'
                toAddress='/about'
            />
            <div className='vector-frame'>
                <img className='about-vector' src={contactVector} alt='' />
            </div>
        </div>
    );
};

export default Contact;
