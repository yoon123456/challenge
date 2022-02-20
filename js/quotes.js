const quotes=[
{quote:" The way get started is to quit talking and begin doing.",
author:"Walt Desney",    },
{quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
author:"Nelson Mandella",    },
{quote:"Anyone who has never made a mistake has never tries anything new.",
author:"Albert Einstein",    },
{quote:"Let me assert my firm belief that the only thing we have to fear is fear itself.",
author:"F.D.Roosvelt",    },
{quote:"Age is no guarantee of maturity",
author:"Lawana Blackwell",    },
{quote:"Somtimes even to live is an act of courage",
author:"Seneka",    },
{quote:"There is no cure for birth and death, save to enjoy the interval.",
author:"George Santayana",    },
{quote:"By nature, men are nealy alike. by practice, they get to be wide apart.",
author:"Confucius",},
{quote:"Science is organized kmowledge. Wisdom is organized life.",
author:"Immanuel kant",},
{quote:"Life is not fair get used to it.",
author:"Bill Gates",}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote= quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText="- " + todayQuote.author + " -";