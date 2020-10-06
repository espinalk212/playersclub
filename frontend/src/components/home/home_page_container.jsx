import {connect} from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import {logout} from '../../actions/session_actions';
import HomePage from './home_page.jsx';
import { fetchArticles } from '../../actions/article_actions'
import { fetchGameScore, fetchGameSchedule } from '../../actions/sport_actions';
import keys from "../../config/src_keys"

// const {
//   MLBTrial,
//   MLBkey,
//   NBATrial,
//   NBAkey,
//   NHLTrial,
//   NHLkey,
//   articleKey,
// } = keys;

const msp = state => ({

  mlb: state.sports.mlb,
  nba: state.sports.nba,
  nhl: state.sports.nhl,
  sports: state.sports,
  currentUser: state.session.isAuthenticated,
  user: state.session.user,
  articles: state.articles
});



const mdp = (dispatch) =>  {
  return {
  openModal: (modal) => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  fetchGameScore: (sportTrial, event_id, key) => dispatch(fetchGameScore(sportTrial, event_id, key)),
  mlbScheduleObj: date => dispatch(fetchGameSchedule('mlb', date, keys.MLBkey)),
  nbaScheduleObj: date => dispatch(fetchGameSchedule('nba', date, keys.NBAkey)),
  nhlScheduleObj: date => dispatch(fetchGameSchedule('nhl', date, keys.NHLkey)),
  fetchArticles: () => dispatch(fetchArticles(keys.articleKey)),
}};

export default connect(msp, mdp)(HomePage);
