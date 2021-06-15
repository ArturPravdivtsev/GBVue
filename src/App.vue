<template>
  <div id="app">
    <header>My personal costs</header>
    <main>
      <button @click="toggleForm">ADD NEW COST+</button>
      <PaymentForm v-if="showForm" @add="onDataAdded" />
      <PaymentsList :paymentsList="paginatedData" />
      <Pagination :listLength="paymentsList.length" @changePage="changePage" />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";
import Pagination from "./components/Pagination";
export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentForm,
    Pagination,
  },
  data() {
    return {
      paymentsList: [
        {
          date: "13.05.2021",
          category: "Education",
          price: 123,
        },
        {
          date: "14.05.2021",
          category: "Education",
          price: 1,
        },
        {
          date: "15.05.2021",
          category: "Education",
          price: 13,
        },
        {
          date: "16.05.2021",
          category: "Education",
          price: 12,
        },
        {
          date: "16.05.2021",
          category: "Education",
          price: 12,
        },
        {
          date: "16.05.2021",
          category: "Education",
          price: 12,
        },
        {
          date: "16.05.2021",
          category: "Education",
          price: 12,
        },
        {
          date: "16.05.2021",
          category: "Education",
          price: 12,
        },
        {
          date: "16.05.2021",
          category: "Education",
          price: 12,
        },
        {
          date: "16.05.2021",
          category: "Education",
          price: 12,
        },
      ],
      showForm: false,
      pageNumber: 0,
      perPage: 5,
    };
  },
  methods: {
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
    changePage(page) {
      this.pageNumber = page;
    },
  },
  computed: {
    paginatedData() {
      const start = this.pageNumber * this.perPage;
      const end = start + this.perPage;
      console.log(start)
      console.log(end)
      return this.paymentsList.slice(start, end);
    },
  },
};
</script>

<style lang="scss">
</style>
