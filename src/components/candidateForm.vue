<template>
  <div>
    <b-row>
      <b-col>
        <b-form-group id="user_name" label="Username:" label-for="user_name">
          <b-form-input
            id="user_name"
            type="text"
            :value="candidateFields.user_name"
            @input="handleInputCandidateChange({ id: 'user_name', e: $event })"
            placeholder="Enter Username"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="password" label="Password:" label-for="password">
          <b-form-input
            id="password"
            type="password"
            :value="candidateFields.password"
            @input="handleInputCandidateChange({ id: 'password', e: $event })"
            placeholder="Enter Password"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          id="candidate_name"
          label="First Name:"
          label-for="candidate_name"
        >
          <b-form-input
            id="candidate_name"
            type="text"
            :value="candidateFields.candidate_name"
            @input="
              handleInputCandidateChange({ id: 'candidate_name', e: $event })
            "
            placeholder="Enter First Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="candidate_lastname"
          label="Last Name:"
          label-for="candidate_lastname"
        >
          <b-form-input
            id="candidate_lastname"
            type="text"
            :value="candidateFields.candidate_lastname"
            @input="
              handleInputCandidateChange({
                id: 'candidate_lastname',
                e: $event
              })
            "
            placeholder="Enter Last Name"
          ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group
              id="date_of_birth"
              label="Date of birth:"
              label-for="date_of_birth"
            >
              <b-form-datepicker
                id="date_of_birth"
                :value="new Date(candidateFields.date_of_birth)"
                @context="
                  handleInputCandidateChange({
                    id: 'date_of_birth',
                    e: $event.activeDate
                  })
                "
                class="mb-2"
              ></b-form-datepicker> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="gender" label="Gender:" label-for="gender">
              <b-form-select
                id="date_of_birth"
                :value="candidateFields.gender"
                @input="handleInputCandidateChange({ id: 'gender', e: $event })"
              >
                <b-form-select-option
                  v-for="gender of genders"
                  :key="gender"
                  :value="gender"
                  >{{ gender }}</b-form-select-option
                >
              </b-form-select>
            </b-form-group></b-col
          >
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              id="telephone"
              label="Telephone:"
              label-for="telephone"
            >
              <b-form-input
                id="telephone"
                type="text"
                :value="candidateFields.telephone"
                @input="
                  handleInputCandidateChange({ id: 'telephone', e: $event })
                "
                placeholder="Enter telephone"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="email" label="Email:" label-for="email">
              <b-form-input
                id="email"
                type="email"
                :value="candidateFields.email"
                @input="handleInputCandidateChange({ id: 'email', e: $event })"
                placeholder="Enter Email"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group
          id="able_to_work_aboard"
          label="Willing to work aboard:"
          label-for="able_to_work_aboard"
          :horizontal="true"
        >
          <b-form-checkbox
            :switches="true"
            :checked="candidateFields.able_to_work_aboard"
            @change="
              handleInputCandidateChange({
                id: 'able_to_work_aboard',
                e: $event
              })
            "
          >
          </b-form-checkbox>
        </b-form-group>
        <b-row>
          <b-col>
            <b-form-group id="facebook" label="Facebook:" label-for="facebook">
              <b-form-input
                id="facebook"
                type="text"
                :value="candidateFields.facebook"
                @input="
                  handleInputCandidateChange({ id: 'facebook', e: $event })
                "
                placeholder="Enter Facebook"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-form-group id="linkedin" label="Linkedin:" label-for="linkedin">
      <b-form-input
        id="linkedin"
        type="text"
        :value="candidateFields.linkedin"
        @input="handleInputCandidateChange({ id: 'linkedin', e: $event })"
        placeholder="Enter Linkedin"
      ></b-form-input>
    </b-form-group>
    <b-form-group id="skype" label="Skype:" label-for="skype">
      <b-form-input
        id="skype"
        type="text"
        :value="candidateFields.skype"
        @input="handleInputCandidateChange({ id: 'skype', e: $event })"
        placeholder="Enter Skype"
      ></b-form-input>
    </b-form-group>
    <b-form-group id="github" label="Github:" label-for="github">
      <b-form-input
        id="github"
        type="text"
        :value="candidateFields.github"
        @input="handleInputCandidateChange({ id: 'github', e: $event })"
        placeholder="Enter Github"
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="current_salary"
      label="Current Salary:"
      label-for="current_salary"
    >
      <b-form-input
        id="current_salary"
        type="number"
        :value="candidateFields.current_salary"
        @input="handleInputCandidateChange({ id: 'current_salary', e: $event })"
        placeholder="Enter Current Salary"
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="expected_salary"
      label="Expected Salary:"
      label-for="expected_salary"
    >
      <b-form-input
        id="expected_salary"
        type="number"
        :value="candidateFields.expected_salary"
        @input="
          handleInputCandidateChange({ id: 'expected_salary', e: $event })
        "
        placeholder="Enter Expected Salary"
      ></b-form-input>
    </b-form-group>
    <b-form-group id="seniority" label="Seniority:" label-for="seniority">
      <b-form-select
        id="seniority"
        :value="candidateFields.seniority"
        @input="handleInputCandidateChange({ id: 'seniority', e: $event })"
      >
        <b-form-select-option v-for="s of seniorities" :key="s" :value="s">{{
          s
        }}</b-form-select-option>
      </b-form-select>
    </b-form-group>
    <b-form-group
      id="technology_field"
      label="Technology Field:"
      label-for="technology_field"
    >
      <b-form-select
        id="technology_field"
        :value="candidateFields.technology_field"
        @input="
          handleInputCandidateChange({ id: 'technology_field', e: $event })
        "
      >
        <b-form-select-option v-for="t of techFields" :key="t" :value="t">{{
          t
        }}</b-form-select-option>
      </b-form-select>
    </b-form-group>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { GENDER, SENIORITY, TECH_FIELD } from "../helpers/constant";

export default {
  name: "candidate-form",
  data: function() {
    return {
      genders: GENDER,
      seniorities: SENIORITY,
      techFields: TECH_FIELD
    };
  },
  computed: {
    ...mapState({
      candidateFields: ({ candidate }) => candidate.candidateFields
    })
  },
  methods: {
    ...mapActions({
      handleInputCandidateChange: "handleInputCandidateChange"
    })
  }
};
</script>
