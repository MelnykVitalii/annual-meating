<template>
  <div class="content-block signIn-panel">
    <img class="signIn--logo" src="../../assets/images/signInHeaderPhoto.png" />

    <div class="signIn-container">
      <h3 class="signIn--header">
        WELCOME <br />
        Password Creation
      </h3>

      <form class="signIn--form-inputs">
        <input v-model="firstName" placeholder="First Name" />
        <input v-model="lastName" placeholder="Last Name" />
        <input v-model="email" placeholder="Email Address" />
        <p class="form--email-text">
          Please use the same email address that you used at registration
        </p>
        <input v-model="password" placeholder="Password" />
        <input v-model="retypePassword" placeholder="Retype Password" />
        <div>
          <router-link class="form--forgot" to="/"
            >Forgot my password</router-link
          >
          <button class="form--submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data: function () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: ''
    }
  }
}
</script>
