import React from 'react'
import { Link } from 'react-router-dom';
import shehacks from "../images/uploads/b97fcb1f-d77b-43ef-8359-18a66762a8f7.jpeg"

const Event = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui single-event-container">
            <div className="ui container">
              <div className="ui centered grid">
                <div className="ui twelve wide column">
                  <div className="ui grid info-grid">
                    <div className="column">
                      <h1 className="ui header section-header event-title">SheHacks | OPCDE | e-KRAAL #HackFest 2019</h1></div>
                  </div>
                  <div className="column entry_column">
                    <p><span className="header">ENTRY: </span><span className="content"><span>FREE</span></span>
                    </p><Link className="ui button event-register disabled" href rel="noopener noreferrer" target="_blank">REGISTER</Link></div>
                  <hr className="honeycomb" /><img className="event-image" src={shehacks} alt="" />
                  <hr className="honeycomb margin-top-30" />
                  <div className="ui three column stackable grid event_date_grid">
                    <div className="column">
                      <div className="header">DATE</div>
                      <div className="date content">
                        <p>21st Sep 2019</p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="header">TIME</div>
                      <div className="time content">
                        <p><span>STARTS:</span><span> 21/09/2019, 09:00 am</span></p>
                        <p><span>ENDS:</span><span> 21/09/2019, 03:00 pm</span></p>
                      </div>
                    </div>
                    <div className="column">
                      <div className="header">VENUE</div>
                      <div className="venue content">
                        <p>e-KRAAL Innovation Hub</p>
                      </div>
                    </div>
                  </div>
                  <hr className="honeycomb margin-top-30" />
                  <div className="header bold">EVENT DETAILS</div>
                  <div className="ui grid details-grid">
                    <div className="column">
                      <div className="content details">Event Theme: Getting started in Memory Forensics Trainer: Kelvin King'ori Shehacks is a community of women in cybersecurity from various backgrounds and counties across Kenya.
                        <p /> The community brings together learners and experts who share knowledge, experience and mentorship through the various platforms and programmes we have.
                        <p />
                        OPCDE (OPeration for Community Development &amp; Empowerment) is a cyber security conference in the middle-east with recent entry into Kenya.
                        <p /> The conference is organized by Comae technologies with the aspiration to enhance the awareness and importance of information security within the information technology community in the middle-east and across the globe through partnerships with initiatives like SheHacks_KE.
                        <p />
                        For the September bootcamp, SheHacks will partner with OPCDE and e-KRAAL innovation hub to facilitate a training on Memory Forensics for 30 select participants.
                        <p /> Selected participants will receive an email with directions to the venue.
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="header bold">SHARE</div>
                  <div className="ui grid social-share-grid"><a href="http://www.facebook.com/sharer.php?u=https://ekraal.org/event/shehacks--opcde--e-kraal-hackfest-2019" rel="noopener noreferrer" target="_blank"><i className="icon facebook" /></a><a href="https://twitter.com/share?url=https://ekraal.org/event/shehacks--opcde--e-kraal-hackfest-2019&text=Check%20out%20this%20event%20SheHacks | OPCDE | e-KRAAL #HackFest 2019%20&hashtags=eKRAAL, Infosec, Cybersecurity" rel="noopener noreferrer" target="_blank"><i className="icon twitter" /></a><a href="https://telegram.me/share/url?url=https://ekraal.org/event/shehacks--opcde--e-kraal-hackfest-2019" rel="noopener noreferrer" target="_blank"><i className="icon telegram" /></a>
                    <a href="whatsapp://send?text=Checkout this event SheHacks | OPCDE | e-KRAAL #HackFest 2019 from ekraal.org https://ekraal.org/event/shehacks--opcde--e-kraal-hackfest-2019" data-action="share/whatsapp/share"></a><i className="icon whatsapp" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments alumni-container">
            <div className="ui container become_container event_host">
              <h2>Are you a interested in hosting a tech event or conference with us?</h2>
              <div className="button_container"><Link className="ui button" to="/events/apply">APPLY TO HOST</Link></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Event
