const gameCards = document.getElementById("gameCards");
const footer = document.getElementById("footerEnd")
const projectBtn = document.getElementById("projectBtn")
const popMenu = document.getElementById("popMenuCont")
const xBtn = document.getElementById("closeBtn")

let gamestotal = [
  { "gameName": "To the clouds [Beta]",
    "thumbnail": "https://tr.rbxcdn.com/180DAY-d3d22009c3833801045b7cd6cf56d2e8/352/352/Image/Png/noFilter",
    "link": "https://www.roblox.com/games/70421703883598/To-the-clouds-Beta-1-0"
  },
  { "gameName": "Run it [Unfinished]",
    "thumbnail": "https://t3.rbxcdn.com/180DAY-2556ccf774bda999220460aeda22dba8",
    "link": "https://www.roblox.com/games/97560273295895/Run-It" }
]
let initHeight = window.innerHeight;
let didChanged = true

gamestotal.map((item) => {
  let gameCard = document.createElement("button");
  let gameThumbnail = document.createElement("div");
  let gameTitle = document.createElement("div");
  //styles
  gameCard.className = "game-card green-glow";
  gameThumbnail.className = "game-thumbnail";
  gameTitle.className = "game-title";
  gameCard.tabIndex = 0
  gameCard.addEventListener('click', () => {
    window.open(item.link, item.gameName)
  });
  //Appending data from list
  gameTitle.innerHTML = item.gameName;
  gameThumbnail.style.backgroundImage = `url(${item.thumbnail})`;
  //Appending to parent
  gameCard.append(gameThumbnail);
  gameCard.append(gameTitle)
  gameCards.append(gameCard);
})

projectBtn.addEventListener('click', () => {
  popMenu.style.display = 'flex';
});
xBtn.addEventListener('click', () => {
  popMenu.style.display = 'none';
})
