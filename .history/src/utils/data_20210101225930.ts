
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
      "",
    image: "orchard",
    name: "Orchard",
    androidVLink: "https://github.com/Abbaskhurram255/habit-builder/raw/main/android/orchard.apk?raw=true",
    sourceCode: "https://github.com/Abbaskhurram255/",
    tools: "TS.React, HTML, SCSS",
    url: "https://abbaskhurram255.github.io/"
  }
];
