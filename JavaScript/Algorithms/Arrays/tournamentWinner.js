/* There's an algorithms tournament taking place in which teams of programmers
compete against each other to solve algorithmic problems as fast as possible. 
Teams compete in a round robin, where each team faces off against all other 
teams. Only two teams compete against each other at a time, and for each 
competition, one team is designated the home team, while the other team is the 
away team. In each competition there's always one winner and one loser; there 
are no ties. A team receives 3 points if it wins and 0 points if it loses. 
The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each 
other and an array containing the results of each competition, write a function 
that returns the winner of the tournament. The input arrays are named competitions
and results, respectively. The competitions array has elements in the form 
of [homeTeam, away Team], where each team is a string of at most 30 characters 
representing the name of the team. The results array contains information about 
the winner of each corresponding competition in the competitions array. 
Specifically, results[i] denotes the winner of competitions[i] , where a 1 in the
results array means that the home team in the corresponding competition won and 
a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team 
will compete against all other teams exactly once. It's also guaranteed that the 
tournament will always have at least two teams. 

Sample Input
competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
]
results = [0, 0, 1]

Sample Output
"Python" */

/* Solution
Using a hash table, continually increment score for each game in the competitions.
Keep track of the current best team, initialized to "" and 0 in the hash table,
and update with a conditional after each game.

O(n) time | O(k) space, where n is the number of games, and k is number of teams*/

function tournamentWinner(competitions, results) {
  const HOME_TEAM_WINS = 1;
  let currentBestTeam = '';
  let scores = {[currentBestTeam] : 0};

  for (let i = 0; i < competitions.length; i++) {
    let result = results[i];
    let [homeTeam, awayTeam] = competitions[i];

    const winner = result === HOME_TEAM_WINS ? homeTeam : awayTeam;

    updateScores(winner, scores, 3);

    if (scores[winner] > scores[currentBestTeam]) {
      currentBestTeam = winner;
    }
  }

  return currentBestTeam;
}

function updateScores(team, scores, points) {
  if (!(team in scores)) {
    scores[team] = 0;
  }

  scores[team] += points;
}

exports.tournamentWinner = tournamentWinner;
