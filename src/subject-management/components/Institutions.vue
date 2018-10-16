<template>
  <portlet-wrapper :title="$t('subject_management.institutions.title')">
    <router-link
      :to="{name: 'AddInstitution'}"
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
          :to="{name: 'Departments', params: {institutionId: props.row.id}}"
          tag="span"
          class="btn btn-link">{{ $t('subject_management.institutions.table.show_departments') }}
        </router-link>
        <router-link
          :to="{name: 'EditInstitution', params: {id: props.row.id}}"
          tag="span"
          class="btn btn-link add-button">{{ $t('edit') }}
        </router-link>
        <span
          class="btn btn-link"
          @click="deleteInstitution(props.row.id)">{{ $t('delete') }}
        </span>
      </dropdown-buttons>
    </v-client-table>
  </portlet-wrapper>
</template>

<script>
/* eslint-disable no-undef */

import PortletWrapper from '../../components/portlet-wrapper/PortletWrapper'
import InlineButtons from '../../components/vue-tables/InlineButtons'
import DropdownButtons from '../../components/vue-tables/DropdownButtons'

export default {
  name: 'Institutions',
  components: {DropdownButtons, InlineButtons, PortletWrapper},
  data () {
    return {
      collapsed: false,
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
    this.getInstitutions()
  },
  methods: {
    getInstitutions () {
      this.axios.get('delegate/services/guest/subjects/subjectList')
        .then(response => {
          this.$data.rows = response.data
        })
        .catch(e => {
          alert(e.response.data.message)
        })
    },
    deleteInstitution (id) {
      showConfirm(this.$t('subject_management.institutions.alert.confirm.delete'), undefined, () => {
        this.axios.delete('delegate/services/admin/subjects/' + id)
          .then(response => {
            showAlert('success', this.$t('subject_management.institutions.alert.success.delete'),
              undefined, undefined, undefined, () => {
                this.getInstitutions()
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
