import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css';

// A component to teach programmatic navigation
// Note - It could have done with using a simple Link element,
// But, I've used the history object to represent it's usage
class GoHome extends Component {
    navigateToHome = () => {
        const { history } = this.props;
        history.push('/');
    };

    render() {
        const { location } = this.props;
        const whiteBtn = location.pathname === '/';

        return (
            <button
                onClick={this.navigateToHome}
                className={`go-home-btn ${
                    whiteBtn ? 'white-bkg' : 'gradient-bkg'
                }`}
            >
                <img
                    className='home-icon'
                    src={whiteBtn ? homeIconBlack : homeIconWhite}
                    alt='home-icon'
                />
            </button>
        );
    }
}

export default withRouter(GoHome);
