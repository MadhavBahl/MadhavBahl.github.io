import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='The Lean Programmer | Public speaker | YouTuber | Blogger |
                Uplifting the student community in the field of tech and
                personal growth'
            />
            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Teacher</h3>
                    <p className='about-details'>
                        Teaching is my passion, till now, I've taught thousands
                        of students about Programming and Web Development. Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='http://theleanprogrammer.com/aam'
                        >
                            my free react course!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Blogger</h3>
                    <p className='about-details'>
                        I've been writing blogs from around 3 years now, and
                        became top-blogger on medium twice. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://madhavbahl.medium.com'
                        >
                            my medium blogs today!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Public Speaker</h3>
                    <p className='about-details'>
                        Being a passionate public speaker, I've given talks at
                        more than 75 events till now! Want me to speak in your
                        event?{' '}
                        <a
                            className='about-link-element'
                            href='mailto:info@theleanprogrammer.com'
                        >
                            Email me the details!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img className='about-anime' src={aboutAnime} alt='about' />
                </div>
            </div>
            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAddress='/projects'
            />
            <div className='vector-frame'>
                <img className='about-vector' src={aboutVector} alt='' />
            </div>
        </div>
    );
};

export default About;
