<template>
  <portlet-wrapper
    :title="institution.name + ' - ' + department.name + ' - ' + unit.name + ' - ' + $t('subject_management.cases.title')">
    <router-link
      :to="{name: 'AddCase'}"
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
          :to="{name: 'EditCase', params: {id: props.row.id}}"
          tag="span"
          class="btn btn-link add-button">{{ $t('edit') }}
        </router-link>
        <spane
          class="btn btn-link"
          @click="deleteCase(props.row.id)">{{ $t('delete') }}
        </spane>
      </dropdown-buttons>
    </v-client-table>
    <router-link
      :to="{name: 'Units', params: {institutionId: institutionId, departmentId: departmentId}}"
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
  name: 'Cases',
  components: {DropdownButtons, PortletWrapper},
  props: {
    institutionId: {
      type: Number,
      required: true
    },
    departmentId: {
      type: Number,
      required: true
    },
    unitId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      institution: {name: ''},
      department: {name: ''},
      unit: {name: ''},
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
    this.getSubject(this.$props.unitId, 'unit')
    this.getCases()
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
    getCases () {
      this.axios.get('delegate/services/guest/subjects/subjectList/' + this.$props.unitId)
        .then(response => {
          this.$data.rows = response.data
        })
        .catch(e => {
          alert(e.response.data.message)
        })
    },
    deleteCase (id) {
      showConfirm(this.$t('subject_management.institutions.alert.confirm.delete'), undefined, () => {
        this.axios.delete('delegate/services/admin/subjects/' + id)
          .then(response => {
            showAlert('success', this.$t('subject_management.institutions.alert.success.delete'),
              undefined, undefined, undefined, () => {
                this.getCases()
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
