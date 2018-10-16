<template>
  <portlet-wrapper
    :title="id === 0 ? $t('subject_management.cases.add.title') : $t('subject_management.cases.edit.title')">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <form @submit.prevent="addEditCase()">
          <div class="form-group label-floating">
            <label class="control-label">{{ $t('name') }}
              <span class="requiredsign"/>
            </label>
            <input
              v-validate="'required'"
              v-model="caseType.name"
              class="form-control required"
              name="name">
            <label class="error">{{ errors.first('name') }}</label>
          </div>
          <div class=" text-right">
            <router-link
              :to="{name: 'Cases', params: {institutionId: institutionId, departmentId: departmentId, unitId: unitId}}"
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
  name: 'AddEditCase',
  components: {PortletWrapper},
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
    },
    id: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      caseType: {
        id: 0,
        name: '',
        parentSubjectId: 0,
        type: 'CASE_TYPE'
      }
    }
  },
  mounted: function () {
    if (this.$props.id !== 0) {
      this.getCase()
    } else {
      this.$data.caseType.parentSubjectId = this.$props.unitId
    }
  },
  methods: {
    getCase () {
      this.axios.get('delegate/services/guest/subjects/' + this.$props.id)
        .then(response => {
          this.$data.caseType = response.data
        })
        .catch(e => {
          alert(e.response.data.message)
        })
    },
    addEditCase () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.axios.post('delegate/services/admin/subjects/', this.$data.caseType)
              .then(response => {
                const message = this.$t('subject_management.cases.alert.success.' + (this.id === 0 ? 'add' : 'edit'))
                showAlert('success', message, undefined, undefined, undefined, () => {
                  this.$router.push({
                    name: 'Cases',
                    params: {
                      institutionId: this.$props.institutionId,
                      departmentId: this.$props.departmentId,
                      unitId: this.$props.unitId
                    }
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
