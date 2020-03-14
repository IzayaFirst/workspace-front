<template>
  <div class="table-wrapper">
    <h3>
      Apply History
    </h3>
    <b-row style="margin-top: 15px;">
      <b-col>
        <table>
          <tr style="margin: 10px;">
            <td v-for="field of fields" :key="field">
              <b>{{ field }}</b>
            </td>
          </tr>
          <tr v-for="a of apply" :key="a.candidate_id">
            <td>{{ a.title }}</td>
            <td>{{ a.company_name }}</td>
            <td>{{ a.job_tech_field }}</td>
            <td>{{ a.job_level }}</td>
            <td>{{ a.status }}</td>
            <td style="text-align: center;">
              <b-button
                size="sm"
                v-b-modal="'my-modal'"
                @click="
                  () => {
                    feedback = a.apply_position_id;
                  }
                "
                variant="success"
                v-if="a.status !== 'Hired'"
              >
                Feedback
              </b-button>
              <span v-else>-</span>
            </td>
          </tr>
        </table>

        <b-modal id="my-modal" title="Give us feedback !!" @ok="handleOk">
          <b-form-group label="Feedback" label-for="name-input">
            <b-form-input
              id="name-input"
              v-model="fdetail"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Rating" label-for="name-input">
            <b-form-input
              type="number"
              id="name-input"
              v-model="rating"
              required
            ></b-form-input>
          </b-form-group>
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import API_URL from "../data-service/constant";

export default {
  name: "apply_history",
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
      feedback: 0,
      fdetail: "",
      rating: 0,
      fields: [
        "Job Position",
        "Company name",
        "Technology field",
        "Job level",
        "Apply Status",
        "Feedback"
      ]
    };
  },
  mounted() {
    const { candidate_id } = this.$route.query;
    if (candidate_id) {
      this.candidate_id = candidate_id;
      fetch(`${API_URL}/positions/applyWhat?candidate_id=${candidate_id}`)
        .then(response => response.json())
        .then(({ data }) => {
          this.apply = data;
        })
        .catch(err => err);
    }
  },
  methods: {
    handleOk() {
      if (this.fdetail.length > 0 && this.feedback) {
        const params = `candidate_id=${this.candidate_id}&apply_position_id=${this.feedback}&
       feedback=${this.fdetail}&rating=${this.rating}`;
        fetch(`${API_URL}/positions/addFeedback?${encodeURIComponent(params)}`)
          .then(response => response.json())
          .then(({ data }) => {
            this.apply = data;
          })
          .catch(err => err);
      }
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
