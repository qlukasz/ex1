<template>
  <div title="$t('visit_reservation.timeTables.title')">
    <v-client-table
      :data="tableData"
      :columns="columns"
      :options="options">
      <div
        slot="actions"
        slot-scope="props">
        <router-link
          :to="{name: 'Reservation', params: {timeFrame: props.row}}"
          tag="button">{{ $t('visit_reservation.timeTables.reservation') }}</router-link>
      </div>
    </v-client-table>
  </div>
</template>

<script>
export default {
  name: 'TimeTables',
  components: {},
  props: {
    subjectId: {
      type: Number,
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
        uniqueKey: 'id',
        texts: this.$t('vue_tables')
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.getAllAvailableTimeFrames()
    },
    getAllAvailableTimeFrames: function () {
      this.axios
        .get('delegate/services/queues/subject/' + this.$props.subjectId + '/queues')
        .then(response => {
          response.data.forEach((queue) => {
            this.getStationsForQueue(queue.id)
          })
        })
    },
    getStationsForQueue: function (queueId) {
      this.axios
        .get('delegate/services/stations/queue/' + queueId)
        .then(response => {
          response.data.forEach((station) => {
            this.insertAvailableTimeFramesForStation(station.id)
          })
        })
    },
    insertAvailableTimeFramesForStation: function (stationId) {
      this.axios
        .get('delegate/services/stations/timeframe/station/' + stationId)
        .then(response => {
          this.$data.tableData.push(...response.data)
        })
    }

  }
}
</script>

<style scoped>

</style>
