import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Events from './components/events/Events'
import EventDetails from './components/events/EventDetails'
import Speakers from './components/speakers/Speakers'
import SpeakerDetails from './components/speakers/SpeakerDetails';
import TalkDetailsProtected from './components/talks/TalkDetailsProtected';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

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
                    <Route path="/talkDetails/:id" component={TalkDetailsProtected}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
