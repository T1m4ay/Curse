// task1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (arr) {},
};

function task1() {
  const players1 = game.players[0];
  const players2 = game.players[1];
  for (let i = 0; i < players1.length; ++i) {
    if (i < 1) {
      console.log("Team 1:");
    }
    console.log(players1[i]);
  }
  for (let i = 0; i < players2.length; ++i) {
    if (i < 1) {
      console.log("Team 2:");
    }
    console.log(players2[i]);
  }
  // console.log(players1);
  // console.log(players2);

  const [gK1, ...fP1] = players1;
  const [gK2, ...fP2] = players2;
  for (let i = 0; i < players1.length - 1; ++i) {
    if (i < 1) {
      console.log("Goalkeeper team1: " + gK1);
      console.log("Other players team1:");
    }
    console.log(fP1[i]);
  }
  for (let i = 0; i < players2.length - 1; ++i) {
    if (i < 1) {
      console.log("Goalkeeper team2: " + gK2);
      console.log("Other players team2:");
    }
    console.log(fP2[i]);
  }
  // console.log(gK1, fP1);
  // console.log(gK2, fP2);
  const allPlayers = [...players1, ...players2];
  for (let i = 0; i < allPlayers.length; ++i) {
    if (i < 1) {
      console.log("All Players: ");
    }
    console.log(allPlayers[i]);
  }
  // console.log(allPlayers);

  const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
  for (let i = 0; i < players1Final.length; ++i) {
    if (i < 1) {
      console.log("Players Final: ");
    }
    console.log(players1Final[i]);
  }
  // console.log(players1Final);

  console.log(game.odds);
  const { team1, x: draw, team2 } = game.odds;
  console.log(team1, draw, team2);

  team1 < team2 && console.log("Team 1 win");
  team2 < team1 && console.log("Team 2 win");
}

// task2

function task2() {
  const scoredEntries = Object.entries(game.scored);
  // console.log(scoredEntries);

  for (const [goalNum, player] of scoredEntries) {
    console.log(`Goal ${Number(goalNum) + 1}: ${player}`);
  }

  const oddValues = Object.values(game.odds);
  // console.log(oddValues);

  let sum2 = 0;
  let avg2;
  for (const odd of oddValues) {
    sum2 += odd;
    avg2 = sum2 / oddValues.length;
  }
  console.log(`Odd sum: ${sum2}. Average Odd: ${Math.trunc(avg2)} ⚽`);

  const oddEntries = Object.entries(game.odds);
  console.log(oddEntries);

  for (const [team, oddValue] of oddEntries) {
    const teamStr = game[team] ? `victory ${game[team]}` : `Draw`;
    console.log(`Odd of ${teamStr}: ${oddValue}`);
  }

  const scorer = {};
  for (const player of game.scored) {
    scorer[player] ? scorer[player]++ : (scorer[player] = 1);
  }
  console.log(scorer);
}

// task3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

function task3() {
  const uniqueEvents = [...new Set(gameEvents.values())];
  console.log(uniqueEvents);

  gameEvents.delete(64);
  console.log(gameEvents);

  const eventsInGameTime = () => {
    const timeMatch = 90;
    let inGameTime = [];
    for (const [key] of gameEvents) {
      if (key <= timeMatch) inGameTime = [...inGameTime, key];
    }
    console.log(
      `An event happend, on average ${timeMatch / inGameTime.length} minutes`
    );
  };
  eventsInGameTime();

  const whichHalfTimeHappend = (mapArrays) => {
    for (const [key, value] of mapArrays) {
      key <= 45
        ? console.log(`[FIRST HALF] ${key}: ${value}`)
        : console.log(`[SECOND HALF] ${key}: ${value}`);
    }
  };

  whichHalfTimeHappend(gameEvents);
}

// task4

var textArea = document.getElementById("myTextarea");
function convertText() {
  text = textArea.value;
  let textAll = textArea.value;
  let index = textAll.indexOf("_");
  let words = text[index + 1].toUpperCase();
  let first = text.slice(0, index);
  let second = text.slice(index + 2);
  console.log(first + words + second + "✅");
}
