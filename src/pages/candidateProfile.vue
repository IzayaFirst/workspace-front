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
              {{ candidateProfile.seniority }},
              {{ candidateProfile.technology_field }}
            </h5>
            <h6>Earning salary: {{ candidateProfile.current_salary }}</h6>
            <h6>Expected salary: {{ candidateProfile.expected_salary }}</h6>
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
              {{ candidateProfile.able_to_work_aboard ? "Yes" : "No" }}
            </div>
          </b-col>
          <b-col cols="7">
            <div>
              <h3>Education</h3>
            </div>
            <div
              v-for="education of educations"
              :key="education.id"
              style="margin-bottom: 15px; padding: 5px;"
            >
              <b>{{ education.university }}</b
              ><br />
              <b>Major: {{ education.major }}</b>
              <div>Graduated: {{ formatDate(education.graduate_date) }}</div>
              <div>Degree: {{ education.degree }} ({{ education.gpa }})</div>
            </div>
            <div>
              <h3>Work Experience</h3>
            </div>
            <div
              v-for="work of workExperiences"
              :key="work.id"
              style="margin-bottom: 15px; padding: 5px;"
            >
              <b>{{ work.position }}</b
              ><br />
              <b>at {{ work.company }} {{ work.location }}</b>
              <div>{{ work.description }}</div>
              <div>
                Date: {{ formatDate(work.start_date) }} to
                {{ formatDate(work.end_date) }}
              </div>
            </div>
            <div>
              <h3>Archeivements</h3>
            </div>
            <div
              v-for="arch of archeivements"
              :key="arch.id"
              style="margin-bottom: 15px; padding: 5px;"
            >
              <b>{{ arch.title }} ({{ formatDate(arch.archieve_date) }})</b>
            </div>
            <div>
              Language:
              <b-badge
                v-for="lang of candidateLanguages"
                :key="lang.id"
                variant="light"
                style="margin-bottom: 15px; padding: 5px; margin-left: 10px;"
              >
                {{ lang.language }}
              </b-badge>
            </div>
            <b-badge
              v-for="skill of skills"
              :key="skill.id"
              variant="light"
              style="margin-bottom: 15px; padding: 5px; margin-right: 10px;"
            >
              {{ skill.skill_name }} ({{ skill.skill_experience }} years)
            </b-badge>
          </b-col>
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
      console.log(this);
    }
  },
  computed: {
    ...mapState({
      candidateProfile: ({ candidate }) => candidate.candidateFields,
      educations: ({ candidate }) => candidate.educations,
      archeivements: ({ candidate }) => candidate.archeivements,
      workExperiences: ({ candidate }) => candidate.workExperiences,
      skills: ({ candidate }) => candidate.skills,
      candidateLanguages: ({ candidate }) => candidate.candidateLanguages
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
