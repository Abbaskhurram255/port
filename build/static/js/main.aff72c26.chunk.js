(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),s=a.n(o),i=a(1),l=a(2),c=a(4),m=a(3),u=a(5),h={contact:{EMAIL:Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio"}).REACT_APP_EMAIL||"abbaskhuram255@gmail.com"},social:{GITHUB_URL:Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio"}).REACT_APP_GITHUB_URL||"https://github.com/abbaskhurram255",TWITTER_URL:Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio"}).REACT_APP_TWITTER_URL||"https://twitter.com/alexputh255"}},p=function(e){var t=e.socialIcon,a=e.socialUrl;return r.createElement("a",{href:a,rel:"noopener noreferrer",className:"social",target:"_blank"},r.createElement("i",{className:t}))},b=function(e){var t=e.title,a=e.subTitle,n=e.parentComponent;return r.createElement("div",{className:"".concat(n,"__title-box")},r.createElement("h1",{className:"".concat(n,"__title")},t),a&&r.createElement("h2",{className:"".concat(n,"__subtitle")},a))},d=h.social,k=d.GITHUB_URL,_=d.TWITTER_URL,g=h.contact.EMAIL,v=function(){return r.createElement("div",{id:"contact",className:"contact"},r.createElement(b,{title:"Get in Touch",parentComponent:"contact"}),r.createElement("div",{className:"contact__social-links"},r.createElement("p",{className:"contact__brackets"},"{"),r.createElement(p,{socialIcon:"fab fa-github",socialUrl:k}),r.createElement(p,{socialIcon:"fab fa-twitter",socialUrl:_}),r.createElement(p,{socialIcon:"fas fa-envelope",socialUrl:"mailto:".concat(g)}),r.createElement("p",{className:"contact__brackets"},"}")))},E=function(e){var t=e.src,a=e.alt,n=e.parentComponent;return r.createElement("div",{className:"".concat(n,"-image-box")},r.createElement("img",{src:"/Portfolio".concat(t),alt:a,className:"".concat(n,"-image")}))},f=function(e){var t=e.parentComponent,a=e.mobile;return r.createElement("div",{className:"".concat(t,"__text-box").concat(a)},r.createElement("p",{className:"".concat(t,"__text")},"Hi, this is Khurram Ali. I'm a frontend developer. I love using functional programming concepts in JavaScript and building web applications with it. I'm a coding enthusiast. I've been creating web applications since I was 13. I'm 19 now. Programming has been my hobby since I was a kid. Anyway, welcome to my site! "," "),r.createElement("p",{className:"".concat(t,"__text")},"I'm currently learning Vue, and Angular."))},w=function(){return r.createElement("div",{className:"home"},r.createElement("div",{className:"home__text-container"},r.createElement(b,{title:"<Alex (aka Khurram Ali) />",parentComponent:"home",subTitle:"Front-End Developer"}),r.createElement(f,{parentComponent:"home",mobile:""})),r.createElement(E,{src:"/images/headshot.jpg",alt:"Headshot of Alex Puth",parentComponent:"home"}),r.createElement(f,{parentComponent:"home",mobile:"--mobile"}))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={isToggled:!0,linkClass:"navbar__link"},a.toggleNav=function(){var e=a.state.isToggled;a.setState({isToggled:!e}),e?a.setState({linkClass:"navbar__link--show"}):a.setState({linkClass:"navbar__link"})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"navbar"},r.createElement("a",{className:"navbar__brand",href:"#"},r.createElement("p",{className:"navbar__brand-text"},"AP")),r.createElement("i",{onClick:this.toggleNav,className:"fas fa-bars navbar__hamburger"}),r.createElement("div",{className:"navbar__link-box"},r.createElement("a",{className:this.state.linkClass,href:"#"},r.createElement("p",{className:"navbar__link-text"},"Home")),r.createElement("a",{className:this.state.linkClass,href:"#recent-works"},r.createElement("p",{className:"navbar__link-text"},"Recent Work")),r.createElement("a",{className:this.state.linkClass,href:"#skills"},r.createElement("p",{className:"navbar__link-text"},"Skills")),r.createElement("a",{className:this.state.linkClass,href:"#contact"},r.createElement("p",{className:"navbar__link-text"},"Contact"))))}}]),t}(r.Component),N=[{description:"'Chatterbox' is a responsive web app that assists its users. It lets you know what the weather is like right now, generates you a random password for better security, remind you on events like Christmas, New Year's Eve, New Year's Day, and your birthday. It also helps you schedule your day or week, take notes; has built-in calculator, calendar/ appointments scheduler, currency converter, stopwatch, BMI Calculator, Unit Converter, Habit Tracker, Mortgage Calculator, Expense Tracker, Meal finder, Calories Tracker, Net worth Tracker, MyBookList, Movies' & TV series' cast & ratings' database, an app that motivates, lyrics-plus-encyclopedia app, recipes app, book reader, some fun games to kill your boredom, and whatnot. A simple assistant with several built-in tools!",image:"chatterbox",name:"Chatterbox",androidVLink:"about:blank",sourceCode:"https://github.com/Abbaskhurram255/Chatterbox/",tools:"Vanilla JavaScript, React, HTML, (S)CSS, JQuery",url:"https://abbaskhurram255.github.io/Chatterbox/getting-started"},{description:"The Maze is a game of challenging mazes. It has 5 difficulty levels, and each of them has infinite mazes and stages. So, this means that the game has no repeating mazes! Well, let's see if you can beat the computer",image:"maze",name:"The Maze",androidVLink:"https://github.com/Abbaskhurram255/maze/releases/download/v1.0/the-maze.apk",sourceCode:"https://github.com/Abbaskhurram255/maze/",tools:"TS.React, HTML, SCSS",url:"https://alexs-maze-game.netlify.app"},{description:"Want to build a new habit but you keep on failing---or are afraid of failing, at least? No? Well then I assume you are struggling to break one. You don't need to worry anymore. Orchards makes it easy! Grow forth by completing your daily goals with this minimal habit tracker. It keeps track of your habits, and goals. Just install the app, submit the habit(s) you want to build or goal(s) you want to reach, and mark the goal as done every day as you reach it... And voila!",image:"orchard",name:"Orchard",androidVLink:"https://github.com/Abbaskhurram255/habit-builder/releases/download/v1.0/orchard.apk",sourceCode:"https://github.com/Abbaskhurram255/habit-builder",tools:"React, HTML, CSS",url:"https://abbaskhurram255.github.io/habit-builder"},{description:"yoMovies is an online database of information related to movies \u2013 including cast, production crew and personal biographies, plot summaries, and ratings",image:"yomovies",name:"yoMovies",androidVLink:"https://github.com/Abbaskhurram255/yoMovies/releases/download/v1.0/yomovies.apk",sourceCode:"https://github.com/Abbaskhurram255/yoMovies",tools:"React, HTML, CSS",url:"https://abbaskhurram255.github.io/yoMovies"},{description:"Find out how your net worth \u2013 the difference between what you own (your assets) and what you owe (your liabilities) compares to others. Understanding that difference is a great way to help you plan for the future",image:"fisave",name:"Fisave",androidVLink:"https://github.com/Abbaskhurram255/fisave-networth-tracking-app/releases/download/v1.0/fisave.apk",sourceCode:"https://github.com/Abbaskhurram255/fisave-networth-tracking-app",tools:"React, HTML, CSS",url:"https://fi-save.netlify.app"},{description:"Play the ultimate trivia quiz. Categories include general knowledge, entertainment, history, computer & IT, books & research, science & nature",image:"trivia",name:"Trivia",androidVLink:"https://github.com/Abbaskhurram255/Trivia-Db/releases/download/v1.0/trivia.apk",sourceCode:"https://github.com/Abbaskhurram255/Trivia-Db",tools:"React, HTML, CSS",url:"https://abbaskhurram255.github.io/Trivia-Db"}],C=function(e){var t=e.image,a=e.project,n=e.projectDescription,o=e.projectSourceCode,s=e.projectTools,i=e.projectUrl,l=e.androidVLink;return r.createElement("div",{className:"project"},r.createElement("div",{className:"project__image-box project__image-box--".concat(t)},r.createElement("div",{className:"project__link-box"},i&&r.createElement("a",{className:"project__link",href:i,rel:"noopener noreferrer",target:"_blank"},"View Site"),r.createElement("a",{className:"project__link",href:o,rel:"noopener noreferrer",target:"_blank"},"View Source Code"),r.createElement("a",{className:"project__link",href:l,rel:"noopener noreferrer",target:"_blank"},"Try on Android"))),r.createElement("div",{className:"project__info-box"},r.createElement("h3",{className:"project__name"},a),r.createElement("p",{className:"project__description"},n),r.createElement("p",{className:"project__description"},r.createElement("span",{className:"project__tools-label"},"Languages used:")," ",s)),r.createElement("div",{className:"project__link-box--mobile"},i&&r.createElement("a",{className:"project__link--mobile",href:i,rel:"noopener noreferrer",target:"_blank"},"View Site"),r.createElement("a",{className:"project__link--mobile",href:o,rel:"noopener noreferrer",target:"_blank"},"View Source Code"),r.createElement("a",{className:"project__link--mobile",href:l,rel:"noopener noreferrer",target:"_blank"},"Try on Android")))},T=function(){return r.createElement("div",{className:"projects"},N.map(function(e){return r.createElement(C,{project:e.name,projectDescription:e.description,projectSourceCode:e.sourceCode,projectTools:e.tools,projectUrl:e.url,image:e.image,androidVLink:e.androidVLink,key:e.name})}))},j=function(){return r.createElement("div",{id:"recent-works",className:"recent-works"},r.createElement(b,{title:"Recent Work",parentComponent:"recent-works"}),r.createElement(T,null))},S=function(e){var t=e.skills,a=e.title;return r.createElement("div",{className:"skill"},r.createElement("div",{className:"skill__title-box"},r.createElement("h3",{className:"skill__title"},a)),r.createElement("div",{className:"skill__box"},t.map(function(e){return r.createElement("p",{className:"skill__name",key:e},e)})))},L=function(){return r.createElement("div",{id:"skills",className:"skills"},r.createElement(b,{title:"Skills",parentComponent:"skills"}),r.createElement("div",{className:"skills__set-box"},r.createElement(S,{title:"My skills",skills:["JavaScript","React","HTML","CSS","SCSS","Git"]})))},x=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement(y,null),r.createElement(w,null),r.createElement(j,null),r.createElement(L,null),r.createElement(v,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);s.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.aff72c26.chunk.js.map