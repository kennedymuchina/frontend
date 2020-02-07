import React from 'react'
import Logo from '../images/photos/dark-logo.png'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
        <div className="ui grid">
          <div className="computer only row">
            <div className="ui fixed transparent menu borderless main_menu">

              <NavLink className="brand" to="/">
                <img src={Logo} alt="e.KRAAL Innovation Hub" />
              </NavLink>
              <div className="right menu">
                <NavLink activeClassName="not-active" className="item" to="/">
                  <span>Home</span>
                </NavLink>
                <div className="ui dropdown simple item">
                  Training<i className="dropdown icon" />
                  <div className="menu">
                    <NavLink  className="item" to="/training">NCSTP</NavLink>
                    <NavLink className="item" to="/ec-council">EC Council</NavLink>
                  </div>
                </div>
                <NavLink className="item" to="/program">
                  <span>Programs</span>
                </NavLink>
                <NavLink className="item" to="/events">
                  <span>Events</span>
                </NavLink>
                <NavLink className="item" to="/news">
                  <span>News</span>
                </NavLink>
                <NavLink className="item" to="/partners">
                  <span>Partners</span>
                </NavLink>
                <NavLink className="item" to="/about">
                  <span>About</span>
                </NavLink>
                <NavLink className="item" to="/contact">
                  <span>Contact</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="mobile tablet only row">
            <div className="ui fixed transparent menu borderless mobile_menu">
              <NavLink  className="brand" to="/">
                <img src={Logo} alt="e.KRAAL Innovation Hub" />
              </NavLink>
              <div className="right menu">
                <NavLink to = '/' className="menu item" id="mobile_item">
                  <i className="bars icon" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="ui vertical sidebar navbar menu">
          <hr />
          <NavLink className="item" to="/">Home</NavLink>
          <div className="ui dropdown item">
            Training<i className="dropdown icon" />
            <div className="left menu">
              <NavLink className="item" to="/training">NCSTP</NavLink>
              <NavLink className="item" to="/ec-council">EC Council</NavLink>
            </div>
          </div>
          <NavLink className="item" to="/program">
            <span>Programs</span>
          </NavLink>
          <NavLink className="item" to="/events">
            <span>Events</span>
          </NavLink>
          <NavLink className="item" to="/news">
            <span>News</span>
          </NavLink>
          <NavLink className="item" to="/partners">
            <span>Partners</span>
          </NavLink>
          <NavLink className="item" to="/about">
            <span>About</span>
          </NavLink>
          <NavLink className="item" to="/contact">
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    )
}
