<template>
  <div class="container-list">
    <ul class="speakersContainer-filter">
      <li v-for="letter in alphabet" :key="letter">{{ letter }}</li>
    </ul>

    <div class="speakersContainer-list">
      <div
        v-for="item in listSpeakers"
        :key="item.message"
        class="speakersContainer-list--item"
        @click="viewSpeaker(item)"
      >
        <img
          class="list--item-img"
          :src="
            require(`@/assets/images/speakers-list/${item['Do we have a photo?']}.jpg`)
          "
        />

        <div class="list--item-block">
          <h3 class="list--item-name">
            {{ `${item['First Name']} ${item['Last Name']}` }}
          </h3>
          <p class="list--item-description">{{ item.Title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from '@/data/data'
import Alphabet from '@/data/alphabet'

export default {
  name: 'SpeakerList',
  data() {
    return {
      listSpeakers: [],
      alphabet: []
    }
  },

  beforeMount() {
    this.listSpeakers = users.Speakers
    this.alphabet = Alphabet
  },

  methods: {
    viewSpeaker(item) {
      this.$router.push({
        name: 'speakerView',
        params: { id: item['First Name'] }
      })
    }
  }
}
</script>
