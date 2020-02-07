import React from 'react'
// import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui segment partners-container contact-container">
            <div className="ui container">
              <div className="ui grid">
                <div className="eight wide computer sixteen wide mobile column">
                  <h1 className="ui header section-header highlight">CONTACT</h1></div>
              </div>
            </div>
            <div className="ui container">
              <div className="ui container">
                <div className="ui stackable two column grid">
                  <div className="seven wide column contact-details">
                    <h1>Send us a message</h1>
                    <p>We'd like to hear from you. In case of any inquiries reach us through the contact details below.</p>
                    <h2 className="header">CONTACT DETAILS</h2>
                    <div className="location contact-details-info"><i className="icon map marker" />
                      <div className="ul contact-details-info-list">
                        <li>e.KRAAL Innovation Hub</li>
                        <li>Emani Business Park,</li>
                        <li>Ext 3, Thika Road.</li>
                        <li>Nairobi, Kenya.</li>
                      </div>
                    </div>
                    <div className="location contact-details-info"><i className="icon envelope" />
                      <div className="ul contact-details-info-list">
                        <li>innovate(at)e-kraal.com</li>
                      </div>
                    </div>
                    <p>For enquiries about our training program contact us at:</p>
                    <div className="location contact-details-info"><i className="icon envelope" />
                      <div className="ul contact-details-info-list">
                        <li>training(at)e-kraal.com</li>
                      </div>
                    </div>
                    <ul className="social-icons-grid"><a className="social-item" href="https://www.facebook.com/ekraalhub/" rel="noopener noreferrer" target="_blank"><i className="facebook icon" /></a><a className="social-item" href="https://twitter.com/ekraal_" rel="noopener noreferrer" target="_blank"><i className="twitter icon" /></a><a className="social-item" href="https://www.linkedin.com/company/e-kraal-innovation-hub" rel="noopener noreferrer" target="_blank"><i className="linkedin icon" /></a><a className="social-item" href="https://medium.com/@innovate.ekraal" rel="noopener noreferrer" target="_blank"><i className="medium icon" /></a></ul>
                  </div>
                  <div className="nine wide column submit_email_form">
                    <div className="flash-messages hidden">
                      <div className="flash flash--success">
                        <p className="flash__text">YOUR MESSAGE WAS SUCCESFULLY SUBMITTED!</p>
                      <button className="flash__remove" /*onClick={this.parentElement.remove()}*/>×</button>
                      </div>
                    </div>
                    <div className="contact-form-column">
                      <div className="ui container">
                        <form className="ui large form pad-bottom-30 contact-form email-form has-validation-callback" method="POST" action="/api/email/submit">
                          <div className="inline field required">
                            <input type="text" id="name" name="name" placeholder="Your Name" data-validation="length" data-validation-length="2-30" />
                          </div>
                          <div className="inline field required">
                            <input type="email" id="email" placeholder="Email" name="email" data-validation="email" />
                          </div>
                          <div className="inline field required">
                            <input type="text" id="subject" name="subject" placeholder="Subject" data-validation="length" data-validation-length="5-50" />
                          </div>
                          <div className="inline field required">
                            <textarea name="message" id="message" placeholder="Leave your message here" data-validation="required length" data-validation-length="max200" defaultValue={""} />
                          </div>
                          <div className="g-recaptcha" data-validation="recaptcha" data-sitekey="6LfFZM0UAAAAANb5E8ZnMcS5xjFuDAc-wD3VWFff">
                            <div style={{width: '304px', height: '78px'}}>
                              <div>
                                <iframe title="First Iframe" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfFZM0UAAAAANb5E8ZnMcS5xjFuDAc-wD3VWFff&co=aHR0cHM6Ly9lLWtyYWFsLmNvbTo0NDM.&hl=en&v=TYDIjJAqCk6g335bFk3AjlC3&size=normal&cb=f9q8rw5ovmsw" width={304} height={78} role="presentation" name="a-nestxq3h353c" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" />
                              </div>
                              <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}} defaultValue={""} />
                            </div>
                          </div><span id="captcha" style={{marginLeft: '100px', color: 'red'}} />
                          <br />
                          <input className="ui submit button" id="submit_email" type="submit" defaultValue="SUBMIT" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="nine wide column submitted_email"><i className="icon window close outline window_close" />
                    <div className="contact-form-column">
                      <div className="ui container margin-top-30">
                        <h1 className="highlight-fade">THANK YOU, YOUR MESSAGE HAS BEEN SUBMITTED. WE WILL GET BACK TO YOU SOON</h1></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments contact-container">
            <div className="ui container-fluid map-responsive">
              <iframe title="Second Iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8442681357546!2d36.83174195086009!3d-1.2660796359583226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f174042ae8f41%3A0x5582248cc8c3238e!2sEkraal+Innovation+Hub!5e0!3m2!1sen!2ske!4v1554362656261!5m2!1sen!2ske" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
