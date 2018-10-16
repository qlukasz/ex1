<template>
  <portlet-wrapper :title="$t('visit_reservation.institutions.title')">
    <v-client-table
      :data="tableData"
      :columns="columns"
      :options="options">
      <div
        slot="actions"
        slot-scope="props">
        <router-link
          :to="{name: 'Departments', params: {parentId: props.row.id}}"
          class="btn btn-link"
          tag="button"> {{ $t('visit_reservation.institutions.departments') }}
        </router-link>
        <!--<router-link-->
        <!--:to="{name: 'Addresses'}"-->
        <!--class="btn btn-link"-->
        <!--tag="button"> {{ $t('visit_reservation.institutions.departments') }}-->
        <!--</router-link>-->
      </div>
    </v-client-table>
  </portlet-wrapper>
</template>

<script>
import PortletWrapper from '../../components/portlet-wrapper/PortletWrapper'

export default {
  name: 'Institutions',
  components: {
    PortletWrapper
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
        .get('delegate/services/subjects/subjectList')
        .then(response => {
          this.$data.tableData = response.data
        })
        .catch(
          error => console.log(error)
        )
    }
  }
}
</script>

<style scoped>
</style>
