<script>
import {CONTACT_INFO} from '../constants';

export default {
  data() {
    return {
      name: CONTACT_INFO.NAME,
      mail: CONTACT_INFO.MAIL,
      linkedIn: CONTACT_INFO.LINKED_IN,
      gitHub: CONTACT_INFO.GITHUB,
    }
  },
}
</script>
<template>
  <div class="container">
    ABOUT PAGE
    <div class="description"> This application is a worlwide wheather checking application. Users can enter their
      desired city names on the main page and current wheather situation of that city will be shown. Background of the
      page is changed according to temperature on the city.
      <br/><br/>
      This Project is implemented to be able to try and improve skills on Vue. And this about
      page is created to be able to test router on vue.js.
      <br/><br/> This project includes:
      <li> Router</li>
      <li> Proper View & Component Project Structure</li>
      <li> Dynamic Navigation Menu (Coming Soon)</li>
      <li> Editable Dashboard (Coming Soon) </li>
      <li> Live Map (Coming Soon) </li>
      <li> Dynamic Style Changes</li>
    </div>
    <div class="contact-info">
      Contact Info:
      <div class="contact-info-row">
        <font-awesome-icon icon="fa-solid fa-user" class="mr-3"/>
        {{ this.name }}
      </div>
      <div class="contact-info-row">
        <font-awesome-icon icon="fa-solid fa-envelope" class="mr-3"/>
        {{ this.mail }}
      </div>
      <div class="contact-info-row">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="mr-3"/>
        {{ this.linkedIn }}
      </div>
      <div class="contact-info-row">
        <font-awesome-icon icon="fa-brands fa-github" class="mr-3"/>
        {{ this.gitHub }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  background-color: #0B3C5D;
  min-height: 100vh;
  padding: 25px;
  color: #D9D9D9;
  font-size: large;
}

.description {
  margin-top: 1rem;
  margin-bottom: 4rem;
}

.contact-info {
  font-size: larger;
}

.contact-info-row {
  margin-top: 1rem;
  height: 2rem;
}

.mr-3 {
  margin-right: .75rem;
}
li {
  margin-top: .25rem;
}
</style>