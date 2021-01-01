
interface IProject {
  description: string;
  image: string;
  name: string;
  androidVLink: string;
  sourceCode: string;
  tools: string;
  url: string;
}

export const projects: IProject[] = [
  {
    description:
      "'Chatterbox' is a responsive web app that assists its users. It lets you know what the weather is like right now, generates you a random password for better security, remind you on events like Christmas, New Year's Eve, New Year's Day, and your birthday. It also helps you schedule your day or week, take notes; has built-in calculator, calendar/ appointments scheduler, currency converter, stopwatch, BMI Calculator, Unit Converter, Habit Tracker, Mortgage Calculator, Expense Tracker, Meal finder, Calories Tracker, Net worth Tracker, MyBookList, Movies' & TV series' cast & ratings' database, an app that motivates, lyrics-plus-encyclopedia app, recipes app, book reader, some fun games to kill your boredom, and whatnot. A simple app with multiple built-in tools!",
    image: "meal to list",
    name: "Chatterbox",
    androidVLink: "about:blank",
    sourceCode: "https://github.com/Abbaskhurram255/Chatterbox/",
    tools: "Vanilla JavaScript, React, HTML, CSS, SCSS, JQuery, Git",
    url: "https://abbaskhurram255.github.io/Chatterbox/getting-started"
  },
  {
    description:
      "The Maze is a game of challenging mazes. The game has 5 difficulty levels, and each of them has infinite mazes and stages. So, this means that the game has no repeating mazes! Well, let's see if you can beat the computer",
    image: "maze",
    name: "The Maze",
    androidVLink: "https://github.com/Abbaskhurram255/maze/raw/main/public/android/the-maze.apk?raw=true",
    sourceCode: "https://github.com/Abbaskhurram255/maze/",
    tools: "TS.React, HTML, SCSS",
    url: "https://alexs-maze-game.netlify.app"
  },
  {
    description:
      "Want to build a new habit? Orchards makes it easy! Grow forth by completing your daily goals with this minimal habit tracker. Install the app, submit the habit(s) you want to build or goal(s) you want to reach, and mark the goal as done every day you reach it... And voila!",<div class="App"><header class="App-header" style="background:teal;color:white"><div class="justify-center"><section class="top-bar width-wrapper justify-space-between"><h1>Daily Goals</h1><div><button class="App-button" style="background:#aa2840;color:#fff">New Goal</button></div></section></div><section class="justify-center NewGoalModal displayNone" style="background:transparent"><form class="width-wrapper" autocomplete="off"><label for="title">Goal Title</label><input id="title" placeholder="New Goal..." value=""><button class="App-button">Add</button></form></section></header><main class="justify-center"><div class="GoalList width-wrapper justify-center"><article data-index="0" class="width-wrapper GoalItem "><header style="background-color: #2dd9d0;"><h2>Don't Eat Your Shit</h2><div><button class="App-button" data-index="0">Done</button></div></header><footer><div class="justify-space-between"><svg class="drag-icon drag-handle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg><p class="streak">1 Day</p></div><div><button data-index="0">Remove</button></div></footer></article></div></main></div>
    image: "orchard",
    name: "Orchard",
    androidVLink: "https://github.com/Abbaskhurram255/habit-builder/raw/main/android/orchard.apk?raw=true",
    sourceCode: "https://github.com/Abbaskhurram255/habit-builder",
    tools: "TS.React, HTML, SCSS",
    url: "https://abbaskhurram255.github.io/"
  }
];
