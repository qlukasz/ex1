<template>
  <portlet-wrapper
    :title="id === 0 ? $t('subject_management.units.add.title') : $t('subject_management.units.edit.title')">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <form @submit.prevent="addEditUnit()">
          <div class="form-group label-floating">
            <label class="control-label">{{ $t('name') }}
              <span class="requiredsign"/>
            </label>
            <input
              v-validate="'required'"
              v-model="unit.name"
              class="form-control required"
              name="name">
            <label class="error">{{ errors.first('name') }}</label>
          </div>
          <div class=" text-right">
            <router-link
              :to="{name: 'Units', params: {institutionId: institutionId, departmentId: departmentId}}"
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
  name: 'AddEditUnit',
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
    id: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      unit: {
        id: 0,
        name: '',
        parentSubjectId: 0,
        type: 'UNIT'
      }
    }
  },
  mounted: function () {
    if (this.$props.id !== 0) {
      this.getUnit()
    } else {
      this.$data.unit.parentSubjectId = this.$props.departmentId
    }
  },
  methods: {
    getUnit () {
      this.axios.get('delegate/services/guest/subjects/' + this.$props.id)
        .then(response => {
          this.$data.unit = response.data
        })
        .catch(e => {
          alert(e.response.data.message)
        })
    },
    addEditUnit () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.axios.post('delegate/services/admin/subjects/', this.$data.unit)
              .then(response => {
                const message = this.$t('subject_management.units.alert.success.' + (this.id === 0 ? 'add' : 'edit'))
                showAlert('success', message, undefined, undefined, undefined, () => {
                  this.$router.push({
                    name: 'Units',
                    params: {institutionId: this.$props.institutionId, departmentId: this.$props.departmentId}
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
