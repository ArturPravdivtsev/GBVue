<template>
  <div>
    <v-data-table
      :headers="tableHeaders"
      :items="paymentsList"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small @click="contextClick($event, item.id)">
          mdi-dots-horizontal
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  props: {
    paymentsList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapMutations(["deleteItem"]),
    contextClick(event, id) {
      console.log(id);
      const items = [
        {
          text: "Delete",
          action: () => {
            this.deleteItem(id);
          },
        },
        {
          text: "Edit",
          action: () => {
            this.$modal.show("PaymentForm", { id });
          },
        },
      ];
      this.$context.show({ event, items });
    },
  },
};
</script>

<style>
</style>