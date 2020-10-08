import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '@/components/dashboard/dashboard'
import SignIn from '@/components/signIn/signIn'
import Breakouts from '@/components/breakouts/breakouts'
import SpeakerList from '@/components/speakerList/speakerList'
import SpeakerView from '@/components/speakerView/speakerView'
import AgendaList from '@/components/agendaList/agendaList'
import AgendaView from '@/components/agendaView/agendaView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/speakerList',
    name: 'SpeakerList',
    component: SpeakerList
  },
  {
    path: '/speakerView/:id',
    name: 'SpeakerView',
    component: SpeakerView,
    props: true
  },
  {
    path: '/agendaList',
    name: 'AgendaList',
    component: AgendaList
  },
  {
    path: '/breakouts',
    name: 'Breakouts',
    component: Breakouts
  },

  {
    path: '/agendaView/:id/:index',
    name: 'AgendaView',
    component: AgendaView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
