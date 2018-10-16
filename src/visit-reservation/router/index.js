import Vue from 'vue'
import Router from 'vue-router'
import Institutions from '../components/Institutions'
import Departments from '../components/Departments'
import CaseTypes from '../components/CaseTypes'
import Units from '../components/Units'
import Reservation from '../components/Reservation'
import TimeTables from '../components/TimeTables'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/departments/:parentId',
      name: 'Departments',
      component: Departments,
      props: true
    },
    {
      path: '/caseTypes/:parentId',
      name: 'CaseTypes',
      component: CaseTypes,
      props: true
    },
    {
      path: '/units/:parentId',
      name: 'Units',
      component: Units,
      props: true
    },
    {
      path: '/reservation/:timeFrame',
      name: 'Reservation',
      component: Reservation,
      props: true
    },
    {
      path: '/timeTables/:subjectId',
      name: 'TimeTables',
      component: TimeTables,
      props: true
    },
    {
      path: '*',
      name: 'Institutions',
      component: Institutions
    }
  ]
})
