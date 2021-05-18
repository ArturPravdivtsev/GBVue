<template>
  <div class="hello">
    <input v-model.number="op1" type="text" />
    <input v-model.number="op2" type="text" />
    = {{ Number(result) }}
    <div>
      <button @click="calculate('sum')">+</button>
      <button @click="calculate('sub')">-</button>
      <button @click="calculate('div')">/</button>
      <button @click="calculate('mul')">*</button>
      <button @click="calculate('exp')">X<sup>y</sup></button>
      <button @click="calculate('intdiv')">\</button>
    </div>
    <br />
    <input type="checkbox" id="show" v-model="showKeyboard" />
    <label for="show">Отобразить экранную клавиатуру</label>
    <div v-if="showKeyboard">
      <div>
        <span v-for="(item, idx) in buttonsArr" :key="idx">
          <button @click="write(item)">{{ item }}</button>
        </span>
        <button @click="del">&larr;</button>
      </div>
      <div>
        <input type="radio" id="one" value="one" v-model="operand" />
        <label for="one">Операнд 1</label>
        <br />
        <input type="radio" id="two" value="two" v-model="operand" />
        <label for="two">Операнд 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    operand: "",
    op1: "",
    op2: "",
    result: 0,
    buttonsArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    showKeyboard: false,
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
    write(item) {
      if (this.operand === "one") {
        this.op1 += String(item);
      } else if (this.operand === "two") {
        this.op2 += String(item);
      }
      this.op1 = Number(this.op1);
      this.op2 = Number(this.op2);
    },
    del() {
      if (this.operand === "one") {
        this.op1 = String(this.op1).substring(0, String(this.op1).length - 1);
      } else if (this.operand === "two") {
        this.op2 = String(this.op2).substring(0, String(this.op2).length - 1);
      }
      this.op1 = Number(this.op1);
      this.op2 = Number(this.op2);
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
