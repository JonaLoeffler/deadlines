import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../components/pages/Home.vue'
import DeadlineForm from '../components/DeadlineForm.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { name: 'home', path: '/', component: Home, meta: { transition: "slide-right" } },
        { name: 'deadline.create', path: '/deadline/create', component: DeadlineForm, meta: { transition: "slide-left" } },
        { name: 'deadline.edit', path: '/deadline/:deadlineToEdit.id/edit/', component: DeadlineForm, props: true, meta: { transition: "slide-left" } },
    ]
})