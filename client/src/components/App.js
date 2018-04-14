import React from 'react';

// BrowserRouter - brains of react router...looks at url and changes components at given point in time
// Route - a rule from certain route to components
import { BrowserRouter, Route } from 'react-router-dom';

// dummy components
const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = () => {

    return (
      <div>
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