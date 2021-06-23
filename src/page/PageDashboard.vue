<template>
  <div>
    <v-row>
      <v-col>
        <div class="text-h5 text-md-h3 my-8">My personal costs</div>
        <v-dialog v-model="modalFlag">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark @click="openModal" v-on="on">
              ADD PAYMENT
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <PaymentForm />
          </v-card>
        </v-dialog>
        <!-- <v-btn color="teal" dark @click="openModal">
          ADD PAYMENT
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <Modal v-if="modalFlag" :modal="'paymentform'" /> -->
        <PaymentsList :paymentsList="paginatedData" />
        <!-- <Pagination
          :listLength="getPaymentsList.length"
          @changePage="changePage"
        /> -->
      </v-col>
      <v-col>
        <pie-chart :data="fillData"></pie-chart>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PaymentsList from "../components/PaymentsList";
import PaymentForm from "../components/PaymentForm";
// import Pagination from "../components/Pagination";
// import Modal from "../components/modals/Modal";
import PieChart from "../plugins/chart/PieChart.js";

import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  components: {
    PaymentsList,
    PaymentForm,
    // Modal,
    // Pagination,
    PieChart,
  },
  data() {
    return {
      modalFlag: false,
      pageNumber: 1,
      perPage: 3,
      chartOptions: {
        hoverBorderWidth: 20,
      },
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    openModal() {
      this.modalFlag = true;
    },
    changePage(page) {
      this.pageNumber = page;
      this.fetchListData(this.pageNumber);
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
    paginatedData() {
      const start = (this.pageNumber - 1) * this.perPage;
      const end = start + this.perPage;
      return this.getPaymentsList.slice(start, end);
    },
    fillData() {
      let labels = [];
      let data = [];
      let backgroundColor = [];
      this.getPaymentsList.forEach((item) => {
        if (!labels.includes(item.category)) {
          labels.push(item.category);
          data.push(item.value);
          backgroundColor.push(
            "#" + ((Math.random() * 0xffffff) << 0).toString(16)
          );
        }
      });
      return {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels,
        datasets: [
          {
            label: "Data One",
            backgroundColor,
            data,
          },
        ],
      };
    },
  },
  mounted() {
    // this.fetchData();
    this.fetchListData(this.pageNumber);
    if (this.$route.params.category) {
      this.showForm = true;
    }
  },
};
</script>

<style>
</style>