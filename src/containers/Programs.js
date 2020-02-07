import React from 'react'
import application from "../images/photos/application.jpg"
import presentation from "../images/photos/presentation.jpg"
import selection from "../images/photos/selection.jpg"
import mentorship from "../images/photos/mentorship.jpg"
import funding from "../images/photos/funding.jpg"
import demo from "../images/photos/demo.jpg"
import recruit from "../images/photos/recruit.jpg"
import interview from "../images/photos/interview.jpg"
import training from "../images/photos/training.jpg"
import exam from "../images/photos/exam.jpg"
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
      <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui segment page-segment about-container program-container">
            <div className="ui container">
              <div className="ui grid info-grid">
                <div className="eight wide computer sixteen wide mobile column">
                  <h1 className="ui header section-header highlight">PROGRAMS</h1>
                  <p className="p_banner">Our programs are geared towards creating an innovative space to propel cybersecurity as we know it in our country to a whole new level.</p>
                  <p className="p_banner">We currently run three programs. Innovation program to incubate ideas; Mentorship program to connect individuals with professional mentors in cybesrecurity; and Training program to train individuals in cybersecurity.</p>
                  <div className="ui buttons program-buttons">
                    <Link className="ui button smooth-goto" to="#innovation">Innovation Program</Link>
                    <Link className="ui button smooth-goto" to="#mentorship">Cybersecurity Mentorship</Link>
                    <Link className="ui button smooth-goto" to="/training">Cybersecurity Training</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment section-segment timeline-container" id="innovation">
            <div className="timeline-header">
              <h2 className="ui header highlight-fade">E-KRAAL INNOVATION PROGRAM</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item" data-text="APPLICATION AND ONBOARDING">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={application} />
                  <h2 className="timeline__content-title">APPLICATION</h2>
                  <p className="timeline__content-desc">Applications are open. We go through a rigorous process of selecting the innovators with top notch ideas who will proceed to the presentation phase.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="PRODUCT PRESENTATION">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={presentation} />
                  <h2 className="timeline__content-title">PRESENTATION</h2>
                  <p className="timeline__content-desc">Selected presenters get to present their ideas and products in the presentation challenge where they get to give more insight on their innovations to a panel of cybersecurity experts and tech professionals.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="INNOVATOR SELECTION AND ANNOUNCEMENT">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={selection} />
                  <h2 className="timeline__content-title">SELECTION</h2>
                  <p className="timeline__content-desc">Successful innovators with the most promising and viable ideas are announced and finally onboarded into the innovation program where they'll receive support and numerous other benefits.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="MENTORSHIP AND NETWORKING">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={mentorship} />
                  <h2 className="timeline__content-title">MENTORSHIP</h2>
                  <p className="timeline__content-desc">Innovators will be offered all the resources and mentorship needed to facilitate building and actualizing of their ideas. They also get opportunities to network with top innovative companies and cybersecurity experts.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="PRODUCT FUNDING">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={funding} />
                  <h2 className="timeline__content-title">FUNDING</h2>
                  <p className="timeline__content-desc">The innovators will also be provided with funding to build their products as well as the necessary resources needed to scale and grow these products.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="FINAL PRODUCT DEMO">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={demo} />
                  <h2 className="timeline__content-title">PRODUCT DEMO</h2>
                  <p className="timeline__content-desc">The final product demo stage is where the progress will be reviewed and innovators get to pitch to different agencies and potential clients. This is a critical phase where most innovators get further funding or offers from the potential clients.</p>
                </div>
              </div>
              <Link className="ui button innovation-apply" to="/program/incubation/apply">SUBMIT YOUR IDEA</Link>
            </div>
          </div>
          <div className="honeycomb" />
          <div className="ui segment page-segment section-segment timeline-container" id="mentorship">
            <div className="timeline-header">
              <h2 className="ui header highlight-fade">CYBERSECURITY MENTORSHIP PROGRAM</h2>
              <div className="header-container ui container">
                <p className="margin-top-30">This program aims to mentor individuals interested in cybersecurity as well as those with experience to expand their skills and gain in-depth knowledge in cybersecurity.</p>
                <p>The Cybersecurity Mentorship Program is a partnership program that matches individuals interested in cybersecurity with an industry professional (mentor) who will offer one on one sessions and assignments in their respective fields such as application security, malware analysis, network security e.t.c.</p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-item" data-text="APPLICATION">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={recruit} />
                  <h2 className="timeline__content-title">APPLICATION</h2>
                  <p className="timeline__content-desc">Interested individuals apply to the program and the applications are sorted to find the best matches which are then forwarded to the mentors.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="MATCHING">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={interview} />
                  <h2 className="timeline__content-title">MATCHING</h2>
                  <p className="timeline__content-desc">Qualified mentees are matched with potential mentors who assess them depending on their areas of interest to determine how they suit into the program.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="MENTORSHIP">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={training} />
                  <h2 className="timeline__content-title">MENTORSHIP</h2>
                  <p className="timeline__content-desc">Through a series of one-on-one mentoring sessions, the mentees will gain professional advice and support to enhance their cybersecurity skills, network and career advice that will prepare them for the job market.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="FINAL ASSESSMENT">
                <div className="timeline__content">
                  <img className="timeline__img" alt="timeline img" src={exam} />
                  <h2 className="timeline__content-title">FINAL ASSESSMENT</h2>
                  <p className="timeline__content-desc">Throughout the period, the mentees are assessed on the skills they've gained from the program. The final assessment will determine the way forward for mentees and outstanding mentees may be absorbed into our innovation hub.</p>
                </div>
              </div>
              <Link className="ui button innovation-apply" to="/program/mentorship/apply">APPLY TO OUR MENTORSHIP PROGRAM</Link>
            </div>
          </div>
          <button className="back-to-top" type="button" />
        </div>
      </div>
  )
}

export default Programs
