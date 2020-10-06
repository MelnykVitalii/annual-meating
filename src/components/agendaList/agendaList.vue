<template>
  <div class="content-block agendaList-panel">
    <div class="agendaList-container">
      <div class="e-switch">
        <input id="test" type="checkbox" />
        <span class="e-switch--selection"></span>
        <label for="test" @click="showMyAgenda = !showMyAgenda">Agenda</label>
        <label for="test" @click="showMyAgenda = !showMyAgenda"
          >My agenda</label
        >
      </div>

      <div v-if="!showMyAgenda">
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

        <div
          v-for="(session, index) in agenda.data"
          :key="index"
          class="agendaList--item"
        >
          <div>
            <h4 class="agendaList--item--title">Plenary session</h4>
            <h3 class="agendaList--item--name">{{ session.session_title }}</h3>
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

            <router-link
              class="agendaList--item--actions--link"
              :to="{ name: 'AgendaView', params: { id: agenda.id } }"
              >details</router-link
            >
          </div>
        </div>

        <div v-if="isEmpty(agenda.data)" class="agendaList--empty">Empty..</div>
      </div>

      <div v-if="showMyAgenda">
        <div
          v-for="(myAgenda, index) in myAgendaList"
          :key="myAgenda.id"
          class="agendaList--item"
        >
          <div>
            <h4 class="agendaList--item--title">Plenary session</h4>
            <h3 class="agendaList--item--name">{{ myAgenda.session_title }}</h3>
            <span class="agendaList--item--time">
              <img src="../../assets/images/time.svg" />
              {{ myAgenda.time }} | {{ myAgenda.revised_schedule }}</span
            >
          </div>
          <div class="agendaList--item--actions">
            <button
              class="agendaList--item--actions--btn btn-remove"
              @click="removeFromMyAgenda(index)"
            >
              Remove
            </button>
            <router-link
              class="agendaList--item--actions--link"
              :to="{ name: 'AgendaView', params: { id: myAgenda.id } }"
              >details</router-link
            >
          </div>
        </div>
        <div v-if="isEmpty(myAgendaList)" class="agendaList--empty">
          Empty..
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAgendaList, getAgendaByIndex } from '@/database/index'

export default {
  name: 'AgendaList',

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
    viewAgenda(id) {
      this.$router.push({
        name: 'AgendaView',
        params: { id }
      })
    },

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
