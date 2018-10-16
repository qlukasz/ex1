<template>
  <portlet-wrapper :title="institution.name + ' - ' + department.name + ' - ' + $t('subject_management.units.title')">
    <router-link
      :to="{name: 'AddUnit'}"
      tag="a"
      class="btn btn-link add-button">{{ $t('add') }}
    </router-link>
    <v-client-table
      :data="rows"
      :columns="columns"
      :options="options">
      <dropdown-buttons
        slot="actions"
        slot-scope="props"
        :label="$t('options')">
        <router-link
          :to="{name: 'Cases', params: {institutionId: institutionId, departmentId: departmentId, unitId: props.row.id}}"
          tag="span"
          class="btn btn-link">{{ $t('subject_management.units.table.show_cases') }}
        </router-link>
        <router-link
          :to="{name: 'EditUnit', params: {id: props.row.id}}"
          tag="span"
          class="btn btn-link add-button">{{ $t('edit') }}
        </router-link>
        <span
          class="btn btn-link"
          @click="deleteUnit(props.row.id)">{{ $t('delete') }}
        </span>
      </dropdown-buttons>
    </v-client-table>
    <router-link
      :to="{name: 'Departments', params: {institutionId: institutionId}}"
      tag="button"
      class="btn btn-primary">{{ $t('return') }}
    </router-link>
  </portlet-wrapper>
</template>

<script>
/* eslint-disable no-undef */

import PortletWrapper from '../../components/portlet-wrapper/PortletWrapper'
import DropdownButtons from '../../components/vue-tables/DropdownButtons'

export default {
  name: 'Units',
  components: {DropdownButtons, PortletWrapper},
  props: {
    institutionId: {
      type: Number,
      required: true
    },
    departmentId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      institution: {name: ''},
      department: {name: ''},
      columns: ['name', 'actions'],
      rows: [],
      options: {
        headings: {
          name: this.$t('name'),
          actions: this.$t('options')
        },
        columnsClasses: {
          actions: 'text-center w-20'
        },
        texts: this.$t('vue_tables')
      }
    }
  },
  mounted: function () {
    this.getSubject(this.$props.institutionId, 'institution')
    this.getSubject(this.$props.departmentId, 'department')
    this.getUnits()
  },
  methods: {
    getSubject (id, obj) {
      this.axios.get('delegate/services/guest/subjects/' + id)
        .then(response => {
          this.$data[obj] = response.data
        })
        .catch(e => {
          alert(e.response.data.message)
        })
    },
    getUnits () {
      this.axios.get('delegate/services/guest/subjects/subjectList/' + this.$props.departmentId)
        .then(response => {
          this.$data.rows = response.data
        })
        .catch(e => {
          console.log(e)
        })
    },
    deleteUnit (id) {
      showConfirm(this.$t('subject_management.units.alert.confirm.delete'), undefined, () => {
        this.axios.delete('delegate/services/admin/subjects/' + id)
          .then(response => {
            showAlert('success', this.$t('subject_management.units.alert.success.delete'),
              undefined, undefined, undefined, () => {
                this.getUnits()
              })
          })
          .catch(e => {
            showAlert('error', e.response.data.message)
          })
      })
    }
  }
}
</script>

<style scoped>

</style>
