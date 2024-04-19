// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(
      function (match) { return match.toLowerCase() === string.toLowerCase()
    });
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(
      function(Match) { return Match.toLowerCase().indexOf(letter.toLowerCase()) === 0
    });
}

function matchName(drivers, Name) {
    return drivers.filter(
        function(record) { return record.name === Name});
}
