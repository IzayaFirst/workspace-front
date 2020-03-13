<template>
  <div class="container" style="margin-top: 35px;">
    <h3>All Job ({{ jobs.length }})</h3>
    <div class="search-bar"></div>
    <b-row>
      <b-col>
        <b-card
          @click="goToPositionDetail(job.position_id)"
          v-for="job of jobs"
          :key="job.position_id"
          bg-variant="dark"
          text-variant="white"
          :title="job.title"
          style="margin-top: 20px;"
          title-tag="h3"
        >
          <b-card-text>
            {{ job.job_level }}
          </b-card-text>
          <b-card-text style="font-size: 14px">
            {{ job.company_name }}
          </b-card-text>
          <b-card-text style="font-size: 14px">
            {{ job.address }}
          </b-card-text>
          <div>
            <b-badge variant="light" style="margin-right: 10px;">{{
              job.tech_field
            }}</b-badge>
            <b-badge variant="light">{{ job.education }}</b-badge>
          </div>
          <template v-slot:footer>
            <small style="color: white;">{{
              Moment(job.created_at).fromNow()
            }}</small>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Moment from "moment";
import API_URL from "../data-service/constant";

export default {
  data: function() {
    return {
      jobs: [],
      degree: null,
      field: null,
      level: null
    };
  },
  mounted() {
    this.requestAllJob();
  },
  methods: {
    Moment,
    goToPositionDetail(position_id) {
      this.$router.push({ path: "position", query: { position_id, } });
    },
    requestAllJob() {
      fetch(
        `${API_URL}/positions?degree=${this.degree}&field=${this.field}&level=${this.level}`
      )
        .then(response => response.json())
        .then(({ data }) => {
          this.jobs = data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
<style lang="css">
.container {
  width: 768px;
  margin: 0 auto;
}
</style>
