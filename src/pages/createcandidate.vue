<template>
  <div class="workspace-container">
    <b-container>
      <candidate-form></candidate-form>
    </b-container>
  </div>
</template>
<script>
import candidateForm from '../components/candidateForm';

export default {
  name: 'create-candidate',
  components: {
    candidateForm,
  }
}
</script>