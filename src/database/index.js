import agendaData from './agendaList'
import speakersListData from './speakersList'

function getAgendaList() {
  return agendaData
}

function getSpeakersList() {
  return speakersListData
}

function getSpeakerById(id) {
  return speakersListData.find((x) => x.id === +id)
}

export { getAgendaList, getSpeakersList, getSpeakerById }
