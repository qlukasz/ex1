<template>
  <dropdown
    ref="dropdown"
    v-model="visible"
    append-to-body="append-to-body">
    <button class="btn btn-link dropdown-toggle">{{ label }}<span class="caret"/>
    </button>
    <template
      slot="dropdown"
      class="dropdown-menu">
      <slot/>
    </template>
  </dropdown>
</template>

<script>
export default {
  name: 'DropdownButtons',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted: function () {
    this.initButtons()
  },
  methods: {
    initButtons () {
      const ul = this.$el.querySelector('ul.dropdown-menu')
      const buttons = ul.children
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]
        button.classList.add('dt-menu-option')
        const wrapper = document.createElement('li')
        button.parentNode.insertBefore(wrapper, button)
        wrapper.appendChild(button)
      }
    }
  }
}
</script>

<style scoped>
  table .btn-group.dropdown {
    float: none;
  }
</style>
