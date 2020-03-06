export default {
  state: {
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
    }
  },
  getters: {},
  actions: {
    handleInputCandidateChange({ commit }, { id, e }) {
      console.log(' id, e ',  id, e )
      commit('setCandidateFieldsState', { id, value: e})
    }
  },
  mutations: {
    setCandidateFieldsState(state, { id, value}) {
      state.candidateFields[id] = value
    }
  }
};
