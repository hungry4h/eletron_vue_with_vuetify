<template>
  <div class="pdf-paginator">
    <template v-if="pageCount">
        <input
          :value="value"
          @input="input"
          min="1"
          :max="pageCount"
          type="number"
        ><span class="slash ma-3">/</span><span class="ma-4 page-count">{{ pageCount }}</span>
    </template>
    <input v-else type="number" />
  </div>
</template>

<script>
export default {
  name: 'PDFPaginator',

  props: {
    value: Number,
    pageCount: Number,
  },

  methods: {
    input(event) {
      this.$emit('input', parseInt(event.target.value, 10));
    },
  },

  watch: {
    pageCount() {
      this.$emit('input', 1);
    },
  }
}
</script>

<style scoped>
input {
  background-color: aliceblue;
  text-align: center;
}
.page-count, .slash {
  color: white;
}
</style>
