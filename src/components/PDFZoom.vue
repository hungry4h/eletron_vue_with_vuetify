<template>
  <div class="pdf-zoom">
    <v-btn small flat @click.prevent.stop="zoomIn" :disabled="isDisabled"><v-icon>fas fa-search-plus</v-icon></v-btn>
    <v-btn small flat @click.prevent.stop="zoomOut" :disabled="isDisabled"><v-icon>fas fa-search-minus</v-icon></v-btn>
    <v-btn small flat @click.prevent.stop="fitWidth" :disabled="isDisabled"><v-icon>fas fa-expand-arrows-alt</v-icon></v-btn>
    <v-btn small flat @click.prevent.stop="fitAuto" :disabled="isDisabled"><v-icon>fas fa-compress-arrows-alt</v-icon></v-btn>
  </div>
</template>

<script>
export default {
  name: 'PDFZoom',

  props: {
    scale: {
      type: Number,
    },
    increment: {
      type: Number,
      default: 0.25,
    },
  },

  computed: {
    isDisabled() {
      return !this.scale;
    },
  },

  methods: {
    zoomIn() {
      this.updateScale(this.scale + this.increment);
    },

    zoomOut() {
      if (this.scale <= this.increment) return;
      this.updateScale(this.scale - this.increment);
    },

    updateScale(scale) {
      this.$emit('change', {scale});
    },

    fitWidth() {
      this.$emit('fit', 'width');
    },

    fitAuto() {
      this.$emit('fit', 'auto');
    },
  },
}
</script>

<style scoped>

</style>