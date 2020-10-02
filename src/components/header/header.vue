<template>
  <div class="header">
    <div class="header-container">
      <img class="header-logo" src="../../assets/images/logo.png" />
      <div class="header-link">
        <router-link to="/">LOBBY</router-link>
        <router-link to="/agenda">AGENDA</router-link>
        <router-link to="/list">SPEAKER LIBRARY</router-link>
        <router-link to="/form">YOUR NAME</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
