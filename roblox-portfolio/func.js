const gameCards = document.getElementById("gameCards");

let gamestotal = [
  { "gameName": "Run it [Unfinished]", "thumbnail": "https://t3.rbxcdn.com/180DAY-2556ccf774bda999220460aeda22dba8" }
]

gamestotal.map((item) => {
  let gameCard = document.createElement("div");
  let gameThumbnail = document.createElement("div");
  let gameTitle = document.createElement("div");
  //styles
  gameCard.className = "game-card green-glow";
  gameThumbnail.className = "game-thumbnail";
  gameTitle.className = "game-title";
  //Appending data from list
  gameTitle.innerHTML = item.gameName;
  gameThumbnail.style.backgroundImage = `url(${item.thumbnail})`;
  //Appending to parent
  gameCard.append(gameThumbnail);
  gameCard.append(gameTitle)
  gameCards.append(gameCard);
})
