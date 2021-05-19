<template>
  <div>
    <button v-for="(page, idx) in pages" :key="idx" @click="changePage(idx)">
      {{ idx + 1 }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 5,
    };
  },
  props: {
    listLength: {
      type: Number,
    },
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.listLength / this.perPage);
    },
  },
};
</script>

<style>
</style>