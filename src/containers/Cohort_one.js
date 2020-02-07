import React from 'react'

import mentorship7  from"../images/mentorship/mentorship7.jpg"
import mentorship8  from"../images/mentorship/mentorship8.jpg"
import mentorship9  from"../images/mentorship/mentorship9.jpg"
import mentorship10  from"../images/mentorship/mentorship10.jpg"
import mentorship11  from"../images/mentorship/mentorship11.jpg"
import mentorship12  from"../images/mentorship/mentorship12.jpg"
import mentorship1  from"../images/mentorship/mentorship1.jpg"
import mentorship2  from"../images/mentorship/mentorship2.jpg"
import mentorship3  from"../images/mentorship/mentorship3.jpg"
import mentorship4  from"../images/mentorship/mentorship4.jpg"
import mentorship5  from"../images/mentorship/mentorship5.jpg"
import mentorship6  from"../images/mentorship/mentorship6.jpg"

const Cohort_one = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui segment page-segment cohort-container">
            <div className="ui container">
              <div className="ui grid info-grid">
                <div className="twelve wide computer sixteen wide mobile column">
                  <h1 className="ui header section-header highlight">CYBERSECURITY TRAINING PROGRAM- COHORT 1</h1>
                  <p className="p_banner">e.KRAAL hosted its first Cybersecurity Training Program cohort from November 2018 to April 2019.</p>
                  <p className="p_banner">The students were trained and equiped with the essential and vital cybersecurity skills by professionals in the cybersecurity industry.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment section-segment white-background cohort-gallery-segment">
            <div className="ui container">
              <h1 className="ui header"><span>OUR </span><span className="highlight-fade">GALLERY</span></h1>
              <h3>TRAINING</h3>
              <div className="ui link three stackable cards">
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship7} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship8} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship9} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship10} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship11} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship12} /></div>
                </div>
              </div>
              <h3>TEAM BUILDING EVENT</h3>
              <div className="ui link three stackable cards">
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship1} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship2} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship3} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship4} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship5} /></div>
                </div>
                <div className="ui card image-grid">
                  <div className="image"><img alt='cohort one' className="ui medium image" src={mentorship6} /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments alumni-container">
            <div className="ui container become_container event_host">
              <h2>Are you a recent graduate interested in joining our cybersecurity training program?</h2>
              <div className="button_container"><a className="ui button" href="/program/training/apply" target="_blank">APPLY TO COHORT 2</a></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cohort_one
