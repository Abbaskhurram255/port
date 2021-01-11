
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
    androidVLink: "https://github.com/Abbaskhurram255/maze/blob/main/public/android/the-maze.apk?raw=true",
    sourceCode: "https://github.com/Abbaskhurram255/maze/",
    tools: "TS.React, HTML, SCSS",
    url: "https://alexs-maze-game.netlify.app"
  },
  {
    description:
      "Want to build a new habit but you keep on failing---or are afraid of failing, at least? No? Well then I assume you are struggling to break one. You don't need to worry anymore. Orchards makes it easy! Grow forth by completing your daily goals with this minimal habit tracker. It keeps track of your habits, and goals. Just install the app, submit the habit(s) you want to build or goal(s) you want to reach, and mark the goal as done every day as you reach it... And voila!",
    image: "orchard",
    name: "Orchard",
    androidVLink: "https://github.com/Abbaskhurram255/habit-builder/blob/main/build/android/orchard.apk?raw=true",
    sourceCode: "https://github.com/Abbaskhurram255/habit-builder",
    tools: "React, HTML, CSS",
    url: "https://abbaskhurram255.github.io/habit-builder"
  },
  {
    description:
      "Movies is an online database of information related to movies – including cast, production crew and personal biographies, plot summaries, ratings",
    image: "movies",
    name: "Movies",
    androidVLink: "https://github.com/Abbaskhurram255/movie-app/blob/main/public/android/movies.apk?raw=true",
    sourceCode: "https://github.com/Abbaskhurram255/movie-app",
    tools: "React, HTML, CSS",
    url: "https://abbaskhurram255.github.io/movie-app"
  },
  {
    description:
      "",
    image: "fisave",
    name: "Fisave",
    androidVLink: "https://github.com/Abbaskhurram255/fisave-networth-tracking-app/blob/main/public/android/fisave.apk?raw=true",
    sourceCode: "https://github.com/Abbaskhurram255/fisave-networth-tracking-app",
    tools: "React, HTML, CSS",
    url: "https://abbaskhurram255.github.io/fisave-networth-tracking-app"
  },
  {
    description:
      "",
    image: "trivia",
    name: "Trivia",
    androidVLink: "https://github.com/Abbaskhurram255/Trivia-Db/blob/main/public/android/trivia.apk?raw=true",
    sourceCode: "https://github.com/Abbaskhurram255/Trivia-Db",
    tools: "React, HTML, CSS",
    url: "https://abbaskhurram255.github.io/Trivia-Db"
  }
];
