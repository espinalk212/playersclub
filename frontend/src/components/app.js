import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch , Route} from 'react-router-dom';
import HomePageContainer from './home/home_page_container';
import Modal from './modal/modal.jsx'
import PreferencesContainer from '../components/preferences/preferences_container'

const App = () => (
  <div>
    <Modal/>
    {/* <PreferencesContainer/> */}
    <Switch>
        <Route path='/' component={HomePageContainer} /> 
    </Switch>
  </div>
);

export default App;