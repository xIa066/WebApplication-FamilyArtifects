import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../login/authWrapper";

// import '../../styles/navbar.css'


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div id="top" className="navbar navbar-expand-lg navbar-dark fixed-top py-0" role="navigation">
            <Link className="navbar-brand" to="/"><strong>Bloodlines,</strong>Tales and Roots</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="nav navbar-nav ">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/create-artifact">Create Artifact</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/my-artifacts">My Artifacts</Link></li>
                <li className="nav-item nav-link" onMouseDown={()=> logout()}>Logout</li>
              </ul>
            </div>
      </div>
      )}


      {!isAuthenticated && (
        <div id="top" className="navbar navbar-expand-lg navbar-dark fixed-top py-0" role="navigation">
          <div className="container">
            <Link className="navbar-brand" to="/"><strong>Bloodlines,</strong>Tales and Roots</Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <ul className="nav navbar-nav ">
                <li className="nav-item nav-link" onMouseDown={()=> loginWithRedirect({})}>Login</li>
              </ul>
            </div>
        </div>
      </div>
      )}

    </>
  );
};

export default NavBar;
