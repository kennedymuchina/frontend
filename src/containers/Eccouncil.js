import React from 'react'
import eccouncil from "../images/photos/ecc-light.png"

const Eccouncil = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui bg-image" />
          <div className="ui grid wrapper-grid">
            <div className="six wide computer sixteen wide mobile column">
              <div className="column">
                <h1 className="ui header section-header highlight">e.KRAAL - EC-COUNCIL PARTNERSHIP</h1></div>
            </div>
            <div className="ten wide computer sixteen wide mobile column">
              <div className="column">
                <p className="p_banner">e.KRAAL has partnered with EC-Council as an authorized reseller of top notch cybersecurity courses, EC-Council is the world’s largest cyber security technical certification body.</p>
                <p className="p_banner">EC-Council has trained more than 80,000 people, certifying over 30,000 cyber security specialists from organizations such as Microsoft, IBM, the United Nations, the FBI and the US Army.</p>
              </div>
              <div className="center aligned column row">
                <div className="column"><img src={eccouncil} alt="Ec Council" /></div>
              </div>
            </div>
          </div>
          <div className="ui centered grid contact-grid">
            <div className="ui six wide computer fourteen wide mobile ten wide tablet column">
              <div ui="segment">
                <div className="column">
                  <form className="ui big form has-validation-callback" action="/api/ecouncil/submit" method="POST">
                    <h1 className="header">Contact us on Course Enrollment</h1>
                    <div className="two fields">
                      <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first_name" placeholder="First Name" data-validation="required length" data-validation-length="3-20" />
                      </div>
                      <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last_name" placeholder="Last Name" data-validation="required length" data-validation-length="3-20" />
                      </div>
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input type="text" name="email" placeholder="Email: user@domain.com" data-validation="required email" />
                    </div>
                    <div className="field">
                      <label>Subject</label>
                      <input type="text" name="subject" placeholder="Subject" data-validation="required" />
                    </div>
                    <div className="field">
                      <label>Your Message</label>
                      <textarea name="message" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                    </div>
                    <input className="ui submit black button" type="submit" defaultValue="SUBMIT →" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Eccouncil
