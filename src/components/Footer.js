import React from 'react'
import Logo from '../images/photos/dark-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted equal height stackable grid">
            <div className="three wide column">
              <Link to="/">
                <img className="brand" src={Logo} alt="e-kraal logo" />
              </Link>
            </div>
            <div className="three wide column">
              <div className="ui inverted link list">
                <Link className="item" to="/">
                  <span>Home</span>
                </Link>
                <Link className="item" to="/program">
                  <span>Programs</span>
                </Link>
                <Link className="item" to="/events">
                  <span>Events</span>
                </Link>
                <Link className="item" to="/news">
                  <span>News</span>
                </Link>
              </div>
            </div>
            <div className="three wide column">
              <div className="ui inverted link list">
                <Link className="item" to="/partners">
                  <span>Partners</span>
                </Link>
                <Link className="item" to="/about">
                  <span>About</span>
                </Link>
                <Link className="item" to="/contact">
                  <span>Contact</span>
                </Link>
              </div>
            </div>
            <div className="three wide column">
              <div className="ui inverted link list">
                <Link className="item" to="/privacy">
                  <span>Privacy Policy</span>
                </Link>
              </div>
            </div>
            <div className="three wide column social-container">
              <div className="span">
                <Link className="social-item" to="https://www.facebook.com/ekraalhub/" target="_blank" rel="noopener noreferrer">
                  <i className="facebook icon" />
                </Link>
              </div>
              <div className="span">
                <Link className="social-item" to="https://twitter.com/ekraal_" target="_blank" rel="noopener noreferrer">
                  <i className="twitter icon" />
                </Link>
              </div>
              <div className="span">
                <Link className="social-item" to="https://www.linkedin.com/company/e-kraal-innovation-hub" target="_blank" rel="noopener noreferrer">
                  <i className="linkedin icon" />
                </Link>
              </div>
              <div className="span">
                <Link className="social-item" to="https://medium.com/@innovate.ekraal" target="_blank" rel="noopener noreferrer">
                  <i className="medium icon" />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="ui grid">
            <div className="row">
              <div className="column">
                <copyright-info>Copyright ©2020 e.Kraal</copyright-info>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
