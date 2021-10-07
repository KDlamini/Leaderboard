const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

export const createGame = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: 'newGame',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    const gameID = json.result.split(' ')[3];
    localStorage.setItem('gameID', JSON.stringify(gameID));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const gameID = async () => {
  await createGame();
  const gameId = JSON.parse(localStorage.getItem('gameID'));

  return gameId;
};

export const saveToApi = async (gameID, user, score) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID()}/scores`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getScores = async (gameID) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID()}/scores`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error(error.message);
  }
};