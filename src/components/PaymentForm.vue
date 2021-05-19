<template>
  <div>
    <input type="text" placeholder="Date" v-model="date" />
    <input type="text" placeholder="Category" v-model="category" />
    <input type="text" placeholder="Price" v-model.number="price" />
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      category: "",
      price: 0,
    };
  },
  methods: {
      save() {
          const { date, category, price } = this
          this.$emit('add', { date, category, price })
      }
  }
};
</script>

<style>
</style>