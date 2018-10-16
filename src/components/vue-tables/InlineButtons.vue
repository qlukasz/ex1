<template>
  <div class="dt-inline-buttons">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'InlineButtons',
  mounted: function () {
    this.initButtons()
  },
  methods: {
    initButtons () {
      console.log(this.$el)
      for (const button of this.$el.children) {
        button.classList.add('dt-menu-option')
      }
    }
  }
}
</script>

<style scoped>

</style>
