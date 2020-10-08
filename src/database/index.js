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
  return speakersListData.sort((a, b) =>
    a.first_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
  )
}

function getSpeakerListLength() {
  return speakersListData.length
}

function getSpeakerById(id) {
  return speakersListData.find((x) => x.id === +id)
}

export {
  getAgendaList,
  getAgendaByIndex,
  getAgendaById,
  getSpeakersList,
  getSpeakerListLength,
  getSpeakerById
}
