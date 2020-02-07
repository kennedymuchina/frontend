import React from 'react';
import './css/sass/style.scss';
import Home from './containers/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header';
import Footer from './components/Footer';
import Programs from './containers/Programs';
import Events from './containers/Events';
import Partners from './containers/Partners';
import About from './containers/About';
import Contact from './containers/Contact';
import Training from './containers/Training';
import News from './containers/News';
import Eccouncil from './containers/Eccouncil';
import IncubationApply from './containers/IncubationApply';
import MentorshipApply from './containers/MentorshipApply';
import Cohort_one from './containers/Cohort_one';
import PrivacyPolicy from './containers/PrivacyPolicy';
import Event from './containers/Event';
import EventApply from './containers/EventApply';
import PartnerApply from './containers/PartnerApply';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path='/' exact component={Home} />
        <Switch>
          {/* Main Navigation header pages  */}
          <Route path='/training' exact component={Training} />
          <Route path='/ec-council' exact component={Eccouncil} />
          <Route path='/program' exact component={Programs} />
          <Route path='/events' exact component={Events} />
          <Route path='/partners' exact component={Partners} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/news' exact component={News} />

          {/* Other pages */}
          <Route path='/program/incubation/apply' exact component={IncubationApply} />
          <Route path='/program/mentorship/apply' exact component={MentorshipApply} />
          <Route path='/program/training/cohort_1' exact component={Cohort_one} />
          <Route path='/events/event' exact component={Event} />
          <Route path='/partners/apply' exact component={PartnerApply} />
          <Route path='/events/apply' exact component={EventApply} />
          <Route path='/privacy' exact component={PrivacyPolicy} />

        </Switch>  
        <Footer />
      </div>
    </Router>
  );
}

export default App;
