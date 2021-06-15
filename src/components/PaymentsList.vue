<template>
  <div>
    <v-data-table :headers="tableHeaders" :items="paymentsList"> </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 0,
      left: 0,
      tableHeaders: [
        { text: "#", value: "id" },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "value" },
      ],
    };
  },
  props: {
    paymentsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>