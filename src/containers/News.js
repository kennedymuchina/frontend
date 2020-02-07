import React from 'react'

const News = () => {
  return (
    <div className="pusher">
        <div className="inner">
          <div className="flash-messages" />
        </div>
        <div id="content">
          <div className="ui segment partners-container">
            <div className="ui container">
              <div className="ui grid info-grid">
                <div className="eight wide computer sixteen wide mobile column">
                  <h1 className="ui header section-header highlight">NEWS AND FEATURES</h1></div>
              </div>
            </div>
            <div className="ui container margin-top-30">
              <div className="ui three doubling stackable cards news-cards">
                <a className="ui card" href="https://medium.com/@innovate.ekraal/cyber-security-catching-up-35b7743475?source=rss-e7da31e3f6f------2" target="_blank" rel="noopener noreferrer">
                  <div className="image">
                    <figure><img className="lozad" src="https://cdn-images-1.medium.com/max/1024/1*uB96VXPnGA6N_UZKq6wTeA.jpeg" alt="Cyber Security — Catching up" /></figure>
                  </div>
                  <div className="content">
                    <div className="header">
                      <div className="meta"><span className="date">17/03/2019</span></div>
                    </div>
                    <div className="paragraph">
                      <div className="short line">Cyber Security — Catching up</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="ui segment page-segment home-segments alumni-container medium_container">
            <div className="ui container become_container event_host">
              <h2 className="center">Check out more news from our medium blog</h2>
              <div className="button_container"><a className="ui button medium-button" href="https://medium.com/@innovate.ekraal" rel="noopener noreferrer" target="_blank">BLOG →</a></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default News
