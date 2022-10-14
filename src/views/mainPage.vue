<script>
import {OPEN_WHEATHER_API_KEY, OPEN_WHEATHER_API_URL} from '../constants';

export default {
  data() {
    return {
      api_key: OPEN_WHEATHER_API_KEY,
      url_base: OPEN_WHEATHER_API_URL,
      query: '',
      weather: {}
    }
  },
  methods: {
    fetchWeather(e) {
      if (e.key === "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
            .then(resp => {
              return resp.json();
            }).then(this.setResults)
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let days = ['MOnday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
    }
  }
}
</script>

<template>
  <div class="view-container">
    <div class="view-content-container">
      <div class="search-box">
        <input type="text"
               class="search-bar"
               placeholder="Search Bar"
               v-model="query"
               @keypress="fetchWeather"/>
      </div>
      <div class="weather-wrap" v-if="weather.main">
        <div class="location-box">
          <div class="location"> {{ weather.name }}</div>
          <div class="date"> {{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp"> {{ Math.round(weather.main.temp) }} °c</div>
          <div class="weather"> {{ weather.weather[0].main }}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.view-container {
  background-image: url(../assets/cold-bg.jpg);
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

.view-content-container {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 075));
}

search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-bar {
  display: block;
  width: 100%;
  padding: 15px;

  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.5) none;
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
}

.weather-box {
  text-align: center;
}

.temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>