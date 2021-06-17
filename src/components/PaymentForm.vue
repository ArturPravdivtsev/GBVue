<template>
  <div>
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="date"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          label="Date"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.dialog.save(date)">
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>
    <v-text-field v-model="category" label="Category" required></v-text-field>
    <v-text-field v-model="value" label="Value" required></v-text-field>

    <v-btn color="primary" @click="save">Save</v-btn>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      date: "",
      category: "",
      value: 0,
      modal: false,
    };
  },
  props: {
    id: Number,
  },
  methods: {
    ...mapMutations(["addData", "editData"]),
    save() {
      const { date, category, value, id } = this;
      if (this.id) {
        this.editData({ date, category, value, id });
      } else {
        this.addData({ date, category, value });
      }
    },
    formatDate(date) {
      var dd = date.getDate();
      if (dd < 10) dd = "0" + dd;
      var mm = date.getMonth() + 1;
      if (mm < 10) mm = "0" + mm;
      var yyyy = date.getFullYear();
      return dd + "." + mm + "." + yyyy;
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
  },
  mounted() {
    if (this.$route.params.category) {
      this.category = this.$route.params.category;
      this.date = this.formatDate(new Date());
      if (this.$route.query.value) {
        this.value = this.$route.query.value;
        this.save();
      }
    }
    if (this.id) {
      const item = this.getPaymentsList.find((item) => item.id === this.id);
      if (item) {
        this.date = item.date;
        this.category = item.category;
        this.value = item.value;
      }
    }
  },
};
</script>

<style>
</style>