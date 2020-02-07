import React from 'react'

import Recruit from "../images/photos/recruit.jpg"
import Inverview  from "../images/photos/interview.jpg"
import training  from "../images/photos/training.jpg"
import Exam  from "../images/photos/exam.jpg"
import Graduation  from "../images/photos/graduation.jpg"
import { Link } from 'react-router-dom';

const Training = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui segment page-segment about-container program-container">
            <div className="ui container">
              <div className="ui grid info-grid">
                <div className="ten wide computer sixteen wide mobile column">
                  <h1 className="ui header section-header highlight">NATIONAL CYBER SECURITY TRAINING PROGRAM</h1>
                  <p className="p_banner margin-top-30">The cybersecurity training program focuses on raising the next generation of interested and capable cybersecurity professionals as a starting point to building a stronger national cyber-defence.</p>
                  <p className="p_banner">This program aims to increase and reinforce awareness and train fresh graduates in cybersecurity in order to scale the country's cyber capabilty.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment section-segment timeline-container" id="training">
            <div className="timeline-header">
              <h2 className="ui header highlight-fade">NATIONAL CYBERSECURITY TRAINING PROGRAM TIMELINE</h2>
              <div className="header-container ui container">
                <p className="margin-top-30">The training program is a 6 month program that aims to increase and reinforce awareness and train fresh graduates in cybersecurity in order to increase the country's cyber capabilty.</p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-item timeline-item--active" data-text="RECRUITMENT">
                <div className="timeline__content"><img className="timeline__img" src={Recruit} alt='timeline' />
                  <h2 className="timeline__content-title">RECRUITMENT</h2>
                  <p className="timeline__content-desc">Our hub reaches out to universities and colleges to recruit students who show the potential to align with the program's objectives and vision. Applications can also be submitted<Link to="/program/training/apply">  online.</Link></p>
                </div>
              </div>
              <div className="timeline-item" data-text="INTERVIEW">
                <div className="timeline__content"><img className="timeline__img" src={Inverview} alt='timeline' />
                  <h2 className="timeline__content-title">INTERVIEW</h2>
                  <p className="timeline__content-desc">Shortlisted applicants are invited for face to face interviews where they are assessed and given tests to gauge them.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="TRAINING AND MENTORSHIP">
                <div className="timeline__content"><img className="timeline__img" src={training} alt='timeline' />
                  <h2 className="timeline__content-title">TRAINING</h2>
                  <p className="timeline__content-desc">Through a series of training sessions, the students will gain skills in cybersecurity as well as enhance their cyber awareness.</p>
                </div>
              </div>
              <div className="timeline-item" data-text="FINAL EXAMINATION">
                <div className="timeline__content"><img className="timeline__img" src={Exam} alt='timeline' />
                  <h2 className="timeline__content-title">EXAMINATION</h2>
                  <p className="timeline__content-desc">Throughout the 6 month period, students will sit for various C.A.Ts and practical sessions to assess them. At the end of the period, the students will sit for a series of exams that will determine their successful completion of the program,</p>
                </div>
              </div>
              <div className="timeline-item" data-text="GRADUATION FROM PROGRAM">
                <div className="timeline__content"><img className="timeline__img" src={Graduation} alt='timeline' />
                  <h2 className="timeline__content-title">GRADUATION</h2>
                  <p className="timeline__content-desc">Students who successfully complete our 6 month program will be ready for the job market and be able to choose a suitable career path in cybersecurity.</p>
                </div>
              </div><Link className="ui button innovation-apply" id="training-apply" to="/program/training/cohort_1">VIEW COHORT I</Link></div>
          </div>
          <div className="ui segment page-segment home-segments alumni-container">
            <div className="ui container become_container event_host">
              <h2>Check out our previous cybersecurity training cohort 1 to learn more about this program.</h2>
              <div className="button_container"><Link className="ui button" to="/program/training/cohort_1">e.KRAAL TRAINING COHORT 1</Link></div>
            </div>
          </div>
          <button className="back-to-top" type="button" />
        </div>
      </div>
  )
}

export default Training
