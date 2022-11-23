# Project Overview

NewsApp is a lean, no-frills app built using Reactjs to help users stay up to date with events around the world!

## Project Description

NewsApp uses the power of [Newscatcher API](https://docs.newscatcherapi.com/) to bring the news from around the world to your desktop.  

## Project Links

- [GitHub Repo](https://github.com/nahmad94/NewsApp)
- [Deployment](https://news-5s0fktqx7-nahmad94.vercel.app/)
- [Demo]()

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- [Wireframes and Component heirarchy](https://photos.google.com/share/AF1QipOt4VHLKQ7uPjLhB7sL0v1Pj21JM98BaPXDO224rX8rd_tDft8zlDvnRjBxgGbs0w?key=ZC1oYVJzRjQzdXRtRUN0bk1abFRadmxsbzVzWWlB)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decide what is placed into your MVP as the "client" will expect this functionality to be implemented upon project completion.  

#### MVP 

- Create a news app with top stories from around the world
- Header with logo linking to Homepage
- Articles displayed under header
- Click articles to pull up full article

#### PostMVP 

- Adding search functionality
- Search news by keywords 
- Search news by country

## Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router | 
| Header | This will render the header, including the nav | 
| Footer | This will render the footer | 
| Headlines | This will render the home page headlines | 
| Article | This will render the individual articles | 
| Search | This will let you search for news and display results | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the project.  Your estimates can then be used to evaluate project possibilities based on time needed and the actual time you have before the project must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Selecting/Testing API | H | 4hrs| 5hrs | 5hrs |
| Creating basic components | H | 3hrs| 1.5hrs | 1.5hrs |
| Creating headlines for mainpage | H | 3hrs| 5hrs | 5hrs |
| Creating search input | H | 2hrs| 2.5hrs | 2.5hrs |
| Adding state | H | 3hrs| 5hrs | 5hrs |
| Adding routes and links | H | 3hrs| 4.5hrs | 4.5hrs |
| Mapping search results | H | 1hrs| 0.5hrs | 0.5hrs |
| Styling | H | 3hrs| 2hrs | 2hrs |
| Switching API | H | 0hrs| 8hrs | 8hrs |
| Total | H | 23hrs| 34hrs | 34hrs |

## Additional Libraries

This project does not require any additional libraries. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
const fetchSearch = () => { 
        fetch(searchURL, {
          method: 'GET',
          headers: {
            'x-api-key': key
          }
        })
        .then((res) => res.json())
        .then((json) => {
          setSearchResults(json.articles)
        })
    }
    useEffect(() => {}, [searchResults])
    function handleChange(e) {
        setSearchInput(e.target.value)
    }
```

This snippet of code is used to set the search parameters and fetch news related to that input. 

## Issues and Resolutions

Had issues with my first API not working on deployment. Switched to the NewsCatcher API as workaround. 

