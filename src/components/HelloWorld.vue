<template>
  <div class="hello">
    <input v-model.number="op1" type="text" />
    <input v-model.number="op2" type="text" />
    = {{ result }}
    <div>
      <button @click="calculate('sum')">+</button>
      <button @click="calculate('sub')">-</button>
      <button @click="calculate('div')">/</button>
      <button @click="calculate('mul')">*</button>
      <button @click="calculate('exp')">X<sup>y</sup></button>
      <button @click="calculate('intdiv')">\</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
  }),
  methods: {
    calculate(op) {
      console.log(op);
      switch (op) {
        case "sum":
          this.result = this.op1 + this.op2;
          break;
        case "sub":
          this.result = this.op1 - this.op2;
          break;
        case "div":
          this.result = this.op1 / this.op2;
          break;
        case "mul":
          this.result = this.op1 * this.op2;
          break;
        case "exp":
          this.result = Math.pow(this.op1, this.op2);
          break;
        case "intdiv":
          this.result = Math.floor(this.op1 / this.op2);
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
