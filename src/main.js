import editTable from './edit-table/index.vue';


const components = [
  editTable
]
  // 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    })
}

export default {
    //Vue为vue的构造函数，options为可选配置项
    install(Vue,options={}){
        components.map(component => {
            Vue.component(component.name, component);
        })
    }
}