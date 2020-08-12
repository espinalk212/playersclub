import React from "react";
import "./players_bar.css";
import "../../reset.css";

class PlayersBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="logo">
          <h1 className="logo-label">PlayersClub</h1>
        </div>
        <div className="nav-bar">
          <h2 className="nav-btn">Home</h2>
          <h3 className="nav-btn">Sports</h3>
          <h4 className="nav-btn">Teams</h4>
          <input type="text" className="search" placeholder="Search"></input>
          <button
            onClick={() => this.props.openModal("signup")}
            className="nav-btn"
          >
            Become a Player!<i id="gear" className="fa fa-gear"></i>
          </button>

          <button onClick={() => this.props.logout()}>Log out bruh</button>
        </div>
      </>
    );
  }
}

export default PlayersBar;