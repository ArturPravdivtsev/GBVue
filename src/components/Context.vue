<template>
  <v-card class="context" max-width="100" outlined v-if="shown" :style="styles">
    <v-list-item v-for="item in items" :key="item.text" @click="clicked(item)">
      <v-list-item-content>{{ item.text }}</v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      shown: false,
      y: 0,
      x: 0,
      width: 0,
    };
  },
  methods: {
    clicked(item) {
      item.action();
      this.onClose();
    },
    onShow({ items, caller }) {
      this.shown = true;
      this.items = items;

      this.setPosition(caller);
    },
    onClose() {
      this.shown = false;
      this.items = [];
    },
    setPosition(caller) {
      const position = caller.getBoundingClientRect();
      console.log(position);
      this.y = position.bottom;
      this.x = position.left;
      this.width = position.width;
    },
  },
  computed: {
    styles() {
      return {
        top: `${this.y - 60}px`,
        left: `${this.x + this.width}px`,
      };
    },
  },
  mounted() {
    this.$context.EventBus.$on("show", this.onShow);
    this.$context.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("show", this.onShow);
    this.$context.EventBus.$off("close", this.onClose);
  },
};
</script>

<style>
.v-card.context {
  position: absolute;
  top: 0;
  left: 0;
}
</style>