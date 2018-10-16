<template>
  <div :title="$t('visit_reservation.departments.sections')">
    <v-client-table
      :data="tableData"
      :columns="columns"
      :options="options">
      <div
        slot="actions"
        slot-scope="props">
        <router-link
          :to="{name: 'Units', params: {parentId: props.row.id}}"
          class="btn btn-link"
          tag="button">{{ $t('visit_reservation.departments.sections') }}</router-link>
          <!--<router-link-->
          <!--:to="{name: 'Addresses'}"-->
          <!--tag="button">Wyświetl adres</router-link>-->
      </div>
    </v-client-table>
  </div>
</template>

<script>
export default {
  name: 'Departments',
  components: {},
  props: {
    parentId: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      columns: ['id', 'name', 'actions'],
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
      this.axios
        .get('delegate/services/subjects/subjectList/' + this.$props.parentId)
        .then(response => {
          this.$data.tableData = response.data
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
