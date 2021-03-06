# weather-report
A Weather forecast site created using openweathermap API.

Built using HTML/CSS & Vanilla JavaScript. Hosted using firebase.

Visit here:- https://weather-report-a3004.web.app/

## Explanation

A general static website created using HTML/CSS where "City name" data is imported and displayed using Open Weather Map API.

```bash
https://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid={apiKey}
```

apiKey is the unique key generated by openweathermaps to identify the user and allow the access to data. Opening the above link with proper api key
will generate a JSON from where we select required data to be displayed.

For the background image, an image generator is used.

```bash
https://source.unsplash.com/1600x900/?{cityName}
```

This also takes the city as input and display an image related to that city.

A date and time clock is also implemented using ```new Date()``` JavaScript function.

## Hosting

The website is hosted using Firebase CLI.
Firebase is a platform developed by Google for creating mobile and web applications and provide hosting services.
