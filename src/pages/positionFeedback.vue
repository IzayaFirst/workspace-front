<template>
  <div class="table-wrapper">
    <h3>
      Feedback
    </h3>
    <b-row>
      <b-col>
        <table>
          <tr style="margin: 10px;">
            <td v-for="f of fields" :key="f">
              <b>{{ f }}</b>
            </td>
          </tr>
          <tr v-for="(f) of feedback" :key="f.id">
            <td>{{ f.name }}</td>
            <td>{{ f.comment }}</td>
            <td>{{ f.rating }}</td>
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
      feedback: [],
      fields: [
        "Candidate name",
        "Comment",
        "Rating",
      ]
    };
  },
  mounted() {
    const { position_id } = this.$route.query;
    if (position_id) {
      this.position_id = position_id;
      fetch(`${API_URL}/positions/getFeedback?position_id=${position_id}`)
        .then(response => response.json())
        .then(({ data }) => {
          this.feedback = data;
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
