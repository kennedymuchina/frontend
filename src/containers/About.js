import React from 'react'
import Ruth from "../images/mentors/Ruth.jpg"
import Ck from "../images/mentors/ck.jpg"
import Gabu from "../images/mentors/Gabriel.jpg"
import Mike from "../images/mentors/mike.jpg"
import Chris from "../images/mentors/christian.jpg"
import Charlo from "../images/mentors/Charles.jpeg"
import Sam from "../images/mentors/Sam.jpg"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui segment page-segment about-container">
            <div className="ui container">
              <div className="ui grid info-grid">
                <div className="eight wide computer sixteen wide mobile column">
                  <h1 className="ui header section-header highlight">ABOUT US</h1>
                  <p className="p_banner">e.KRAAL was founded in 2018 to build a community around the innovation space in the cybersecurity sector.</p>
                  <p className="p_banner">We believe that investing in cybersecurity will help Kenya become a prosperous nation within the cyberspace domain.</p>
                </div>
                <div className="eight wide computer sixteen wide mobile column what-we-do">
                  <h2 className="ui header"><span>WHAT WE DO</span></h2>
                  <div className="ui items">
                    <div className="item">
                      <div className="content">
                        <h3 className="header">INNOVATION</h3></div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <h3 className="header">TRAINING</h3></div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <h3 className="header">MENTORSHIP</h3></div>
                    </div>
                    <div className="item">
                      <div className="content">
                        <h3 className="header">COLLABORATION</h3></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment section-segment white-background">
            <div className="ui container">
              <div className="ui equal height stackable grid about-values">
                <div className="four wide column">
                  <h2 className="highlight-fade">INNOVATION</h2>
                  <p>e.KRAAL's core values lie in seeking and promoting innovative approaches that enhance cyber capability and security.</p>
                  <p>We also seek to nurture ideas that offer opportunities to explore future technologies.</p>
                </div>
                <div className="four wide column">
                  <h2 className="highlight-fade">MENTORSHIP</h2>
                  <p>e.KRAAL offers mentorship and training opportunities to leverage the considerable intellect and creativity of the top talents.</p>
                  <p>Innovators are mentored by top cybersecurity professionals in order to ensure valuable top notch content is delivered.</p>
                </div>
                <div className="four wide column">
                  <h2 className="highlight-fade">COLLABORATION</h2>
                  <p>e.KRAAL links cybersecurity innovators to top cybersecurity individuals and organizations in a collaborative environment where they can evaluate their cybersecurity potential.</p>
                  <p>Our network is designed to enhance collaboration between these organizations who have specific needs and innovators who have the potential to meet the needs.</p>
                </div>
                <div className="four wide column">
                  <h2 className="highlight-fade">EVENTS</h2>
                  <p>e.KRAAL partners with companies to organize security oriented events where curious and talented individuals can meet, socialize, share infosec ideas and learn.</p>
                  <p>Our hub is committed to creating a community of innovators interested in realising the cybersecurity potential in our country.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="honeycomb" />
          <div className="ui segment page-segment section-segment team-container white-background">
            <div className="ui container">
              <h2 className="highlight">OUR MENTORS</h2>
              <p className="call_to_action">Meet Our Mentors</p>
              <div className="ui link three stackable cards mentors-cards">
                <div className="card">
                  <div className="image"><img alt="mentors" src={Ruth} /></div>
                  <div className="content">
                    <div className="header">Ruth Juma</div>
                    <div className="meta"><a href="none"> Offensive Cybersecurity Engineer</a></div>
                    <div className="description">Ruth is a seasoned Cybersecurity Engineer with over 5 years experience in the industry. She has versatile skills ranging from Web Security, Penetration Testing and Network Security Monitoring.</div>
                  </div>
                </div>
                <div className="card">
                  <div className="image"><img alt="mentors" src={Ck} /></div>
                  <div className="content">
                    <div className="header">Chrispus Kamau</div>
                    <div className="meta"><a href="none"> Offensive Cybersecurity Engineer</a></div>
                    <div className="description">Chrispus is an experienced Cybersecurity Engineer with over 5 years experience in the industry. His areas of interest include Network and Wireless Security, Mobile Security and Hardware Security. Find some of his work at<a href="https://www.ckn.io" rel="noopener noreferrer" target="_blank"> ckn.io</a></div>
                  </div>
                </div>
                <div className="card">
                  <div className="image"><img alt="mentors" src={Gabu} /></div>
                  <div className="content">
                    <div className="header">Gabriel Mathenge</div>
                    <div className="meta"><a href="none"> Offensive Cybersecurity Engineer</a></div>
                    <div className="description">Gabriel is a Cybersecurity Engineer with over 5 years experience in security consulting across various industries. His primary interests include penetration testing, red teaming and security training. Gabriel blogs at<a href="https://thevivi.net" rel="noopener noreferrer" target="_blank"> thevivi.net</a></div>
                  </div>
                </div>
                <div className="card">
                  <div className="image"><img alt="mentors" src={Mike} /></div>
                  <div className="content">
                    <div className="header">Michael Kang'ethe</div>
                    <div className="meta"><a href="none"> Cryptography Expert</a></div>
                    <div className="description">Michael Kangethe is an Algorithms Researcher and Software Developer passionate about AI in security monitoring and cryptography as a security tool. As a researcher he has been involved in developing crypto-systems and data analysis modules for various clients both in the public and private sectors.</div>
                  </div>
                </div>
                <div className="card">
                  <div className="image"><img alt="mentors" src={Chris} /></div>
                  <div className="content">
                    <div className="header">Christian Kisutsa</div>
                    <div className="meta"><a href="none"> Information Security Analyst</a></div>
                    <div className="description">Christian is a passionate Security Analyst, specializing in Digital forensics, Malware analysis, Network Security Monitoring and Mobile application penetration testing. He shares his insights from time to time on his blog at<a href="https://www.shadowinfosec.io/" rel="noopener noreferrer" target="_blank"> shadowinfosec.io. </a>He is has also developed a few cyber security related tools on his github page at<a href="https://github.com/xtiankisutsa" rel="noopener noreferrer" target="_blank"> github.com/xtiankisutsa.</a></div>
                  </div>
                </div>
                <div className="card">
                  <div className="image"><img alt="mentors" src={Charlo} /></div>
                  <div className="content">
                    <div className="header">Charles Muiruri</div>
                    <div className="meta"><a href="none"> Vulnerability Researcher</a></div>
                    <div className="description">Charles is a security enthusiast who is passionate about understanding the inner workings of software. He is a security researcher in the fields of reverse engineering, exploit development and vulnerability research. He has experience reversing embedded systems in mobile devices. He also a keen eye on Android and iOS exploitation. Some of his content can be found at<a href="https://icrackthecode.github.io" rel="noopener noreferrer" target="_blank"> https://icrackthecode.github.io.</a></div>
                  </div>
                </div>
                <div className="card">
                  <div className="image"><img alt="mentors" src={Sam} /></div>
                  <div className="content">
                    <div className="header">Samuel Mwai</div>
                    <div className="meta"><a href="none"> Cybersecurity Consultant</a></div>
                    <div className="description">Sam is a well-rounded professional with over 11 years’ experience in Information Technology with a deep passion and understanding in Cyber Security. His experience spans across Telecommunications, Banking, Government as well as SMEs. He has held both junior and senior management levels. He has led and conducted projects in several countries within Africa as well as working harmoniously in a multicultural environment. </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments alumni-container">
            <div className="ui container become_container event_host">
              <h2 className="center">Learn more about our cybersecurity innovation programs.</h2>
              <div className="button_container"><Link className="ui button" to="/program">PROGRAMS →</Link></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
