import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/task/:id',
      name: 'Task',
      component: Task
    }
  ]
})
