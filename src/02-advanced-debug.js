
function numPointsScored(player){
  const game = gameObject();

  for (const teamKey in game){
    if (game[teamKey].players[player]){
      return game[teamKey].players[player].points
    }
  }
  return `${player} not found`;
}

function shoeSize(player){
  const game = gameObject()

  for (const teamKey in game){
    if (game[teamKey].players[player]){
      return game[teamKey].players[player].shoe
    }
  }
  return `${player} not found`
}

function teamColors(teamName){
  const game = gameObject()

  for (const teamKey in game){
    if (game[teamKey].teamName){
      return game[teamKey].colors
    }
  }
  return `${teamName} not found!`
}

function teamNames(){
  const game = gameObject()
  const teams = [];

  for (const teamKey in game){
    teams.push(game[teamKey].teamName)
  }
  return teams
}

function playerNumbers(teamName){
  const game = gameObject()
  
  for (const teamKey in game){
    if (game[teamKey].teamName === teamName){
      const team = game[teamKey]
      const jerseyNumbers = [];

      for (const playerName in team.players){
        jerseyNumbers.push(team.players[playerName].number)
      } 
      return jerseyNumbers
    }
  }
}

function playerStats(playerName){
  const game = gameObject();

  for (const teamKey in game){
    const player = game[teamKey].players[playerName];
    if (player){
      return player
    }
  }
  return `${playerName} not found!`
}
function bigShoeRebounds(){
  const game = gameObject();
  let playerWithLargestSize = null;
  let largestShoeSize = 0;

  for (const teamKey in game){
    const team = game[teamKey];
    for (const playerName in team.players){
      const player = team.players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestSize = player;
      }
    }
  }

  if (playerWithLargestSize){
    return playerWithLargestSize.rebounds
  } else {
    return "No player found with the largest shoe size."
  }
}