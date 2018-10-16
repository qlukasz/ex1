<template>
  <div :title="$t('visit_reservation.caseTypes.title')">
    <v-client-table
      :data="tableData"
      :columns="columns"
      :options="options">
      <div
        slot="actions"
        slot-scope="props">
        <router-link
          :to="{name: 'TimeTables', params: {subjectId: props.row.id}}"
          tag="button">{{ $t('visit_reservation.caseTypes.timeTables') }}</router-link>
      </div>
      <div
        slot="child_row"
        slot-scope="props">
        <div class="row-info-element">
          <b>Label: </b>
          data
        </div>
      </div>
    </v-client-table>
  </div>
</template>

<script>
export default {
  name: 'CaseTypes',
  components: {},
  props: {
    parentId: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      columns: ['id', 'name', 'parentSubjectId', 'type', 'actions'],
      tableData: [],
      options: {
        headings: {
          name: 'Nazwa',
          parentSubjectId: 'ID rodzica',
          type: 'Typ',
          actions: 'Operacje'
        },
        uniqueKey: 'id'
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
