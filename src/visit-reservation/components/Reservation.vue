<template>
  <div :title="$t('visit_reservation.reservation.title')">
    <div v-text="timeFrame.id"/>
    <label for="description">Opis szczegółowy</label><br>
    <textarea id="description"/>
  </div>
</template>
<script>
class Client {
  constructor (name) {
    this.apartment = null
    this.city = null
    this.cliBuilding = null
    this.email = null
    this.id = 0
    this.name = null
    this.nip = null
    this.pesel = null
    this.phone = null
    this.postalCode = null
    this.street = null
    this.surname = null
    this.type = 'PERSON'
    this.userId = 0
  }
}

class Visit {
  constructor (timeFrame, description, client) {
    this.id = null
    this.status = 'NEW'
    this.dateTo = timeFrame.dateFrom
    this.dateFrom = timeFrame.dateTo
    this.client = client
  }
}

export default {
  name: 'Reservation',
  components: {},
  props: {
    timeFrame: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      columns: ['id', 'stationId', 'dateFrom', 'dateTo', 'actions'],
      tableData: [],
      options: {
        headings: {
          stationId: 'ID stanowiska',
          dateFrom: 'Początek',
          dateTo: 'Koniec',
          actions: 'Operacje'
        },
        uniqueKey: 'id'
      }
    }
  },
  mounted () {
    console.log(this.$props.timeFrame)
  },
  methods: {
    saveVisit () {
      this.axios
        .post('delegate/services/guest/timeframe/' + this.$props.timeFrame.id + '/visit', {
          visitDTO: new Visit(this.$props.timeFrame, 'asdad', new Client())
        })
        .then(response => {
          console.log('SUKCES')
        })
    }
  }
}
</script>

<style scoped>

</style>
