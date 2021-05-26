import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import home_anime from './../../assets/home_anime.gif';
import Modal from '../Modal/Modal';

class Home extends React.Component {
    state = { showModal: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showModal: true });
        }, 2400);
    }

    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <div className='home-container'>
                {this.state.showModal && <Modal closeModal={this.closeModal} />}
                <div className='header-text'>
                    <h1>Welcome to my portfolio!</h1>
                    <p>This is Madhav, a full stack dev and a teacher</p>
                </div>
                <div className='head-btns'>
                    <Link className='btn btn-white' to='/about'>
                        <p className='btn-text'>Know more about me</p>
                    </Link>
                    <Link className='btn btn-transparent' to='/contact'>
                        <p className='btn-text'>Connect with me</p>
                    </Link>
                </div>
                <div className='splash-image'>
                    <img
                        className='home_anime'
                        src={home_anime}
                        alt='animation'
                    />
                </div>
            </div>
        );
    }
}

export default Home;
