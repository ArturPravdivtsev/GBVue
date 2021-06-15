<template>
  <div>
    <v-row>
      <v-col>
        <div class="text-h5 text-md-h3">My personal costs</div>
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
      <v-col>DIAGRAM</v-col>
    </v-row>
  </div>
</template>

<script>
import PaymentsList from "../components/PaymentsList";
import PaymentForm from "../components/PaymentForm";
// import Pagination from "../components/Pagination";
// import Modal from "../components/modals/Modal";

import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  components: {
    PaymentsList,
    PaymentForm,
    // Modal,
    // Pagination,
  },
  data() {
    return {
      modalFlag: false,
      pageNumber: 1,
      perPage: 3,
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