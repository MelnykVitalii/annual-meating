<template>
  <div class="speakers-view-container">
    <div class="container">
      <div>
        <div class="view--photo" />
      </div>
      <div class="view--info">
        <h3 class="view--item-name">
          {{ `${user['First Name']} ${user['Last Name']}` }}
        </h3>
        <span class="view--item-affiliation">{{ user.Affiliation }}</span>
        <p class="view--item-bio">{{ user.Bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import users from '@/data/data'

export default {
  name: 'SpeakerView',
  props: {
    id: {
      type: [String],
      default: 'null'
    }
  },
  data() {
    return {
      listSpeakers: [],
      user: {}
    }
  },

  beforeMount() {
    this.listSpeakers = users.Speakers
    this.user = this.listSpeakers.find((x) => x['First Name'] === this.id)
  }
}
</script>
