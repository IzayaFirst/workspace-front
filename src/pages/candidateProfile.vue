<template>
  <div class="profile-page">
    <b-container>
      <b-card>
        <b-row>
          <b-col cols="5">
            <h2>
              {{ candidateProfile.candidate_name }}
              {{ candidateProfile.candidate_lastname }}
            </h2>
            <h5>
              {{candidateProfile.seniority}}, {{candidateProfile.technology_field}}
            </h5>
            <h6>
              Earning salary: {{candidateProfile.current_salary}} 
            </h6>
            <h6>
              Expected salary: {{candidateProfile.expected_salary}} 
            </h6>
            <div style="margin-top: 40px;">
              <b>Birth day: </b>
              {{ formatDate(candidateProfile.date_of_birth) }}
            </div>
            <div>
              <b>Gender: </b>
              {{ candidateProfile.gender }}
            </div>
            <div>
              <b>Contact Number: </b>
              {{ candidateProfile.telephone }}
            </div>
            <div>
              <b>Email: </b>
              {{ candidateProfile.email }}
            </div>
            <div>
              <b>Willing to work aboard: </b>
              {{ candidateProfile.able_to_work_aboard ? "Yes": "No"}}
            </div>
          </b-col>
          <b-col cols="7">d</b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment from "moment";

export default {
  mounted() {
    const { candidate_id } = this.$route.query;
    if (candidate_id) {
      this.getProfile(candidate_id);
    }
  },
  computed: {
    ...mapState({
      candidateProfile: ({ candidate }) => candidate.candidateFields,
      educations: ({ candidate }) => candidate.educations,
      archeivements: ({ candidate }) => candidate.archeivements,
      workExperiences: ({ candidate }) => candidate.workExperiences,
      skills: ({ candidate }) => candidate.skills,
      candidateLanguage: ({ candidate }) => candidate.candidateLanguage
    })
  },
  methods: {
    ...mapActions({
      getProfile: "getProfile"
    }),
    formatDate(date) {
      return moment(date).format("ll");
    }
  }
};
</script>

<style>
.profile-page {
  margin: 20px 0;
}
</style>
