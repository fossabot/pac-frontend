import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Pages
import Events from './components/pages/Events'
import EventDetails from './components/pages/EventDetails'
import Speakers from './components/pages/Speakers'
import Contacts from './components/pages/Contacts';
import TalkDetails from './components/pages/TalkDetails';
import SpeakerDetails from './components/pages/SpeakerDetails';
// Layouts
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
// React Router Import
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Events}/>
                    <Route path="/eventDetails/:id" children={EventDetails}/>
                    <Route path="/speakers" component={Speakers}/>
                    <Route path="/speakerDetails/:id" children={SpeakerDetails}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/talkDetails/:id" children={TalkDetails}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
