
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
      "'Chatterbox' is a responsive web app that assists its users. It lets you know what the weather is like right now, generates you a random password for better security, remind you on events like Christmas, New Year's Eve, New Year's Day, and your birthday. It also helps you schedule your day or week, take notes; has built-in calculator, calendar/ appointments scheduler, currency converter, stopwatch, BMI Calculator, Unit Converter, Habit Tracker, Mortgage Calculator, Expense Tracker, Meal finder, Calories Tracker, Net worth Tracker, MyBookList, Movies' & TV series' cast & ratings' database, an app that motivates, lyrics-plus-encyclopedia app, recipes app, book reader, some fun games to kill your boredom, and whatnot. A simple assistant with several built-in tools!",
    image: "chatterbox",
    name: "Chatterbox",
    androidVLink: "about:blank",
    sourceCode: "https://github.com/Abbaskhurram255/Chatterbox/",
    tools: "Vanilla JavaScript, React, HTML, (S)CSS, JQuery",
    url: "https://abbaskhurram255.github.io/Chatterbox/getting-started"
  },
  {
    description:
      "The Maze is a game of challenging mazes. It has 5 difficulty levels, and each of them has infinite mazes and stages. So, this means that the game has no repeating mazes! Well, let's see if you can beat the computer",
    image: "maze",
    name: "The Maze",
    androidVLink: "https://github.com/Abbaskhurram255/maze/releases/download/v1.0/the-maze.apk",
    sourceCode: "https://github.com/Abbaskhurram255/maze/",
    tools: "TS.React, HTML, SCSS",
    url: "https://alexs-maze-game.netlify.app"
  },
  {
    description:
      "yoMovies is an online database of information related to movies – including cast, production crew and personal biographies, plot summaries, and ratings",
    image: "yomovies",
    name: "yoMovies",
    androidVLink: "https://github.com/Abbaskhurram255/yoMovies/releases/download/v1.0/yomovies.apk",
    sourceCode: "https://github.com/Abbaskhurram255/yoMovies",
    tools: "React, HTML, CSS",
    url: "https://abbaskhurram255.github.io/yoMovies"
  },
  {
    description:
      "Play the ultimate trivia quiz. Categories include general knowledge, entertainment, history, computer & IT, books & research, science & nature",
    image: "trivia",
    name: "Trivia",
    androidVLink: "https://github.com/Abbaskhurram255/Trivia-Db/releases/download/v1.0/trivia.apk",
    sourceCode: "https://github.com/Abbaskhurram255/Trivia-Db",
    tools: "React, HTML, CSS",
    url: "https://abbaskhurram255.github.io/Trivia-Db"
  }
];
