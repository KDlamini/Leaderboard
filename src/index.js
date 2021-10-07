import addScore from './AddScore';
import recentScores from './recentScores';
import refresh from './refresh';
import { getScores, gameID } from './api';
import './style.css';

const loadTable = () => {
  window.onload = () => {
    getScores(gameID).then((scores) => recentScores(scores));
  };
};

addScore();
refresh();
loadTable();
