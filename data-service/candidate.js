import API_URL from "./constant.js";

export default {
  createCandidate({
    user_name,
    password,
    candidate_name,
    candidate_lastname,
    date_of_birth,
    gender,
    telephone,
    email,
    able_to_work_aboard,
    facebook,
    linkedin,
    skype,
    github,
    current_salary,
    expected_salary,
    seniority,
    technology_field
  }) {
    return fetch(`${API_URL}/candidates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_name,
        password,
        candidate_name,
        candidate_lastname,
        date_of_birth,
        gender,
        telephone,
        email,
        able_to_work_aboard,
        facebook,
        linkedin,
        skype,
        github,
        current_salary,
        expected_salary,
        seniority,
        technology_field
      })
    });
  }
};
