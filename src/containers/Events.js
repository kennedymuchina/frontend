import React from 'react'
import image1 from "../images/events/image1.jpg";
import image2 from "../images/events/image2.jpg";
import image3 from "../images/events/image3.jpg";
import image4 from "../images/events/image4.jpg";
import image5 from "../images/events/image5.jpg";
import image6 from "../images/events/image6.jpg";
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui segment page-segment home-segments news-segment alumni-container white-background events-list-container">
            <div className="ui container">
              <h2 className="highlight-fade" style={{marginTop: '2.5em'}}>UPCOMING EVENTS</h2>
              <div className="ui stackable two column grid" />
              <h2 className="highlight-fade event_header" style={{marginTop: '2.5em'}}>PAST EVENTS</h2>
              <div className="ui stackable two column grid">
                <div className="ui card event_card column piled segment">
                  <div className="content"><a className="header blue-text" href="/events/event">SheHacks | OPCDE | e-KRAAL #HackFest 2019</a>
                    <div className="date">21</div>
                    <div className="month">Sep</div>
                    <div className="more"><a className="rsvp" href='none' rel="noopener noreferrer" target="_blank">RSVP</a><a className="readmore" href="/events/event/">Read More</a></div>
                  </div>
                </div>
                <div className="ui card event_card column piled segment">
                  <div className="content"><a className="header blue-text" href="/events/event/africahackon-6th-annual-conference">AFRICAHACKON 6TH ANNUAL CONFERENCE</a>
                    <div className="date">12</div>
                    <div className="month">Aug</div>
                    <div className="more"><a className="rsvp" href="https://gig.co.ke/events/223" rel="noopener noreferrer" target="_blank">RSVP</a><a className="readmore" href="/events/event/africahackon-6th-annual-conference">Read More</a></div>
                  </div>
                </div>
                <div className="ui card event_card column piled segment">
                  <div className="content"><a className="header blue-text" href="/events/event/cisco-women-of-impact">Cisco Women of Impact</a>
                    <div className="date">5</div>
                    <div className="month">Mar</div>
                    <div className="more"><a className="rsvp" href="http://www.cvent.com/events/women-of-impact-2019/event-summary-fb87e8af48fd42de862c3f7752980d05.aspx" rel="noopener noreferrer" target="_blank">RSVP</a><a className="readmore" href="/events/event/cisco-women-of-impact">Read More</a></div>
                  </div>
                </div>
                <div className="ui card event_card column piled segment">
                  <div className="content"><a className="header blue-text" href="/events/event/computer-misuse-and-cyber-crimes-act---debate">Computer Misuse and Cyber-Crimes Act - Debate</a>
                    <div className="date">2</div>
                    <div className="month">Mar</div>
                    <div className="more"><a className="rsvp" href="https://www.eventbrite.com/o/ekraal-innovation-hub-19743421246" rel="noopener noreferrer" target="_blank">RSVP</a><a className="readmore" href="/events/event/computer-misuse-and-cyber-crimes-act---debate">Read More</a></div>
                  </div>
                </div>
                <div className="ui card event_card column piled segment">
                  <div className="content"><a className="header blue-text" href="/events/event/space-x-start-up-model">Space X Start-up Model</a>
                    <div className="date">2</div>
                    <div className="month">Mar</div>
                    <div className="more"><a className="rsvp" href="https://www.eventbrite.com/o/ekraal-innovation-hub-19743421246" rel="noopener noreferrer" target="_blank">RSVP</a><a className="readmore" href="/events/event/space-x-start-up-model">Read More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment section-segment white-background cohort-gallery-segment">
            <div className="ui container">
              <h1 className="ui header"><span>EVENTS </span><span className="highlight-fade">GALLERY</span></h1>
              <div className="ui link three stackable cards">
                <div className="ui card image-grid">
                  <div className="image" style={{height: '100%'}}><img alt="cohort images" className="ui medium image" src={image1} style={{height: '100%'}} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image" style={{height: '100%'}}><img alt="cohort images" className="ui medium image" src={image2} style={{height: '100%'}} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image" style={{height: '100%'}}><img alt="cohort images" className="ui medium image" src={image3} style={{height: '100%'}} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image" style={{height: '100%'}}><img alt="cohort images" className="ui medium image" src={image4} style={{height: '100%'}} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image" style={{height: '100%'}}><img alt="cohort images" className="ui medium image" src={image5} style={{height: '100%'}} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image" style={{height: '100%'}}><img alt="cohort images" className="ui medium image" src={image6} style={{height: '100%'}} /></div>
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

export default Events
