<template>
  <div :title="$t('visit_reservation.confirmation.title')">
    <label for="confirmationCode">Wprowadź kod potwierdzenia wizyty</label>
    <input
      id="confirmationCode"
      v-model="confirmationCode">
    <button @click.left="confirmVisit">Potwierdź</button>
  </div>
</template>

<script>
export default {
  name: 'Confirmation',
  props: {
    visitId: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      confirmationCode: 0
    }
  },
  methods: {
    confirmVisit () {
      this.axios
        .post('delegate/services/guest/visit/' + this.$props.visitId + '/code/' + this.$data.confirmationCode)
        .then(response => {
          console.log('Potwierdzono')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
