import React from 'react'
import cisco from '../images/photos/cisco.png'
import family from '../images/photos/family.gif'
import mmu from '../images/photos/mmu.jpeg'
import jkuat from '../images/photos/jkuat.jpg'
import liquidtelcom from '../images/photos/liquidtelcom.png'
import microsoft from '../images/photos/microsoft.jpg'
import africahackon from '../images/photos/africahackon.png'
import techminds from '../images/photos/techminds.png'
import safaricom from '../images/photos/safaricom.png'
import shehacks from '../images/photos/shehacks.png'
import kpmg from '../images/photos/kpmg.png'
import hepta from '../images/photos/hepta.png'
import tribus from '../images/photos/tribus.jpg'
import eccResellerLogo from '../images/photos/ecc-reseller-logo.png'
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
          <div className="ui segment alumni-container white-background partners-container">
            <div className="ui container">
              <h2 className="highlight-fade">OUR PARTNERS</h2>
              <div className="ui stackable four column doubling grid">
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={cisco} alt="Cisco" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Cisco</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={family} alt="Family Bank" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Family Bank</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={mmu} alt="Multimedia University" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Multimedia University</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={jkuat} alt="JKUAT" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">JKUAT</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={liquidtelcom} alt="Liquid Telecom" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Liquid Telecom</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={africahackon} alt="Africa Hackon" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Africa Hackon</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={microsoft} alt="Microsoft" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Microsoft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={techminds} alt="Techmind Technologies" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Techmind Technologies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={kpmg} alt="KPMG" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">KPMG</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={safaricom} alt="Safaricom" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Safaricom</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={shehacks} alt="Shehacks" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Shehacks</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={hepta} alt="Hepta Analytics" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">Hepta Analytics</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={eccResellerLogo} alt="ecouncil" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">ecouncil</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui shape partner_card column animated slideInUp">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo"><img src={tribus} alt="TRIBUS" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      <div className="ui note card">
                        <div className="content">
                          <div className="name">TRIBUS</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments alumni-container">
            <div className="ui container become_container event_host">
              <h2>Are you a corporation interested in collaborating with us to build your innovation strategy and become part of a community devoted to promoting the country's cybersecurity capabilities.</h2>
              <div className="button_container"><Link className="ui button" to="/partners/apply">BECOME A PARTNER</Link></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Partners
