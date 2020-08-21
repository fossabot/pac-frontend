import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Pages
import Events from './components/events/Events'
import EventDetails from './components/events/EventDetails'
import Speakers from './components/speakers/Speakers'
import SpeakerDetails from './components/speakers/SpeakerDetails';
import TalkDetails from './components/talks/TalkDetails';
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
                    <Route path="/talkDetails/:id" children={TalkDetails}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
