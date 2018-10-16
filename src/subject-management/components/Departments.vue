<template>
  <portlet-wrapper :title="institution.name + ' - ' + $t('subject_management.departments.title')">
    <router-link
      :to="{name: 'AddDepartment'}"
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
          :to="{name: 'Units', params: {institutionId: institutionId, departmentId: props.row.id}}"
          tag="span"
          class="btn btn-link">{{ $t('subject_management.departments.table.show_units') }}
        </router-link>
        <router-link
          :to="{name: 'EditDepartment', params: {id: props.row.id}}"
          tag="span"
          class="btn btn-link add-button">{{ $t('edit') }}
        </router-link>
        <span
          class="btn btn-link"
          @click="deleteDepartment(props.row.id)">{{ $t('delete') }}
        </span>
      </dropdown-buttons>
    </v-client-table>
    <router-link
      :to="{name: 'Institutions'}"
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
  name: 'Departments',
  components: {DropdownButtons, PortletWrapper},
  props: {
    institutionId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      institution: {name: ''},
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
    this.getDepartments()
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
    getDepartments () {
      this.axios.get('delegate/services/guest/subjects/subjectList/' + this.$props.institutionId)
        .then(response => {
          this.$data.rows = response.data
        })
        .catch(e => {
          console.log(e)
        })
    },
    deleteDepartment (id) {
      showConfirm(this.$t('subject_management.departments.alert.confirm.delete'), undefined, () => {
        this.axios.delete('delegate/services/admin/subjects/' + id)
          .then(response => {
            showAlert('success', this.$t('subject_management.departments.alert.success.delete'),
              undefined, undefined, undefined, () => {
                this.getDepartments()
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
