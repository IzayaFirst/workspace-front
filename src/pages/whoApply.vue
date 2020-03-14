<template>
  <div class="table-wrapper">
    <h3>
      Candidate list for
    </h3>

    <b-row>
      <b-col>
        <table>
          <tr style="margin: 10px;">
            <td v-for="f of fields" :key="f">
              <b>{{ f }}</b>
            </td>
          </tr>
          <tr v-for="(a,index) of apply" :key="a.candidate_id">
            <td>{{ a.candidate_name }}</td>
            <td>{{ a.telephone }}</td>
            <td>{{ a.email }}</td>
            <td>{{ a.seniority }}</td>
            <td>{{ a.technology_field }}</td>
            <td>{{ a.expected_salary }} THB</td>
            <td>{{ a.job_level }}</td>
            <td>{{ a.job_tech_field }}</td>
            <td>
                <b-form-select size="sm" v-model="apply[index].status" :options="status"></b-form-select>
             </td>
            <td><a href="">See Profile</a></td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import API_URL from "../data-service/constant";

export default {
  name: "who_apply",
  data: function() {
    return {
      status: [
        "Pending",
        "Reject",
        "Accept",
        "In progress",
        "Interview",
        "Decline",
        "Hired"
      ],
      apply: [],
      candidate_id: 1,
      fields: [
        "Candidate name",
        "Telephone",
        "Email",
        "seniority",
        "Technology field",
        "Expected salary",
        "Job level",
        "Field",
        "Apply Status",
        "Profile"
      ]
    };
  },
  mounted() {
    const { position_id } = this.$route.query;
    if (position_id) {
      this.position_id = position_id;
      fetch(`${API_URL}/positions/whoApply?position_id=${position_id}`)
        .then(response => response.json())
        .then(({ data }) => {
          console.log(data);
          this.apply = data;
        })
        .catch(err => err);
    }
  }
};
</script>
<style lang="css">
table {
  font-size: 12px;
}
table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 20px !important;
}
.table-wrapper {
  width: 90%;
  margin: 30px auto;
}
</style>
