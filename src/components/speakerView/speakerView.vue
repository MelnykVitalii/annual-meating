<template>
  <div class="content-block speaker-view-panel">
    <div class="speaker-view-panel--container">
      <div>
        <img
          class="speaker-view--photo"
          :src="require(`@/assets/images/speakers-list/${user.file_img}`)"
        />
      </div>
      <div class="speaker-view--block">
        <h3 class="speaker-view--name">
          {{ user.first_name }}{{ user.last_name }}
        </h3>
        <span class="speaker-view--affiliation"
          >{{ user.title }}<br />{{ user.affiliation }}</span
        >
        <p class="speaker-view--bio">{{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getSpeakerById } from '@/database/index'

export default {
  name: 'SpeakerView',
  props: {
    id: {
      type: [String],
      default: '1'
    }
  },
  data() {
    return {
      user: {}
    }
  },

  beforeMount() {
    this.user = getSpeakerById(this.id)
  }
}
</script>
