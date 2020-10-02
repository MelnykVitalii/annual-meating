import { createWebHistory, createRouter } from 'vue-router'
import speakerList from '@/components/speakerList/speakerList'
import SpeakerView from '@/components/speakerView/speakerView'
import Dashboard from '@/components/dashboard/dashboard'
import AgendaList from '@/components/agendaList/agendaList'
import Form from '@/components/form/form'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/list',
    name: 'speakerList',
    component: speakerList
  },
  {
    path: '/agenda',
    name: 'agendaList',
    component: AgendaList
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/view/:id',
    name: 'speakerView',
    component: SpeakerView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
