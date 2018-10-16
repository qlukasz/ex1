<template>
  <div class="tile">
    <h2>{{ title }}</h2>
    <div class="portlet-tile-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortletWrapper',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
