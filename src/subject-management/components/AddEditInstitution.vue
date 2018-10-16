<template>
  <portlet-wrapper
    :title="id === 0 ? $t('subject_management.institutions.add.title') : $t('subject_management.institutions.edit.title')">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <form @submit.prevent="addEditInstitution()">
          <div class="form-group label-floating">
            <label class="control-label">{{ $t('name') }}
              <span class="requiredsign"/>
            </label>
            <input
              v-validate="'required'"
              v-model="institution.name"
              class="form-control required"
              name="name">
            <label class="error">{{ errors.first('name') }}</label>
          </div>
          <div class=" text-right">
            <router-link
              :to="{name: 'Institutions'}"
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
  name: 'AddEditInstitution',
  components: {PortletWrapper},
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      institution: {
        id: 0,
        name: '',
        parentSubjectId: 0,
        type: 'INSTITUTION'
      }
    }
  },
  mounted: function () {
    if (this.$props.id !== 0) {
      this.getInstitution()
    }
  },
  methods: {
    getInstitution () {
      this.axios.get('delegate/services/guest/subjects/' + this.$props.id)
        .then(response => {
          this.$data.institution = response.data
        })
        .catch(e => {
          alert(e.response.data.message)
        })
    },
    addEditInstitution () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.axios.post('delegate/services/admin/subjects/', this.$data.institution)
              .then(response => {
                const message = this.$t('subject_management.institutions.alert.success.' + (this.id === 0 ? 'add' : 'edit'))
                showAlert('success', message, undefined, undefined, undefined, () => {
                  this.$router.push({name: 'Institutions'})
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
