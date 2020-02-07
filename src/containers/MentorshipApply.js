import React from 'react'

const MentroshipApply = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui-calendar/0.0.8/calendar.min.css" />
          <div className="ui segment page-segment application-container">
            <div className="ui container">
              <div className="ui grid info-grid">
                <div className="twelve wide computer sixteen wide mobile column">
                  <h1 className="ui header section-header highlight">e.KRAAL MENTORSHIP PROGRAM APPLICATION</h1>
                  <p className="p_banner">Apply to be mentored at our Innovation Hub.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments contact-container application_container">
            <div className="contact-form-column">
              <div className="ui container">
                <p>The application has 2 parts; Basic Information and Technical Information.</p>
                <div className="ui bulleted list">You will required to upload these documents in PDF format:
                  <div className="item">CV/Resume</div>
                </div>
                <form className="ui large form application-form has-validation-callback" action="/program/mentorship/apply" method="POST" id="mentorshipApplicationForm" encType="multipart/form-data">
                  <h3 className="application_form_title">APPLICATION FORM</h3>
                  <div className="ui styled accordion form-accordion">
                    <div className="title"><i className="dropdown icon" /> SECTION ONE: BASIC INFORMATION</div>
                    <div className="content active">
                      <div className="two fields">
                        <div className="field required">
                          <label>First Name</label>
                          <input type="text" name="first_name" placeholder="First Name" data-validation="length" data-validation-length="3-15" />
                        </div>
                        <div className="field required">
                          <label>Last Name</label>
                          <input type="text" name="last_name" placeholder="Last Name" data-validation="length" data-validation-length="3-15" />
                        </div>
                      </div>
                      <div className="two fields">
                        <div className="field required">
                          <label>Email Address</label>
                          <input type="email" name="email" placeholder="Email Address" data-validation="email" />
                        </div>
                        <div className="field required">
                          <label>Phone</label>
                          <input type="text" name="phone" placeholder="Phone Number" data-validation="custom" data-validation-regexp="^(0){1}(7(?:(?:[0-9][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$" />
                        </div>
                      </div>
                      <div className="two fields">
                        <div className="field required">
                          <label>Address</label>
                          <input type="text" name="address" placeholder="Address" data-validation="required" />
                        </div>
                        <div className="field required">
                          <label>Gender</label>
                          <div className="ui selection dropdown" tabIndex={0}>
                            <input type="hidden" name="gender" /><i className="dropdown icon" />
                            <div className="default text">Gender</div>
                            <div className="menu" tabIndex={-1}>
                              <div className="item" data-value="Male">Male</div>
                              <div className="item" data-value="Female">Female</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="two fields">
                        <div className="field required">
                          <label>CV</label>
                          <div className="ui action input">
                            <input type="file" name="cv" id="cv" data-validation="required mime size" data-validation-allowing="pdf" data-validation-max-size="2M" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="title"><i className="dropdown icon" /> SECTION TWO: TECHNICAL INFORMATION</div>
                    <div className="content active">
                      <div className="two fields">
                        <div className="field required">
                          <label>Area of Interest</label>
                          <div className="ui selection dropdown" tabIndex={0}>
                            <input type="hidden" name="area_of_expertise" data-validation="required" /><i className="dropdown icon" />
                            <div className="default text">Area of Expertise</div>
                            <div className="menu" tabIndex={-1}>
                              <div className="item" data-value="Application Security">Application Security</div>
                              <div className="item" data-value="Network Security">Network Security</div>
                              <div className="item" data-value="Mobile Security">Mobile Security</div>
                              <div className="item" data-value="Cloud Security">Cloud Security</div>
                              <div className="item" data-value="Malware/Spyware Analysis">Malware/Spyware Analysis</div>
                              <div className="item" data-value="Risk Audit/Management">Risk Audit/Management</div>
                              <div className="item" data-value="Penetration Testing">Penetration Testing</div>
                              <div className="item" data-value="Other">Other</div>
                            </div>
                          </div>
                        </div>
                        <div className="field required">
                          <label>Years of experience in Cybersecurity</label>
                          <input type="text" name="cybsec_years" placeholder="Years in Cybersecurity (0 if less than an year)" data-validation="required number" />
                        </div>
                      </div>
                      <div className="field required">
                        <label>What do you understand by "Cybersecurity" and "Digital Privacy"? (200 words)</label>
                        <textarea name="cybersecurity" placeholder="What is Cybersecurity?" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                      <div className="field required">
                        <label>What impact do you think enhancing cybersecurity will we have in our country? (200 words)</label>
                        <textarea name="cybersecurity_impact" placeholder="What impact do you think enhancing cybersecurity in our country will have?" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                      <div className="field required">
                        <label>What do you expect to gain from this program? (200 words)</label>
                        <textarea name="cybersecurity_individual" placeholder="How do you think this program will impact you?" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <input className="ui submit button" type="submit" defaultValue="SUBMIT APPLICATION →" />
                  <div className="ui error message" />
                  <div className="header">We noticed some issues</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MentroshipApply
