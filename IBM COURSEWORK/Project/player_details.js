const players = [
    {id: " ", name: " ", age: " ", position: "Manager"},
    {id: 1, name: 'Emillano MArtinez', age: 30, position: "GK", foot: "Left", club: "Aston Villa"},
    {id: 2, name: 'Juan Foyth', age: 27, position: "RB", foot: "Right", club: "Lyon"},
    {id: 3, name: 'Nocolas Tagliafico', age: 40, position: "ST", foot: "Left", club: "Lyon"},
    {id: 7, name: 'Rodrigo De Paul', age: 37, position: "FW", foot: "Right", club: "Inter Miami"},
    {id: 9, name: 'Julian Alvarez', age: 25, position: "ST", foot: "Right", club: "Athletic Madrid"},
    {id: 10, name: 'Lionel Messi', age: 38, position: "MF", foot: "Left Footed", club: "Inter Miami"},
    {id: 11, name: 'Angel Di Maria', age: 37, position: "ST", foot: "Left Footed", Club: "Retired"},
];

function displayPlayers() {
    const totalPlayers = players
        .map(player => `<p>${player.id}: ${player.name} - ${player.position} - ${player.foot} - ${player.club}</p>`)
        .join('');
    document.getElementById('playersDetails').innerHTML = totalPlayers;
}

function displayStriker() {
    const StrikerPlayers = players.filter(player => player.position === 'ST');
    const StrikerPlayersDisplay = StrikerPlayers.map((player, index) => `<p>${player.id}: ${player.name}: ${player.position}</p>`).join('');
    document.getElementById('playersDetails').innerHTML = StrikerPlayersDisplay;
}

function displayMidfield() {
    const MidfieldPlayers = players.filter(player => player.position === 'MF');
    const MidfieldPlayersDisplay = MidfieldPlayers.map((player, index) => `<p>${player.id}: ${player.name}: ${player.position}</p>`).join('');
    document.getElementById('playersDetails').innerHTML = MidfieldPlayersDisplay;
}

function displayDefense() {
    const DefensePlayers = players.filter(player => player.position === 'D');
    const DefensePlayersDisplay = DefensePlayers.map((player, index) => `<p>${player.id}: ${player.name}: ${player.position}</p>`).join('');
    document.getElementById('playersDetails').innerHTML = DefensePlayersDisplay;
}
function displayGoalies() {
    const GoalPlayers = players.filter(player => player.position === 'GK');
    const GoalPlayersDisplay = GoalPlayers.map((player, index) => `<p>${player.id}: ${player.name}: ${player.position}</p>`).join('');
    document.getElementById('playersDetails').innerHTML = GoalPlayersDisplay;
}

function findPlayerId(playerId) {
    const foundPlayer = players.find(player => player.id === playerId);
    if (foundPlayer) {
        document.getElementById(`playersDetails`).innerHTML = `<p>${foundPlayer.id}: ${foundPlayer.name}: ${foundPlayer.name} - ${foundPlayer.position}</p>`;
    } else {
        document.getElementById(`playersDetails`).innerHTML = 'No player has this number';
    }
}


