<template>
  <div class="table-wrapper">
    <h3>
      Summary
    </h3>
    <b-row>
      <b-col>
        <table>
          <tr style="margin: 10px;">
            <td v-for="f of fields" :key="f">
              <b>{{ f }}</b>
            </td>
          </tr>
          <tr v-for="s of sum" :key="s.id">
            <td>{{ s.title }}</td>
            <td>{{ s.pending }}</td>
            <td>{{ s.reject }}</td>
            <td>{{ s.decline }}</td>
            <td>{{ s.hire }}</td>
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
      company_id: 0,
      status: [
        "Pending",
        "Reject",
        "Accept",
        "In progress",
        "Interview",
        "Decline",
        "Hired"
      ],
      sum: [],
      fields: ["Position", "Pending", "Reject", "Decline", "Hired"]
    };
  },
  mounted() {
    const { company_id } = this.$route.query;
    if (company_id) {
      this.company_id = company_id;
      fetch(`${API_URL}/positions/getSummary?company_id=${company_id}`)
        .then(response => response.json())
        .then(({ data }) => {
          this.sum = data;
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
