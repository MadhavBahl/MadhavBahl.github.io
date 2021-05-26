import React from 'react';
import { Link } from 'react-router-dom';
import './FooterLink.css';

const FooterLink = ({ phrase, link, toAddress }) => {
    return (
        <div className='footer-link'>
            {phrase}
            <Link className='footer-link-element' to={toAddress}>
                {link}
            </Link>
        </div>
    );
};

export default FooterLink;
