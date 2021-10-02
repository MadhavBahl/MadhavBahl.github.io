import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

import poster from './../../assets/poster.png';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Huge Announcement!</h1>
                    <p onClick={props.closeModal} className='close'>
                        &times;
                    </p>
                </div>

                <div className='middle-section-container'>
                    <div className='middle-section'>
                        <h3>React Mega Tutorial is live!</h3>
                        <p>Do you wish to learn React?</p>
                        <p>
                            I've published a completely FREE react tutorial,
                            check it out today!
                        </p>
                        <p>
                            I bring to you this mega course where each month I
                            will help you learn about these libraries and
                            frameworks by building 1 cool project.
                        </p>
                    </div>
                    <div className='middle-section-image'>
                        <a
                            href='http://theleanprogrammer.com/aam'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={poster}
                                alt='poster'
                                className='aam-cover'
                            />
                        </a>
                    </div>
                </div>

                <div className='lower-section'>
                    <a onClick={props.closeModal} className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href='http://theleanprogrammer.com/aam'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        Start Tutorial
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;
