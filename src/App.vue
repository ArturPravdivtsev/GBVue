<template>
  <v-app>
    <v-app-bar app>
      <v-btn plain to="/dashboard">Dashboard</v-btn>
      <v-btn plain to="/about">About</v-btn>
      <v-btn plain to="/404">404</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <transition name="fade">
          <Modal
            v-if="modalShown"
            :name="modalShown"
            :settings="modalSettings"
          />
        </transition>
        <router-view />
        <Context />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Context from "./components/Context.vue";
export default {
  name: "App",
  components: {
    Modal: () => import("./components/modals/Modal"),
    Context,
  },
  data() {
    return {
      modalShown: false,
      modalSettings: {},
    };
  },
  methods: {
    // ...mapActions([
    //   'fetchData'
    // ]),
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
    onShown({ name, settings }) {
      console.log(name);
      this.modalShown = name;
      this.modalSettings = settings;
    },
    onClose() {
      this.modalShown = "";
    },
  },
  mounted() {
    // this.fetchListData(2)
    this.$modal.EventBus.$on("show", this.onShown);
    this.$modal.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShown);
    this.$modal.EventBus.$off("close", this.onClose);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>