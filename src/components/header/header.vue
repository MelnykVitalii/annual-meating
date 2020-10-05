<template>
  <div class="header">
    <div class="header-container">
      <img class="header-logo" src="../../assets/images/logo.png" />
      <div class="header-link--container">
        <router-link to="/">Lobby</router-link>
        <router-link to="/agendaList">Agenda</router-link>
        <router-link to="/speakerList">Speaker library</router-link>
        <router-link to="/signIn">Your name</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
