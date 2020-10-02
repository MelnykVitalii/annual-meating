<template>
  <div class="agenda-list">
    <div class="agenda-container">
      <section>
        <div class="switch">
          <input id="test" type="checkbox" />
          <span class="selection"></span>
          <label for="test" @click="show = !show">AGENDA</label>
          <label for="test" @click="show = !show">MY AGENDA</label>
        </div>
      </section>

      <h3 class="agenda-header">WEDNESDAY, NOVEMBER 11</h3>

      <div v-if="show" class="agenda-item">
        <div>
          <h4 class="agenda-item-title">PLENARY SESSION</h4>
          <h3 class="agenda-item-name">Welcome AND President’s Address</h3>
          <span class="agenda-item-time">1:00 PM - 1:15 PM | WEDNESDAY</span>
        </div>
        <div class="agenda-item-actions">
          <button class="agenda-item-btn">ADD TO MY AGENDA</button>
          <router-link class="agenda-item-link" to="/agenda"
            >DETAILS</router-link
          >
        </div>
      </div>

      <p v-if="!show" class="agenda-empty">Empty...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgendaList',
  data: function () {
    return {
      show: true
    }
  }
}
</script>
