const program = require('../../Algorithms/Arrays/tournamentWinner');
const expect = require('chai').expect;

// Case #1 from sample
it('Test Case #1', function () {
  const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML']
  ];
  const results = [0, 0, 1];
  const expected = 'Python';
  expect(program.tournamentWinner(competitions, results)).to.deep.equal(expected);
});

// Case with just two teams
it('Test Case #2', function () {
    const competitions = [
      ['A', 'B'],
    ];
    const results = [0];
    const expected = 'B';
    expect(program.tournamentWinner(competitions, results)).to.deep.equal(expected);
});

// Case from sample slightly modified
it('Test Case #3', function () {
    const competitions = [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML']
    ];
    const results = [0, 1, 1];
    const expected = 'C#';
    expect(program.tournamentWinner(competitions, results)).to.deep.equal(expected);
});

// Case with larger tournament
it('Test Case #3', function () {
    const competitions = [
        ["A", "B"],
        ["B", "C"],
        ["C", "A"],
        ["D", "C"],
        ["B", "D"],
        ["D", "A"],
        ["E", "D"],
        ["A", "E"],
        ["E", "C"],
        ["E", "B"]
      ];
      const results = [0, 0, 0, 0, 0, 0, 1, 0, 1, 1];
      const expected = 'E';
    expect(program.tournamentWinner(competitions, results)).to.deep.equal(expected);
});