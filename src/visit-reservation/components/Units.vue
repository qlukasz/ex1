<template>
  <div title="$t('visit_reservation.units.title')">
    <v-client-table
      :data="tableData"
      :columns="columns"
      :options="options">
      <div
        slot="actions"
        slot-scope="props">
        <router-link
          :to="{name: 'CaseTypes', params: {parentId: props.row.id}}"
          class="btn btn-link"
          tag="button">{{ $t('visit_reservation.units.cases') }}</router-link>
        <router-link
          :to="{name: 'TimeTables', params: {parentId: props.row.id}}"
          class="btn btn-link"
          tag="button">{{ $t('visit_reservation.units.timeTables') }}</router-link>
          <!--<router-link-->
          <!--:to="{name: 'Addresses'}"-->
          <!--tag="button">Wyświetl adres</router-link>-->
      </div>
    </v-client-table>
  </div>
</template>

<script>

export default {
  name: 'Units',
  components: {},
  props: {
    parentId: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      columns: ['name', 'actions'],
      tableData: [],
      options: {
        headings: {
          name: 'Nazwa',
          actions: 'Operacje'
        },
        columnsClasses: {
          id: 'hidden',
          actions: 'text-center width-20'
        },
        texts: this.$t('vue_tables')
      }
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.axios
        .get('delegate/services/subjects/subjectList/' + this.$props.parentId)
        .then(response => {
          this.$data.tableData = response.data
        })
    }
  }
}
</script>

<style scoped>

</style>
