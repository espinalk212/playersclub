import React from "react";
import "./home_page.css";
import "../../reset.css";
import PlayersBar from "../players_bar/players_bar";
import Footer from "../footer/footer";
import Article from "../article/article";
import Score from "../score/score";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.getTodaysDate = this.getTodaysDate.bind(this);
  }

  componentDidMount() {
    this.props.mlbScheduleObj("mlb").then(() =>
      this.props.sports.mlb.sports.map((game, idx) => {
        setTimeout(() => {
          this.props.fetchGameScore("mlb", game.id);
        }, 1000 * idx);
      })
    );
    this.props.nhlScheduleObj("nhl").then(() =>
      this.props.sports.nhl.sports.map((game, idx) => {
        setTimeout(() => {
          this.props.fetchGameScore("nhl", game.id);
        }, 1500 * idx);
      })
    );
    this.props.nbaScheduleObj("nba").then(() =>
      this.props.sports.nba.sports.map((game, idx) => {
        setTimeout(() => {
          this.props.fetchGameScore("nba", game.id);
        }, 2000 * idx);
      })
    );
    this.props.nflScheduleObj("nfl").then(() =>
      this.props.sports.nfl.sports.map((game, idx) => {
        setTimeout(() => {
          this.props.fetchGameScore("nfl", game.id);
        }, 2500 * idx);
      })
    );
  }

  getTodaysDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    return (today = yyyy + "/" + mm + "/" + dd);
  }

  render() {
    return (
      <div>
        <div className="homepage-container">
          <div className="homepage-background">
            <PlayersBar
              openModal={this.props.openModal}
              logout={this.props.logout}
              currentUser={this.props.currentUser}
              user={this.props.user}
            />
            <div className="information-container">
              <Article
                fetchArticles={this.props.fetchArticles}
                articles={this.props.articles}
              />
              {this.props.sports.mlb.sport.length !== 0 ||
              this.props.sports.nba.sport.length !== 0 ||
              this.props.sports.nfl.sport.length !== 0 ||
              this.props.sports.nhl.sport.length !== 0 ? (
                <Score
                  sports={this.props.sports}
                  fetchGameScore={this.props.fetchGameScore}
                />
              ) : null}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
