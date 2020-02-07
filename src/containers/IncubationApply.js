import React from 'react'

const IncubationApply = () => {
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
                  <h1 className="ui header section-header highlight">e.KRAAL INNOVATION APPLICATION</h1>
                  <p className="p_banner">Submit your pitch to e.KRAAL's Innovation Program.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments contact-container application_container">
            <div className="contact-form-column">
              <div className="ui container">
                <p>The application has 3 parts; Basic Information; Product Information and Pitch Information.</p>
                <div className="ui bulleted list">You will be required to upload these documents in PDF format.
                  <div className="item">CV/Resume</div>
                  <div className="item">Pitch Deck</div>
                </div>
                <form className="ui large form application-form has-validation-callback" action="/program/incubation/apply" method="POST" id="trainingApplicationForm" encType="multipart/form-data">
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
                        <div className="field">
                          <label>Gender</label>
                          <div className="ui selection dropdown" tabIndex={0}>
                            <input type="hidden" name="gender" data-validation="required" /><i className="dropdown icon" />
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
                    <div className="title"><i className="dropdown icon" /> SECTION TWO: PRODUCT INFORMATION</div>
                    <div className="content active">
                      <div className="two fields">
                        <div className="field required">
                          <label>Product Name</label>
                          <input type="text" name="product_name" placeholder="Product Name" data-validation="length" data-validation-length="3-30" />
                        </div>
                        <div className="field">
                          <label>Product Website (If available)</label>
                          <input type="text" name="product_website" placeholder="Product Website" data-validation="url" data-validation-optional="true" />
                        </div>
                      </div>
                      <div className="two fields">
                        <div className="field required">
                          <label>Industry Niche</label>
                          <div className="ui selection dropdown" tabIndex={0}>
                            <input type="hidden" name="industry_niche" data-validation="required" /><i className="dropdown icon" />
                            <div className="default text">Niche</div>
                            <div className="menu" tabIndex={-1}>
                              <div className="item" data-value="Application Security">Application Security</div>
                              <div className="item" data-value="Network Security">Network Security</div>
                              <div className="item" data-value="Mobile Security">Mobile Security</div>
                              <div className="item" data-value="Cloud Security">Cloud Security</div>
                              <div className="item" data-value="Malware/Spyware Analysis">Malware/Spyware Analysis</div>
                              <div className="item" data-value="Risk Audit/Management">Risk Audit/Management</div>
                              <div className="item" data-value="Penetration Testing">Penetration Testing</div>
                              <div className="item" data-value="Penetration Testing">Other </div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label>Other Field</label>
                          <input type="number" name="industry_other" placeholder="Other Field" />
                        </div>
                      </div>
                      <div className="two fields">
                        <div className="field required">
                          <label>Product Stage</label>
                          <div className="ui selection dropdown" tabIndex={0}>
                            <input type="hidden" name="product_stage" data-validation="required" /><i className="dropdown icon" />
                            <div className="default text">Stage</div>
                            <div className="menu" tabIndex={-1}>
                              <div className="item" data-value="Concept">Concept</div>
                              <div className="item" data-value="Prototype">Prototype</div>
                              <div className="item" data-value="Early Stage">Early Stage</div>
                              <div className="item" data-value="First Users">First Users</div>
                              <div className="item" data-value="Growth">Growth</div>
                              <div className="item" data-value="Profitable">Profitable</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field required">
                        <label>Have you pitched to any investors before? If yes, list them and what the outcome was.</label>
                        <textarea name="product_investors" placeholder="Previous Investors" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                    </div>
                    <div className="title"><i className="dropdown icon" /> SECTION THREE: PITCH INFORMATION</div>
                    <div className="content active">
                      <div className="field required">
                        <label>Give a description of the key features of your product. (200 words)</label>
                        <textarea name="pitch_description" placeholder="Pitch Description" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                      <div className="field required">
                        <label>What problems do you aim to solve and how did you discover the gap? (200 words)</label>
                        <textarea name="pitch_problems" placeholder="Problems identified" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                      <div className="field required">
                        <label>How does your idea solve the problems listed above? (200 words)</label>
                        <textarea name="pitch_solutions" placeholder="Problems solutions" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                      <div className="field required">
                        <label>Who do you believe are your main competitors and what makes your product unique? (200 words)</label>
                        <textarea name="pitch_competitors" placeholder="Competitors" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                      <div className="field required">
                        <label>What are your expectations of our program? (200 words)</label>
                        <textarea name="pitch_expectations" placeholder="Expectations" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                      </div>
                      <div className="two fields">
                        <div className="field required">
                          <label>Upload your pitch deck - An overview of your product or company structure in PDF format.</label>
                          <div className="ui action input">
                            <input type="file" name="pitch_deck" id="pitch_deck" data-validation="required mime size" data-validation-allowing="pdf" data-validation-max-size="2M" />
                          </div>
                        </div>
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

export default IncubationApply
