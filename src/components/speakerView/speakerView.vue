<template>
  <div class="content-block speaker-view-panel">
    <div class="speaker-view-panel--container">
      <div>
        <img
          class="speaker-view--photo"
          :src="require(`@/assets/images/speakers-list/${user.file_img}`)"
        />

        <div class="arrow-action">
          <img src="../../assets/images/arrow-left.svg" @click="arrowLeft" />
          <img
            src="../../assets/images/arrow-back.svg"
            @click="goSpeakersList"
          />
          <img src="../../assets/images/arrow-right.svg" @click="arrowRight" />
        </div>
      </div>
      <div class="speaker-view--block">
        <h3 class="speaker-view--name">
          {{ user.first_name }} {{ user.last_name }}
        </h3>
        <span class="speaker-view--affiliation"
          >{{ user.title }}<br />{{ user.affiliation }}</span
        >

        <p class="speaker-view--bio" v-html="user.bio"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getSpeakerById, getSpeakerListLength } from '@/database/index'

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
  },

  methods: {
    goSpeakersList() {
      this.$router.push({
        name: 'SpeakerList'
      })
    },

    arrowLeft() {
      const id = this.id - 1 ? this.id - 1 : 1
      this.user = getSpeakerById(id)

      this.$router.push({
        name: 'SpeakerView',
        params: { id }
      })
    },

    arrowRight() {
      const id =
        +this.id + 1 <= getSpeakerListLength()
          ? +this.id + 1
          : getSpeakerListLength()
      this.user = getSpeakerById(id)

      this.$router.push({
        name: 'SpeakerView',
        params: { id }
      })
    }
  }
}
</script>
