const recentScores = (scoreData) => {
  const table = document.querySelector('.scoreboard-table');

  scoreData.forEach((data) => {
    const tr = document.createElement('tr');
    tr.className = 'table-row';
    const td = document.createElement('td');
    td.className = 'table-data';
    td.innerHTML = `${data.user}: ${data.score}`;

    tr.appendChild(td);
    table.appendChild(tr);
  });
};

export default recentScores;