import './App.css';
import { useState, useEffect } from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Header from './Components/Header'
import Headlines from './Components/Headlines'
import Article from './Components/Article'
import Footer from './Components/Footer'
import Search from './Components/Search'

const key1 = '15a205e299d84a7ca189f836671e2bd8'
const key2 = '0d269e6f0417477eb8b17c0748637aba'
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key1;
// let searchInput = ''

function App() {
  let [data, setData] = useState([]);
  data = [
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Sharif Paget, Caroll Alvarado, Eric Levenson, Amir Vera",
        "title": "Food truck video of slain University of Idaho students offers timeline of their final hours - CNN",
        "description": "Two of the four University of Idaho students who were killed on Sunday were last seen alive ordering at a late-night food truck in Moscow, Idaho, at about 1:41 a.m., the truck's live Twitch stream shows.",
        "url": "https://www.cnn.com/2022/11/17/us/university-of-idaho-killings-thursday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221117114231-grub-wandering-kitchen-video.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-11-17T22:37:00Z",
        "content": "Two of the four University of Idaho students who were killed on Sunday were last seen alive ordering at a late-night food truck in Moscow, Idaho, at about 1:41 a.m., the trucks live Twitch stream sho… [+6640 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Black Sea grain export deal extended, but Russia wants more on fertiliser exports - Reuters",
        "description": "A deal aimed at easing global food shortages by helping Ukraine export its agricultural products from Black Sea ports was extended for four months on Thursday, though Russia said its own demands were yet to be fully addressed.",
        "url": "https://www.reuters.com/world/un-secretary-general-says-black-sea-grain-deal-extended-2022-11-17/",
        "urlToImage": "https://www.reuters.com/resizer/k_XlxZgYw8gHbRqIThHeWF6ufa0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OACN4QY4HBPETD6RKX57PWE7UI.jpg",
        "publishedAt": "2022-11-17T21:36:00Z",
        "content": "Nov 17 (Reuters) - A deal aimed at easing global food shortages by helping Ukraine export its agricultural products from Black Sea ports was extended for four months on Thursday, though Russia said i… [+3864 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ESPN"
        },
        "author": "Alaina Getzenberg",
        "title": "NFL moves Browns-Bills game to Detroit due to snowstorm - ESPN",
        "description": "The NFL is moving the Bills' home game Sunday against the Browns to Detroit because of a lake-effect snowstorm in the Buffalo area.",
        "url": "https://www.espn.com/nfl/story/_/id/35048022/nfl-moves-browns-bills-game-detroit-due-snow-storm",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F1124%2Fplay_a_buffalosnow_ms_1296x729.jpg",
        "publishedAt": "2022-11-17T21:33:27Z",
        "content": "ORCHARD PARK, N.Y. -- The Buffalo Bills' home game against the Cleveland Browns is being relocated to Detroit due to a winter storm expected to hit western New York over the next couple of days.\r\nThe… [+2745 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Page Six"
        },
        "author": "Leah Bitsky",
        "title": "Emily Ratajkowski wants to be with 'multiple' men, women amid Pete Davidson fling - Page Six",
        "description": "EmRata, 31, and Davidson, 29, sparked dating rumors over the weekend. And on Monday a source confirmed they “have been talking for a couple months now.",
        "url": "https://pagesix.com/2022/11/17/emily-ratajkowski-wants-to-be-with-multiple-men-women-amid-pete-davidson-fling/",
        "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/11/Emily-Ratajkowski-Pete-Davidson.jpg?quality=75&strip=all&w=1200",
        "publishedAt": "2022-11-17T21:23:00Z",
        "content": "Emily Ratajkowski hinted that she’s interested in dating multiple people after being spotted showing PDA with rumored new boy-toy Pete Davidson. \r\nRatajkowski took to TikTok on Thursday to film herse… [+1936 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Gaza: At least 21 killed in Jabalia refugee camp fire - BBC",
        "description": "At least 10 children have died in a building in the Jabalia refugee camp - the biggest in Gaza.",
        "url": "https://www.bbc.com/news/world-middle-east-63668821",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1BE1/production/_127673170_mediaitem127670667.jpg",
        "publishedAt": "2022-11-17T21:10:10Z",
        "content": "At least 21 people - including 10 children - have been killed by a fire in a building in a densely populated refugee camp in the Gaza Strip, a hospital director has told the BBC.\r\nThe number of death… [+1740 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "The Fall Of FTX And Sam Bankman-Fried - CNBC",
        "description": "Sam Bankman-Fried and his crypto companies poured billions of dollars into the industry after the Terra-Luna stable coin crisis. As recently as September, Ba...",
        "url": "https://www.youtube.com/watch?v=Vyr35KVY0Fo",
        "urlToImage": "https://i.ytimg.com/vi/Vyr35KVY0Fo/maxresdefault.jpg",
        "publishedAt": "2022-11-17T21:04:30Z",
        "content": null
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "'Positively dystopian': Florida judge blocks DeSantis' anti-woke law for colleges - POLITICO",
        "description": "A judge determined policies from the law violate First Amendment free speech protections along with due-process rights in the 14th Amendment on college campuses.",
        "url": "https://www.politico.com/news/2022/11/17/florida-anti-woke-law-block-colleges-education-00069252",
        "urlToImage": "https://static.politico.com/52/64/3cf586c74d4bb9e44672e99fb8ce/https-delivery-gettyimages.com/downloads/1244625056",
        "publishedAt": "2022-11-17T20:52:12Z",
        "content": "It was a bright cold day in April, and the clocks were striking thirteen, and the powers in charge of Floridas public university system have declared the State has unfettered authority to muzzle its … [+4400 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Shimon Prokupecz",
        "title": "FIRST ON CNN: Acting police chief on day of Uvalde school massacre resigns from department, mayor says - CNN",
        "description": "Lt. Mariano Pargas, the acting police chief on the day of the Robb Elementary School massacre, has resigned from the Uvalde Police Department, Mayor Don McLaughlin said Thursday afternoon.",
        "url": "https://www.cnn.com/2022/11/17/us/uvalde-mariano-pargas-resigns/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221114134834-mariano-pargas.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-11-17T20:40:00Z",
        "content": "Lt. Mariano Pargas, the acting police chief on the day of the Robb Elementary School massacre, has resigned from the Uvalde Police Department, Mayor Don McLaughlin said Thursday afternoon.\r\nPargas re… [+2062 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Republicans Lay Out Biden Investigations, but Democrat-Aligned Groups Promise Counteroffensive - The New York Times",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiUmh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjIvMTEvMTcvdXMvcG9saXRpY3Mvb3ZlcnNpZ2h0LWludmVzdGlnYXRpb25zLWJpZGVuLmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-11-17T20:36:08Z",
        "content": null
    },
    {
        "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
        },
        "author": "Vivian Salama, James Marson",
        "title": "Biden Pushes Back on Ukraine's Claim Russia Shot Missile That Struck Poland - The Wall Street Journal",
        "description": "‘That’s not the evidence,’ U.S. president says; Zelensky says his military told him missile was fired by Russia",
        "url": "https://www.wsj.com/articles/biden-pushes-back-on-kyivs-claims-russia-shot-missile-that-struck-poland-11668697503",
        "urlToImage": "https://images.wsj.net/im-668631/social",
        "publishedAt": "2022-11-17T20:23:00Z",
        "content": "President Biden pushed back on claims by Ukrainian President Volodymyr Zelensky that a \r\nmissile that killed two people in Poland this week wasnt fired from Ukraine.Just after midnight Wednesday, aft… [+213 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "SpaceX Employees Say They Were Fired for Speaking Up About Elon Musk - The New York Times",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiSWh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjIvMTEvMTcvYnVzaW5lc3Mvc3BhY2V4LXdvcmtlcnMtZWxvbi1tdXNrLmh0bWzSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-11-17T20:09:53Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Variety"
        },
        "author": "Joe Otterson",
        "title": "Amazon Orders Multiple Marvel-Sony Shows, Beginning With ‘Silk: Spider Society’ From ‘Walking Dead’ Alum Angela Kang - Variety",
        "description": "Amazon is officially moving forward with multiple live-action shows based on the Marvel characters controlled by Sony, Variety has learned. The first series under the deal will be “Silk: Spider Society,” which was developed by “The Walking Dead” showrunner An…",
        "url": "https://variety.com/2022/tv/news/amazon-marvel-sony-shows-silk-spider-society-angela-kang-1235435786/",
        "urlToImage": "https://variety.com/wp-content/uploads/2022/11/Silk-Cindy-Moon-Marvel.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2022-11-17T20:00:00Z",
        "content": "Amazon is officially moving forward with multiple live-action shows based on the Marvel characters controlled by Sony, Variety has learned. \r\nThe first series under the deal will be “Silk: Spider Soc… [+4601 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Athletic"
        },
        "author": "Jake Ciely",
        "title": "Fantasy Football Rankings Week 11: Sleepers, starts, sits | Brian Robinson, Greg Dulcich and more - The Athletic",
        "description": "Jake Ciely offers up his Week 11 fantasy football rankings, favorite sleepers (including some Broncos) and list of best TV/movie bullies.",
        "url": "https://theathletic.com/3901482/2022/11/17/fantasy-football-rankings-week-11-sleepers-starts-sits-brian-robinson-greg-dulcich-and-more/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2022/11/15011337/GettyImages-1244788610-1024x683.jpg",
        "publishedAt": "2022-11-17T19:59:48Z",
        "content": "Its Week 11 and Thanksgiving is next week. Additionally, most trade deadlines coincide with Thanksgiving, so well focus on playoff schedules for buys and sells. Dont forget, the 101 piece helping you… [+8608 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Jordan Mendoza, USA TODAY",
        "title": "Driver of SUV that hit LA County Sheriff's, police recruits charged with attempted murder - USA TODAY",
        "description": "The Los Angeles County Sheriff's Department said 22-year-old Nicholas Joseph Gutierrez was charged with attempted murder on a peace officer.",
        "url": "https://www.usatoday.com/story/news/nation/2022/11/17/man-hit-la-county-sheriffs-recruits-attempted-murder/10720886002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2022/11/16/USAT/0b3d205f-a60b-4a38-83d1-d31fbe2824c4-AFP_AFP_32NN6PC.jpg?auto=webp&crop=4799,2700,x0,y70&format=pjpg&width=1200",
        "publishedAt": "2022-11-17T19:44:16Z",
        "content": "The driver of an SUV who hit 25 Los Angeles County sheriff's and police recruits, five of which were critically injured, Wednesday was arrested on attempted murder charges, authorities said. \r\nNichol… [+2738 chars]"
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "Lisa Mascaro, Brian Slodysko",
        "title": "McConnell reelected Senate GOP leader: 'Not going anywhere' - The Associated Press",
        "description": "WASHINGTON (AP) — Sen. Mitch McConnell was reelected as Republican leader Wednesday, quashing a challenge from Sen. Rick Scott of Florida, the Senate GOP campaign chief criticized after a disappointing performance in the midterm elections  that kept Senate co…",
        "url": "https://apnews.com/article/florida-mitch-mcconnell-congress-9f1be1d3635127dbb3e17a3fae1ac86d",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/32e4550409ec436d89134920f20d50d6/3000.jpeg",
        "publishedAt": "2022-11-17T19:16:35Z",
        "content": "WASHINGTON (AP) Sen. Mitch McConnell was reelected as Republican leader Wednesday, quashing a challenge from Sen. Rick Scott of Florida, the Senate GOP campaign chief criticized after a disappointing… [+5941 chars]"
    },
    {
        "source": {
            "id": "nfl-news",
            "name": "NFL News"
        },
        "author": "Nick Shook",
        "title": "Eagles signing free-agent DT Ndamukong Suh ahead of playoff run - NFL.com",
        "description": "Ndamukong Suh's winding journey has finally led him to his next destination: Philadelphia. The Eagles are signing the 35-year-old defensive tackle.",
        "url": "https://www.nfl.com/news/eagles-signing-free-agent-dt-ndamukong-suh-ahead-of-playoff-run",
        "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/zhburp9zqmqohg3ipojc",
        "publishedAt": "2022-11-17T19:12:00Z",
        "content": "Ndamukong Suh's winding journey has finally led him to his next destination: Philadelphia.\r\nThe Eagles are signing the 35-year-old defensive tackle to a one-year contact, NFL Network Insider Ian Rapo… [+2233 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Graham Kates",
        "title": "Trumps had role in fraud scheme, Allen Weisselberg testifies at company's trial - CBS News",
        "description": "Private school tuition checks signed by Donald Trump and two of his sons figured into improper salary reductions, Allen Weisselberg said.",
        "url": "https://www.cbsnews.com/news/trump-organization-trial-fraud-scheme-allen-weisselberg-testifies/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/11/17/78216f06-c0e1-4690-8b64-987b95d66cff/thumbnail/1200x630/d7e987b9b64c1eed17eaaf707a369878/20221117-115419-resized.jpg",
        "publishedAt": "2022-11-17T18:49:00Z",
        "content": "Former Trump Organization chief financial officer Allen Weisselberg testified in court Thursday, describing how Donald Trump and two of his children allegedly participated in a scheme to defraud tax … [+4613 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Kotaku"
        },
        "author": "Ashley Bardhan",
        "title": "How To Get Shinies In Pokémon Scarlet and Violet - Kotaku",
        "description": "A Twitter dataminer assures fans that their cherished ‘Masuda method’ gets the job done",
        "url": "https://kotaku.com/pokemon-scarlet-violet-shiny-hunting-starter-sandwich-1849796776",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/27dd690c19822ac7bcd261b786d74ad4.jpg",
        "publishedAt": "2022-11-17T18:45:00Z",
        "content": "Twitter dataminer and self-described efficientPokémon player @Sibuna_Switch has shared Pokémon Scarlet and Violets shiny rates, determined for the soon-to-be-released game, and an important decree: a… [+2747 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gizmodo.com"
        },
        "author": "George Dvorsky",
        "title": "What's Next for the Orion Spacecraft as It Cruises Toward the Moon - Gizmodo",
        "description": "NASA's Artemis 1 capsule is en route to the Moon, where it’s expected to break a number of spacefaring records—including one set during Apollo 13.",
        "url": "https://gizmodo.com/orion-spacecraft-nasa-moon-journey-1849796028",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e488c0d847f0c5b5dc973b9646cdd6b5.jpg",
        "publishedAt": "2022-11-17T18:16:00Z",
        "content": "NASAs Space Launch System blasted off on Wednesday, sending the uncrewed Orion spacecraft on a 25-day journey to the Moon and back. Orion should reach its destination early next week, at which time i… [+4447 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Antonio G. Di Benedetto",
        "title": "Google’s Pixel Watch and Pixel 7 Pro are both on sale for their lowest prices - The Verge",
        "description": "A bunch of Google’s Black Friday deals have landed today, encompassing the Pixel 7 Pro, Pixel 7, Pixel Buds Pro, and even the new Pixel Watch. Plus, we’re seeing all-time lows on the 16-inch MacBook Pro and some Xbox controllers.",
        "url": "https://www.theverge.com/2022/11/17/23464138/google-black-friday-pixel-watch-macbook-pro-xbox-deal-sale",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/8GW_mm2oZJ0wzA6ODRqkxEDLsqk=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24100172/226337_Pixel_7_and_7_Pro_AKrales_0370.jpg",
        "publishedAt": "2022-11-17T17:39:21Z",
        "content": "Googles new Pixel Watch and Pixel 7 Pro are both on sale for their lowest price to date\r\nGoogles new Pixel Watch and Pixel 7 Pro are both on sale for their lowest price to date\r\n / Oh, and there are … [+8159 chars]"
    }
]
  let [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    })
    .then((res) => res.json())
    .then((json) => {
      setData(json.articles)
    })
  }, [])
  console.log(data)
  return (
    <div className="App">
      <nav>
        <Link to='/'>
          <Header />
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={ <Headlines data={data}/>} />
          <Route path='/article/:articleNumber' element={ <Article data={data} />} />
          <Route path='/Search' element={ <Search searchResults={searchResults} setSearchResults={setSearchResults}/> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
