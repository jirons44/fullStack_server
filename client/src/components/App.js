import React from 'react';

// BrowserRouter - brains of react router...looks at url and changes components at given point in time
// Route - a rule from certain route to components
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

// dummy components
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = () => {

    return (
      <div className="container">
          <BrowserRouter>
              <div>
                  <Header />
                  <Route exact path="/" component={ Landing } />
                  <Route exact path="/surveys" component={ Dashboard } />
                  <Route path="/surveys/new" component={ SurveyNew} />
              </div>
          </BrowserRouter>
      </div>
    );
};

export default App;