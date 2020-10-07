<template>
  <div class="content-block agendaView-panel">
    <div class="agendaView-container">
      <div class="agendaList--item">
        <div>
          <h4 class="agendaList--item--title">
            {{ agendaItem.type_session }} session
          </h4>
          <h3 class="agendaList--item--name">
            {{ agendaItem.session_title }}
          </h3>

          <span class="agendaList--item--time">
            <img src="../../assets/images/time.svg" />
            {{ agendaItem.time }} |
            {{ agenda.revised_schedule.replace(/,.*/, '') }}</span
          >
        </div>
        <div class="agendaList--item--actions">
          <button class="agendaList--item--actions--btn">
            Add to my agenda
          </button>
        </div>
      </div>

      <div class="agendaView-user-list">
        <div
          v-for="(item, indexItem) in speakersList"
          :key="indexItem"
          class="agendaView-user-list--item"
        >
          <h2>{{ item.split(',')[0] }}</h2>
          <h3>{{ item.replace(item.split(',')[0], '').substring(1) }}</h3>
        </div>
      </div>

      <div class="agendaView-user-bio">
        {{ agendaItem.session_description }}
      </div>
    </div>
  </div>
</template>

<script>
import { getAgendaById } from '@/database/index'

export default {
  name: 'AgendaView',
  props: {
    id: {
      type: [String],
      default: '1'
    },
    index: {
      type: [String],
      default: '1'
    }
  },
  data() {
    return {
      agenda: {},
      agendaItem: {},
      speakersList: []
    }
  },

  beforeMount() {
    this.agenda = getAgendaById(this.id)
    this.agendaItem = this.agenda.data[this.index]

    this.speakersList = this.agendaItem.confirmed_speakers.split('\n\n')
  }
}
</script>
