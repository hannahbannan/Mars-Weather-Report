# Project Overview

## Project Links

Github Repo: https://github.com/hannahbannan/SEIR-526-Mars-Project
- [add your deployment link]()

## Project Description

In this project I will create an app that displays the weather report on Mars. I want to make this look like your normal weather app, but that of another planet! I want this app to be both fun to look at and educational, so I will incorporate information on Mars' weather and seasons as well.

NASA uses their API to create a one-page weather report: https://mars.nasa.gov/insight/weather/
I will be creating a similar but expanded application around this report.


## API

NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, an area near Mars’ equator. This API provides the weather measurements from the last 7 sols (or days, for us Earthlings). It includes data for temperature, windspeed, and pressure.

API URL: https://api.nasa.gov/insight_weather/?api_key=NVPo1OZ86ApquiqVgY9DX61fYLbMSAO1vfNbNDwP&feedtype=json&ver=1.0

Here is a snippet of the API - atmospheric temperature (AT) on Sol 554. Shows average temp, count of measurements taken that sol, minimum, and maximum temp.

"554": {
	"AT": {
		"av": -56.99,
		"ct": 180572,
		"mn": -92.401,
		"mx": -3.97
	},
}


## Wireframes

Check out my Sketch files in this repo if you are able to open. Otherwise, screenshots of my wireframe and React architecture can be found below.

Wireframes: https://cloudinary.com/console/c-5cd56b7c6bedd7284e59603c7be5e5/media_library/folders/2ef6dd14ed55eb15388adb2c7a4726a2

React Architecture: https://res.cloudinary.com/hannahbannan/image/upload/v1593123215/Mars%20Project/Screen_Shot_2020-06-25_at_3.13.30_PM_mawnzx.png



#### MVP 
- Fetch data from NASA API
- Render a daily weather page, 7-day report, and seasons page using the data from the API
- Write an "About" page explaining the weather information

#### PostMVP 

- Fetch data from a second weather API to compare your local weather to the Mars weather. Example: "It is 88 degrees colder in Mars today than it is in Los Angeles."

### Time Frames

## MVP
| Component | Priority | Estimated Time (Hours) | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create wireframes | H | 1 | 1 | 1 |
| Create component architecture | H | 1 | 1 | 1 |
| Read API documentation | H | 1 | 1 | 1 |
| Build out basic page structure | H | 2 | 1 | 1 |
| Build nav section | H | 1 | 1 | 1 |
| Implement React Router | H | 2 | 1 | 1 |
| Build weather details component by pulling API data | H | 3 | 2 | 2 |
| About page research & writing copy | M | 2 | 1 |  |
| Seasons page research & writing copy | M | 2 | 1 |  |
| Seasons page API pull and conditional rendering | M | 2 | 3 | 3 |
| Responsive design | H | 3 | 3 |  |
| useContext for API data | M | 2 | 2 | 2 |
| Styling in CSS | M | 3 | 2 |  |
| Source images | M | 2 | 1 |  |
| Hamburger icon on mobile | L | 2 | 2 |  |
| Total |  | 32hrs | 23hrs |  |


## Post-MVP
| Component | Priority | Estimated Time (Hours) | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Fetch data from second API | L | 2 |  |  |
| Form for zipcode input | L | 3 |  |  |
| Compare first and second API data | L | 2 |  |  |
| Learn D3/make data graphic | L | 5 |  |  |
| Mars image carousel on about page | L | 3 |  |  |
| Total |  | 15hrs|  |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
