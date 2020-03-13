<template>
  <div class="container" style="margin-top: 100px;">
    <div>
      <h3>
        Position Detail
      </h3>
    </div>
    <b-row style="margin-top: 25px;">
      <b-col v-if="position">
        <b-card :title="position.title">
          <template v-slot:header>
            <b-button size="sm" variant="success" style="float: right">
              Apply
            </b-button>
          </template>
          <b-card-text>
            {{ position.job_level }}
          </b-card-text>
          <b-card-text>
            {{ position.description }}
          </b-card-text>
          <b-badge variant="dark" style="margin-right: 10px;">{{
            position.tech_field
          }}</b-badge>
          <b-badge variant="dark">{{ position.education }}</b-badge>
          <template v-slot:footer>
            <small style="color: black;">{{ position.company_name }}</small>
            <small style="color: black;">{{
              position.company_description
            }}</small>
            <div>
              <small style="color: black;">{{
                position.company_address
              }}</small>
            </div>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import API_URL from "../data-service/constant";

export default {
  name: "position",
  data: function() {
    return {
      position: null
    };
  },
  mounted() {
    const { position_id } = this.$route.query;
    if (position_id) {
      fetch(`${API_URL}/positions/findById?position_id=${position_id}`)
        .then(response => response.json())
        .then(({ data }) => {
          this.position = data[0];
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
    width: 768px !important;
    margin: 0 auto;
  }
</style>
