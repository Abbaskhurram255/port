
interface IProject {
  description: string;
  image: string;
  name: string;
  sourceCode: string;
  tools: string;
  url: string;
}

export const projects: IProject[] = [
  {
    description:
      "'Chatterbox' is a responsive web app that assists its users. It lets you know what the weather is like right now, generates you a random password for better security, remind you on events like Christmas, New Year's Eve, New Year's Day, and your birthday. It also helps you schedule your day or week, take notes; has built-in calculator, calendar/ appointments scheduler, currency converter, stopwatch, BMI Calculator, Mortgage Calculator, Expense Tracker, Meal finder, Calories Tracker, Movies' & TV series' ratings' database, an app that motivates, lyrics app, book reader, some fun games to kill your boredom and whatnot.",
    image: "meal to list",
    name: "Chatterbox",
    sourceCode: "https://github.com/Abbaskhurram255/Chatterbox/",
    tools: "JavaScript, React, HTML, CSS, JQuery",
    url: "https://abbaskhurram255.github.io/Chatterbox/getting-started"
  }
];
