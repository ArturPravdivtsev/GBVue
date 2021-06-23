<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <header>Name</header>
    <PaymentForm v-if="name === 'PaymentForm'" :id="settings.id" />
    <v-btn @click="onClose">Close</v-btn>
  </div>
</template>

<script>
import PaymentForm from "../PaymentForm";
export default {
  components: {
    PaymentForm,
  },
  props: {
    name: String,
    settings: Object,
  },
  methods: {
    onClose() {
      this.$modal.close();
    },
  },
  mounted() {
    console.log(this.name);
  },
};
</script>

<style>
</style>