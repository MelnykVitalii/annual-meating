<template>
  <div class="content-block agendaView-panel">
    <div class="agendaView-container">
      <div class="agendaList--item">
        <div>
          <h4 class="agendaList--item--title">Plenary session</h4>

          <span class="agendaList--item--time">
            <img src="../../assets/images/time.svg" />
            {{ agenda.session_title }} | {{ agenda.revised_schedule }}</span
          >
        </div>
        <div class="agendaList--item--actions">
          <button
            class="agendaList--item--actions--btn"
            @click="addToMyAgenda(session, agenda)"
          >
            Add to my agenda
          </button>
        </div>
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
    }
  },
  data() {
    return {
      agenda: {}
    }
  },

  beforeMount() {
    this.agenda = getAgendaById(this.id)
  }
}
</script>
