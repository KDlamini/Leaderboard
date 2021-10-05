import _ from 'lodash';
import './style.css';

const scoreData = [
  {name: "name", score: 100,},
  {name: "name", score: 100,},
  {name: "name", score: 100,},
  {name: "name", score: 100,},
  {name: "name", score: 100,},
  {name: "name", score: 100,},
]

function loadTable() {
  const table = document.querySelector('.scoreboard-table');

  scoreData.forEach((data) => {
    const tr = document.createElement('tr');
    tr.className = 'table-row';
    const td = document.createElement('td');
    td.className = 'table-data';
    td.innerHTML = `${data.name}: ${data.score}`;

    tr.appendChild(td);
    table.appendChild(tr);
  });
}

loadTable();