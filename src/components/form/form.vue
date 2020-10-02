<template>
  <div class="form-root">
    <img class="form-logo" src="../../assets/images/logo.png" />
    <div class="form-container">
      <h3 class="form-header">WELCOME PLEASE LOG IN</h3>

      <form class="form-inputs">
        <input v-model="firstName" placeholder="First Name" />
        <input v-model="lastName" placeholder="Last Name" />
        <input v-model="email" placeholder="Email Address" />
        <input v-model="password" placeholder="Password" />

        <button class="form-submit" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }
}
</script>
