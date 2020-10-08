<template>
  <div class="content-block agendaList-panel">
    <div class="agendaList-container">
      <div>
        <agile
          class="agendaList--date-slider"
          :options="myOptions"
          @after-change="showCurrentSlide($event)"
        >
          <div v-for="item in agendaList" :key="item.id" class="slide">
            <h3 class="agendaList--date-slide--time">
              {{ item.revised_schedule }}
            </h3>
          </div>
        </agile>
      </div>
    </div>
  </div>
</template>

<script>
import { getAgendaList, getAgendaByIndex } from '@/database/index'

export default {
  name: 'Breakouts',

  data: function () {
    return {
      showMyAgenda: false,
      agendaList: [],
      myAgendaList: [],
      agenda: [],
      myOptions: {
        navButtons: true,
        dots: false,
        autoplay: false
      }
    }
  },

  beforeMount() {
    this.agendaList = getAgendaList()
  },

  methods: {
    showCurrentSlide(event) {
      this.agenda = getAgendaByIndex(event.currentSlide)
    },
    isEmpty(item) {
      return !item?.length
    },
    addToMyAgenda(session, { revised_schedule, session_title, id }) {
      this.myAgendaList.push({
        id,
        time: session_title,
        revised_schedule,
        ...session
      })
    },
    removeFromMyAgenda(index) {
      this.myAgendaList.splice(index, 1)
    }
  }
}
</script>
