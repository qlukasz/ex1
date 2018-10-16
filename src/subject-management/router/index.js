import Vue from 'vue'
import Router from 'vue-router'
import Institutions from '../components/Institutions'
import AddEditInstitution from '../components/AddEditInstitution'
import AddEditDepartment from '../components/AddEditDepartment'
import AddEditUnit from '../components/AddEditUnit'
import AddEditCase from '../components/AddEditCase'
import Departments from '../components/Departments'
import Units from '../components/Units'
import Cases from '../components/Cases'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/institutions',
      name: 'Institutions',
      component: Institutions
    },
    {
      path: '/institutions/add',
      name: 'AddInstitution',
      component: AddEditInstitution,
      props: true
    },
    {
      path: '/institutions/:id/edit',
      name: 'EditInstitution',
      component: AddEditInstitution,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments',
      name: 'Departments',
      component: Departments,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments/add',
      name: 'AddDepartment',
      component: AddEditDepartment,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments/:id/edit',
      name: 'EditDepartment',
      component: AddEditDepartment,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments/:departmentId/units',
      name: 'Units',
      component: Units,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments/:departmentId/units/add',
      name: 'AddUnit',
      component: AddEditUnit,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments/:departmentId/units/:id/edit',
      name: 'EditUnit',
      component: AddEditUnit,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments/:departmentId/units/:unitId/cases',
      name: 'Cases',
      component: Cases,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments/:departmentId/units/:unitId/cases/add',
      name: 'AddCase',
      component: AddEditCase,
      props: true
    },
    {
      path: '/institutions/:institutionId/departments/:departmentId/units/:unitId/cases/:id/edit',
      name: 'EditCase',
      component: AddEditCase,
      props: true
    },
    {
      path: '/*',
      redirect: {name: 'Institutions'}
    }
  ]
})
