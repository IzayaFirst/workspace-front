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
    candidateLanguages: [],
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
          archeivements,
          candidateLanguages,
          educations,
          skills,
          workExperiences,
        } = response.data
        const [candidate] = candidateProfile
        Object.keys(candidate).forEach((candidateAttribute) => {
          commit('setCandidateFieldsState', {
            id: candidateAttribute,
            value: candidate[candidateAttribute]
          })
        })
        commit('setState', { key: 'educations', value: educations})
        commit('setState', { key: 'archeivements', value: archeivements})
        commit('setState', { key: 'skills', value: skills})
        commit('setState', { key: 'workExperiences', value: workExperiences})
        commit('setState', { key: 'candidateLanguages', value: candidateLanguages})

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
    setState(state, { key, value}) {
      state[key] = value
    },
    setCandidateFieldsState(state, { id, value}) {
      state.candidateFields[id] = value
    }
  }
};
