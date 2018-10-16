<template>
  <portlet-wrapper
    :title="id === 0 ? $t('subject_management.departments.add.title') : $t('subject_management.departments.edit.title')">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <form @submit.prevent="addEditDepartment()">
          <div class="form-group label-floating">
            <label class="control-label">{{ $t('name') }}
              <span class="requiredsign"/>
            </label>
            <input
              v-validate="'required'"
              v-model="department.name"
              class="form-control required"
              name="name">
            <label class="error">{{ errors.first('name') }}</label>
          </div>
          <div class=" text-right">
            <router-link
              :to="{name: 'Departments', params: {institutionId: institutionId}}"
              tag="button"
              class="btn btn-primary">{{ $t('return') }}
            </router-link>
            <button
              type="submit"
              class="btn btn-success">{{ $t('submit') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </portlet-wrapper>
</template>

<script>
/* eslint-disable no-undef */

import PortletWrapper from '../../components/portlet-wrapper/PortletWrapper'

export default {
  name: 'AddEditDepartment',
  components: {PortletWrapper},
  props: {
    institutionId: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      department: {
        id: 0,
        name: '',
        parentSubjectId: 0,
        type: 'DEPARTMENT'
      }
    }
  },
  mounted: function () {
    if (this.$props.id !== 0) {
      this.getDepartment()
    } else {
      this.$data.department.parentSubjectId = this.$props.institutionId
    }
  },
  methods: {
    getDepartment () {
      this.axios.get('delegate/services/guest/subjects/' + this.$props.id)
        .then(response => {
          this.$data.department = response.data
        })
        .catch(e => {
          alert(e.response.data.message)
        })
    },
    addEditDepartment () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.axios.post('delegate/services/admin/subjects/', this.$data.department)
              .then(response => {
                const message = this.$t('subject_management.departments.alert.success.' + (this.id === 0 ? 'add' : 'edit'))
                showAlert('success', message, undefined, undefined, undefined, () => {
                  this.$router.push({
                    name: 'Departments',
                    params: {institutionId: this.$props.institutionId}
                  })
                })
              })
              .catch(e => {
                alert(e.response.data.message)
              })
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
