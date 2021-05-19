<template>
  <div>
    <table>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      <tr v-for="(item, index) in paymentsList" :key="index">
        <td>{{ index+1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
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