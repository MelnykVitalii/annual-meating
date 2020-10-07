<template>
  <div class="content-block speakers-panel">
    <div class="speakers-panel--container">
      <ul class="speakers-panel--filter">
        <li
          v-for="letter in alphabetLetters"
          :key="letter"
          @click="scrollTo(letter)"
        >
          {{ letter }}
        </li>
      </ul>

      <div class="speakers-panel--list">
        <div
          v-for="item in speakersList"
          :id="item.first_name.charAt(0).toLowerCase()"
          :key="item.id"
          class="speakers-panel--list-item"
          @click="viewSpeaker(item.id)"
        >
          <img
            class="list-item--img"
            :src="require(`@/assets/images/speakers-list/${item.file_img}`)"
          />

          <div class="list-item--block">
            <h3 class="list-item--name">
              {{ `${item.first_name} ${item.last_name}` }}
            </h3>
            <p class="list-item--description">{{ item.title }}</p>
            <p class="list-item--affiliation">{{ item.affiliation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
import Alphabet from '@/assets/config/alphabet'
import { getSpeakersList } from '@/database/index'

export default {
  name: 'SpeakerList',
  data() {
    return {
      speakersList: [],
      alphabetLetters: []
    }
  },

  beforeMount() {
    this.speakersList = getSpeakersList()
    this.alphabetLetters = Alphabet
  },

  methods: {
    viewSpeaker(id) {
      this.$router.push({
        name: 'SpeakerView',
        params: { id }
      })
    },

    scrollTo(item) {
      const el = document.querySelector(`#${item}`)

      if (el) {
        animateScrollTo(el)
      }
    }
  }
}
</script>
