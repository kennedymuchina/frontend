import React from 'react'
import mentorship1 from '../images/mentorship/mentorship1.jpg'
import mentorship9 from '../images/mentorship/mentorship9.jpg'
import mentorship7 from '../images/mentorship/mentorship7.jpg'
import mentorship8 from '../images/mentorship/mentorship8.jpg'
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
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.min.css" />
          <div className="ui segment page-segment home-container">
            <div className="ui container">
              <div className="ui grid info-grid">
                <div className="eight wide computer sixteen wide mobile column">
                  <h1 className="ui header ekraal-header">
                    <span>e.KRAAL </span>
                    <span className="highlight">INNOVATION HUB</span>
                  </h1>
                  <h2 className="white-text margin-top-30">Securing the future of Cybersecurity in Kenya by accelerating innovation and creativity in the cyberspace ecosystem.</h2>
                </div>
              </div>
            <div id="particles-js">
              <Particles
                  style={{width: '100%', height: '100%'}}
                  param={{
                    particles: {
                    number: { value: 50, density: { enable: false, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: {
                      type: "polygon",
                      stroke: { width: 0, color: "#000000" },
                      polygon: { nb_sides: 5 },
                      image: { src: "", width: 100, height: 100 }
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                    },
                    line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#ffffff",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 6,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: { enable: true, mode: "repulse" },
                      onclick: { enable: false, mode: "push" },
                      resize: true
                    },
                    modes: {
                      grab: { distance: 400, line_linked: { opacity: 1 } },
                      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                      repulse: { distance: 200, duration: 0.4 },
                      push: { particles_nb: 4 },
                      remove: { particles_nb: 2 }
                    }
                  },
                  retina_detect: true
                  }}
                />
              </div>
              
            </div>
          </div>
          <div className="ui segment page-segment white-background about-segment">
            <div className="ui container">
              <div className="ui grid info-grid stackable">
                <div className="eight wide computer sixteen wide mobile column">
                  <h1 className="ui header black-text">
                    <span>KENYA'S FIRST </span>
                    <span className="highlight">CYBERSECURITY</span>
                    <span>INNOVATION HUB</span>
                  </h1>
                </div>
                <div className="eight wide computer sixteen wide mobile column">
                  <h2 className="ui header">
                    <span className="highlight-fade">ABOUT e.KRAAL</span>
                  </h2>
                  <p>e.KRAAL was founded in 2018 to find ways to keep innovative, talented and creative Kenyans in the country.</p>
                  <p>It aims to retain, nurture and promote the country's top cybesecurity talent and foster the country's social and economic growth.</p>
                  <p>Our Hub also provides services, guidance and advice on cyber security training and education to industry, academia, and other levels of government.</p>
                  <Link className="ui button more-button" to="/about">LEARN MORE ABOUT E-KRAAL</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments">
            <div className="ui container">
              <div className="ui info-grid">
                <div className="ui grid stackable">
                  <div className="eight wide computer sixteen wide mobile column">
                    <h1 className="ui header">
                      <span>OUR </span>
                      <span className="highlight">PROGRAMS</span>
                    </h1>
                  </div>
                </div>
                <div className="ui equal height stackable three column grid">
                  <div className="column">
                    <h2 className="ui header">
                      <span className="highlight-fade">CYBERSECURITY INNOVATION HUB</span>
                    </h2>
                    <p>e.KRAAL's innovation program focuses on nurturing cybersecurity ideas and innovative approaches that enhance and strengthen our country's cybersecurity capabilities.</p>
                    <p>Innovators will be offered mentorship, funding and space to execute their ideas into progressive and groundbreaking cybersecurity products.</p>
                    <Link className="ui button more-button margin" href="/program#innovation">OUR INNOVATION PROGRAM →</Link>
                  </div>
                  <div className="column">
                    <h2 className="ui header">
                      <span className="highlight-fade">NATIONAL CYBERSECURITY TRAINING</span>
                    </h2>
                    <p>The e.KRAAL cybersecurity program focuses on raising the next generation of interested and capable cybersecurity professionals.</p>
                    <p>This program trains students in various fields in cybersecurity to equip them with necessary skills required to start a career in cybersecurity.</p>
                    <Link className="ui button more-button" to="/training">OUR TRAINING PROGRAM →</Link>
                  </div>
                  <div className="column">
                    <h2 className="ui header">
                      <span className="highlight-fade">CYBERSECURITY MENTORSHIP PROGRAM</span>
                    </h2>
                    <p>The e.KRAAL mentorship program is a one on one career mentoring program that gives aspiring individuals an opportunity to learn  directly from experienced mentors.</p>
                    <p>The program assists individuals with their career growth in cybersecurity by matching them with cybersecurity experts as mentors.</p>
                    <Link className="ui button more-button" to="/program#mentorship">OUR MENTORSHIP PROGRAM →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment section-segment white-background">
            <div className="ui container">
              <div className="ui equal height very relaxed stackable grid about-values">
                <div className="eight wide column core-values">
                  <h2 className="highlight">OUR MISSION</h2>
                  <hr className="hidden" />
                  <h1>
                    <i className="icon bullseye" />
                  </h1>
                  <p>Our mission is to create a community of innovative, talented and creative people in our country's cyberspace. We do this by providing mentorship, training, financing and networking opportunities.</p>
                </div>
                <div className="eight wide column core-values">
                  <h2 className="highlight">OUR VISION</h2>
                  <hr className="hidden" />
                  <h1>
                    <i className="icon eye" />
                  </h1>
                  <p>Our vision is to provide powerful and unique opportunities that will help Kenya become a prosperous nation within the cyberspace.</p>
                </div>
                <div className="ui vertical divider">
                  <i className="icon shield alternate" />
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments alumni-segment">
            <div className="ui container">
              <div className="ui info-grid">
                <h1 className="ui header">
                  <span className="highlight">PORTFOLIO </span>
                </h1>
                <div className="ui equal height stackable two column grid">
                  <div className="ui column">
                    <p className="intro">e.KRAAL Innovation Hub, Mentorship and Training program has a network of alumni who have left the program with vast knowledge in security. Our hub mentors and trains individuals who come out of the program as cybersecurity experts as well as birth products that improve the cybersecurity domain.</p>
                    <div className="ui statistics margin-top-30">
                      <div className="statistic">
                        <div className="value counter" data-count={40}>0</div>
                        <div className="label">Alumni</div>
                      </div>
                      <div className="statistic">
                        <div className="value counter" data-count={5}>0</div>
                        <div className="label">Startups</div>
                      </div>
                      <div className="statistic">
                        <div className="value counter" data-count={30}>0</div>
                        <div className="label">Entrepreneurs</div>
                      </div>
                      <div className="statistic">
                        <div className="value counter" data-count={3}>0</div>
                        <div className="label">Events</div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui info-grid pic-grid">
                      <div className="fotorama" data-width="100%" data-ratio="700/467" data-minwidth={400} data-maxwidth={1000} data-minheight={300} data-maxheight="100%">
                        <img className="lozad" src={mentorship9} alt= 'mentorship' />
                        <img className="lozad" src={mentorship8} alt=''/>
                        <img className="lozad" src={mentorship7} alt=''/>
                        <img className="lozad" src={mentorship1} alt=''/>
                      </div>
                    </div>
                    <Link className="ui huge button more-view-button" to="/program/training/cohort_1">Cohort 1 - Training →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments news-segment alumni-container">
            <div className="ui container">
              <h2 className="highlight">OUR PARTNERS</h2>
              <div className="ui stackable four column doubling grid">
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={cisco} alt="Cisco" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={family} alt="Family Bank" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={mmu} alt="Multimedia University" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={jkuat} alt="JKUAT" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={liquidtelcom} alt="Liquid Telecom" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={africahackon} alt="Africa Hackon" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={microsoft} alt="Microsoft" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={techminds} alt="Techmind Technologies" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={kpmg} alt="KPMG" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={safaricom} alt="Safaricom" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={shehacks} alt="Shehacks" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                            <img src={hepta} alt="Hepta Analytics" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                            <img src={eccResellerLogo} alt="ecouncil" />
                          </div>
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
                <div className="ui shape partner_card column">
                  <div className="sides">
                    <div className="side active">
                      <div className="ui note card">
                        <div className="content">
                          <div className="logo">
                          <img src={tribus} alt="TRIBUS" />
                          </div>
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
          <div className="ui-alert-content ui-alert-content-bottom-center" style={{width: 'inherit'}} />
        </div>
      </div>
  )
}

export default Home
