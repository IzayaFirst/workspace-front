import Vue from 'vue'
import candidateDataService from '../data-service/candidate';

export default {
  state: {
    candidate_id: 0,
    candidateFields: {
      user_name: "",
      password: "",
      candidate_name: "",
      candidate_lastname: "",
      date_of_birth: "",
      gender: "Male",
      telephone: "",
      email: "",
      able_to_work_aboard: false,
      facebook: "",
      linkedin: "",
      skype: "",
      github: "",
      current_salary: 0,
      expected_salary: 0,
      seniority: "Junior Level",
      technology_field: "Business Development"
    },
    educations: [],
    archeivements: [],
    workExperiences: [],
    skills: [],
    candidateLanguage: [],
  },
  getters: {},
  actions: {
    async getProfile({ commit }, candidate_id) {
      commit('setCandidateId', candidate_id)
      candidateDataService.getCandidateProfile(candidate_id).then((result) => {
        return result.json()
      }).then((response) => {
        const {
          candidateProfile,
        } = response.data
        const [candidate] = candidateProfile
        console.log('candidate', candidate)
        Object.keys(candidate).forEach((candidateAttribute) => {
          commit('setCandidateFieldsState', {
            id: candidateAttribute,
            value: candidate[candidateAttribute]
          })
        })
      }).catch((err) => {
        console.log('err', err)
      })
    },
    handleInputCandidateChange({ commit }, { id, e }) {
      console.log(' id, e ',  id, e )
      commit('setCandidateFieldsState', { id, value: e})
    },
    async createCandidate({ state }) {
      candidateDataService.createCandidate(state.candidateFields).then((result) => {
        return result.json()
      }).then((response) => {
        console.log('result', response)
      }).catch((err) => {
        console.log('err', err)
      })
    }
  },
  mutations: {
    setCandidateId(state, candidate_id) {
      state.candidate_id = candidate_id;
    },
    setCandidateFieldsState(state, { id, value}) {
      state.candidateFields[id] = value
    }
  }
};
