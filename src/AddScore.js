import { saveToApi, gameID } from './api';

const addScore = () => {
  const addForm = document.querySelector('.add-form');
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  addForm.addEventListener('submit', () => {
    saveToApi(gameID, name.value, score.value);
  });
};

export default addScore;
