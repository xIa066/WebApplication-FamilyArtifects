import React from 'react';
import { Router, Route } from 'react-router-dom';

// page imports
import CreateArtifactPage from './pages/CreateArtifactPage';
import ArtifactsListPage from './pages/ArtifactsListPage';
import ArtifactPage from './pages/ArtifactPage';
import history from './history';
import HomePage from './pages/HomePage';
import EditArtifactPage from './pages/EditArtifactPage';
import MyFamiliesPage from './pages/MyFamiliesPage';
import CreateFamilyPage from './pages/CreateFamilyPage';

// import './index.css';
import './styles/style.css';
import UpdateUserPage from './pages/UpdateUserPage';


class App extends React.Component {
   render(){
     return(
      <Router history={history}>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/families" exact component={MyFamiliesPage} />
          <Route path="/create-family" component={CreateFamilyPage} />
          <Route path="/update-user" exact component={UpdateUserPage} />
          <Route path="/create-artifact" component={CreateArtifactPage} />
          <Route path="/artifacts" exact component={ArtifactsListPage} />
          <Route path="/artifacts/view/:id" exact render={({match}) => (<ArtifactPage id={match.params.id}/>)} />
          <Route path="/artifacts/edit/:id" exact component={EditArtifactPage} />
        </div>
      </Router>
     );
   }
}

export default App;
