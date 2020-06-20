import React from 'react';
import './App.css';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Overview } from './overview/Overview';
import { Settings } from './settings/Settings';
import { Challenges } from './challenges/Challenges';
import { RoomReview } from './roomReview/RoomReview';
import { MyForest } from './myForest/MyForest';
import { Navigation } from './navigation/Navigation';
import Modal from 'react-modal';
import "./variables.css";

Modal.setAppElement('#root');

export default function App() {
  return (
    <div id="app" className="app">
      <HashRouter baseName="/">
          <Navigation/>
          <div className="app__content">
              <Switch>
                <Route path="/settings">
                    <Settings />
                  </Route>
                <Route path="/challenges">
                    <Challenges />
                </Route>
                <Route path="/room-review">
                    <RoomReview />
                  </Route>
                <Route path="/overview">
                    <Overview />
                  </Route>
                <Route path="/">
                    <MyForest />
                </Route>
              </Switch>
            </div>
        </HashRouter>
    </div>
  );
}
