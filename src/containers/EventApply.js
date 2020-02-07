import React from 'react'

const EventApply = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui-calendar/0.0.8/calendar.min.css" />
          <div className="ui segment page-segment home-segments contact-container">
            <div className="contact-form-column">
              <div className="ui container margin-top-30">
                <form className="ui large form pad-top-30 pad-bottom-30 contact-form has-validation-callback" action="/events/apply/host" method="POST" id="addEventForm">
                  <h1 className="highlight-fade">EVENT APPLICATION</h1>
                  <h3>EVENT DETAILS</h3>
                  <div className="two fields">
                    <div className="field required">
                      <label>Event Title</label>
                      <input type="text" name="title" placeholder="Event Title" data-validation="length" data-validation-length="3-15" />
                    </div>
                    <div className="field required">
                      <label>Event Organizer</label>
                      <input type="text" name="organizer" placeholder="Organizer" data-validation="length" data-validation-length="3-15" />
                    </div>
                  </div>
                  <div className="two fields">
                    <div className="field required ui calendar" id="start_date_input">
                      <div className="ui popup calendar">
                        <table className="ui celled center aligned unstackable table seven column day">
                          <thead>
                            <tr>
                              <th colSpan={7}><span className="link">February 2020</span><span className="prev link"><i className="chevron left icon" /></span><span className="next link"><i className="chevron right icon" /></span></th>
                            </tr>
                            <tr>
                              <th>S</th>
                              <th>M</th>
                              <th>T</th>
                              <th>W</th>
                              <th>T</th>
                              <th>F</th>
                              <th>S</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="link adjacent disabled">26</td>
                              <td className="link adjacent disabled">27</td>
                              <td className="link adjacent disabled">28</td>
                              <td className="link adjacent disabled">29</td>
                              <td className="link adjacent disabled">30</td>
                              <td className="link adjacent disabled">31</td>
                              <td className="link">1</td>
                            </tr>
                            <tr>
                              <td className="link">2</td>
                              <td className="link">3</td>
                              <td className="link">4</td>
                              <td className="link">5</td>
                              <td className="link">6</td>
                              <td className="link today focus">7</td>
                              <td className="link">8</td>
                            </tr>
                            <tr>
                              <td className="link">9</td>
                              <td className="link">10</td>
                              <td className="link">11</td>
                              <td className="link">12</td>
                              <td className="link">13</td>
                              <td className="link">14</td>
                              <td className="link">15</td>
                            </tr>
                            <tr>
                              <td className="link">16</td>
                              <td className="link">17</td>
                              <td className="link">18</td>
                              <td className="link">19</td>
                              <td className="link">20</td>
                              <td className="link">21</td>
                              <td className="link">22</td>
                            </tr>
                            <tr>
                              <td className="link">23</td>
                              <td className="link">24</td>
                              <td className="link">25</td>
                              <td className="link">26</td>
                              <td className="link">27</td>
                              <td className="link">28</td>
                              <td className="link">29</td>
                            </tr>
                            <tr>
                              <td className="link adjacent disabled">1</td>
                              <td className="link adjacent disabled">2</td>
                              <td className="link adjacent disabled">3</td>
                              <td className="link adjacent disabled">4</td>
                              <td className="link adjacent disabled">5</td>
                              <td className="link adjacent disabled">6</td>
                              <td className="link adjacent disabled">7</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <label>Start Date/Time</label>
                      <input type="text" name="start_date" placeholder="Start Date/Time" data-validation="required" />
                    </div>
                    <div className="field required ui calendar" id="end_date_input">
                      <div className="ui popup calendar">
                        <table className="ui celled center aligned unstackable table seven column day">
                          <thead>
                            <tr>
                              <th colSpan={7}><span className="link">February 2020</span><span className="prev link"><i className="chevron left icon" /></span><span className="next link"><i className="chevron right icon" /></span></th>
                            </tr>
                            <tr>
                              <th>S</th>
                              <th>M</th>
                              <th>T</th>
                              <th>W</th>
                              <th>T</th>
                              <th>F</th>
                              <th>S</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="link adjacent disabled">26</td>
                              <td className="link adjacent disabled">27</td>
                              <td className="link adjacent disabled">28</td>
                              <td className="link adjacent disabled">29</td>
                              <td className="link adjacent disabled">30</td>
                              <td className="link adjacent disabled">31</td>
                              <td className="link">1</td>
                            </tr>
                            <tr>
                              <td className="link">2</td>
                              <td className="link">3</td>
                              <td className="link">4</td>
                              <td className="link">5</td>
                              <td className="link">6</td>
                              <td className="link today focus">7</td>
                              <td className="link">8</td>
                            </tr>
                            <tr>
                              <td className="link">9</td>
                              <td className="link">10</td>
                              <td className="link">11</td>
                              <td className="link">12</td>
                              <td className="link">13</td>
                              <td className="link">14</td>
                              <td className="link">15</td>
                            </tr>
                            <tr>
                              <td className="link">16</td>
                              <td className="link">17</td>
                              <td className="link">18</td>
                              <td className="link">19</td>
                              <td className="link">20</td>
                              <td className="link">21</td>
                              <td className="link">22</td>
                            </tr>
                            <tr>
                              <td className="link">23</td>
                              <td className="link">24</td>
                              <td className="link">25</td>
                              <td className="link">26</td>
                              <td className="link">27</td>
                              <td className="link">28</td>
                              <td className="link">29</td>
                            </tr>
                            <tr>
                              <td className="link adjacent disabled">1</td>
                              <td className="link adjacent disabled">2</td>
                              <td className="link adjacent disabled">3</td>
                              <td className="link adjacent disabled">4</td>
                              <td className="link adjacent disabled">5</td>
                              <td className="link adjacent disabled">6</td>
                              <td className="link adjacent disabled">7</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <label>End Date/Time</label>
                      <input type="text" name="end_date" placeholder="End Date/Time" data-validation="required" />
                    </div>
                  </div>
                  <div className="field required">
                    <label>Event Description</label>
                    <textarea name="description" placeholder="Description" data-validation="required length" data-validation-length="max750" defaultValue={""} />
                  </div>
                  <div className="two fields">
                    <div className="field required">
                      <label>Event Fee (0 for Free)</label>
                      <input type="number" name="fee" placeholder="KES" data-validation="number required" />
                    </div>
                    <div className="field required">
                      <label>Event Capacity</label>
                      <input type="text" name="capacity" placeholder="Number of people to attend event" data-validation="number required" />
                    </div>
                  </div>
                  <h3>CATERING</h3>
                  <div className="two fields">
                    <div className="field required">
                      <div className="ui checkbox">
                        <input className="hidden" type="checkbox" tabIndex={0} name="catering" data-validation="required" />
                        <label>Will you require catering?</label>
                      </div>
                    </div>
                    <div className="field required">
                      <label>No of people to cater for</label>
                      <input type="number" name="catering_number" placeholder="People to cater for" data-validation="required number" />
                    </div>
                  </div>
                  <h3>CONTACT DETAILS</h3>
                  <div className="two fields">
                    <div className="field required">
                      <label>Name</label>
                      <input type="text" name="contact_name" placeholder="Name" data-validation="length" data-validation-length="3-15" />
                    </div>
                    <div className="field required">
                      <label>Company</label>
                      <input type="text" name="contact_company" placeholder="Company" data-validation="length" data-validation-length="3-15" />
                    </div>
                  </div>
                  <div className="two fields">
                    <div className="field required">
                      <label>Email</label>
                      <input type="email" name="contact_email" placeholder="Email" data-validation="email" />
                    </div>
                    <div className="field required">
                      <label>Phone Number</label>
                      <input type="text" name="contact_number" placeholder="Phone Number" data-validation="custom" data-validation-regexp="^(0){1}(7(?:(?:[0-9][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$" />
                    </div>
                  </div>
                  <input className="ui submit button" type="submit" defaultValue="Apply →" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EventApply
