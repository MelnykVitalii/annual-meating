import agendaData from './agendaList'
import speakersListData from './speakersList'

function getAgendaList() {
  return agendaData
}

function getAgendaByIndex(index) {
  return agendaData[index]
}

function getAgendaById(id) {
  return agendaData.find((x) => x.id === +id)
}

function getSpeakersList() {
  return speakersListData
}

function getSpeakerById(id) {
  return speakersListData.find((x) => x.id === +id)
}

export {
  getAgendaList,
  getAgendaByIndex,
  getAgendaById,
  getSpeakersList,
  getSpeakerById
}
