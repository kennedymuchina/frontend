import React from 'react'

const PartnerApply = () => {
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
                  <h1 className="ui header section-header highlight">e.KRAAL PARTNERSHIP APPLICATION</h1>
                  <p className="p_banner">Apply to become a partner with e.KRAAL Innovation Hub.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments contact-container application_container">
            <div className="contact-form-column">
              <div className="ui container">
                <form className="ui large form application-form has-validation-callback" action="/partners/apply" method="POST" id="mentorshipApplicationForm">
                  <h3 className="application_form_title">APPLICATION FORM</h3>
                  <div className="ui styled form-accordion">
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
                        <label>Company Name</label>
                        <input type="text" name="company_name" placeholder="Phone Number" data-validation="custom" data-validation-regexp="^(0){1}(7(?:(?:[0-9][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$" />
                      </div>
                      <div className="field required">
                        <label>Company Email</label>
                        <input type="email" name="company_email" placeholder="Email Address" data-validation="email" />
                      </div>
                    </div>
                    <div className="two fields">
                      <div className="field required">
                        <label>Company Address</label>
                        <input type="text" name="company_address" placeholder="Address" data-validation="required" />
                      </div>
                      <div className="field required">
                        <label>Company Website</label>
                        <input type="text" name="company_website" placeholder="Website" data-validation="url" data-validation-optional="true" />
                      </div>
                    </div>
                    <div className="two fields">
                      <div className="field required">
                        <label>Company Sector</label>
                        <div className="ui selection dropdown" tabIndex={0}>
                          <input type="hidden" name="company_sector" data-validation="required" /><i className="dropdown icon" />
                          <div className="default text">Sector</div>
                          <div className="menu" tabIndex={-1}>
                            <div className="item" data-value="Application Security">Application Security</div>
                            <div className="item" data-value="Network Security">Network Security</div>
                            <div className="item" data-value="Mobile Security">Mobile Security</div>
                            <div className="item" data-value="Cloud Security">Cloud Security</div>
                            <div className="item" data-value="Malware/Spyware Analysis">Malware/Spyware Analysis</div>
                            <div className="item" data-value="Risk Audit/Management">Risk Audit/Management</div>
                            <div className="item" data-value="Penetration Testing">Penetration Testing</div>
                          </div>
                        </div>
                      </div>
                      <div className="field required">
                        <label>Company Size</label>
                        <div className="ui selection dropdown" tabIndex={0}>
                          <input type="hidden" name="company_size" /><i className="dropdown icon" />
                          <div className="default text">Size</div>
                          <div className="menu" tabIndex={-1}>
                            <div className="item" data-value="1 -10">1 -10</div>
                            <div className="item" data-value="11-50">11-50</div>
                            <div className="item" data-value="51-200">51-200</div>
                            <div className="item" data-value="201-1000">201-1000</div>
                            <div className="item" data-value="1000 or more">1000 or more</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field required">
                      <label>Prospects to partner with e.KRAAL.</label>
                      <textarea name="company_prospect" placeholder="What are your prospects in collaborating with ekraal?" data-validation="required length" data-validation-length="max750" defaultValue={""} />
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

export default PartnerApply
