import { createApp } from 'vue'
import App from './App.vue'
import './directives'
import store from './store'
const app = createApp(App, {
    name: "wsnd"
})
app.use(store).mount('#app')
app.directive('highlight', {
    created() { },
    // 通过binding获取组件实例
    beforeMount(el, binding) {
        console.log(binding)
        el.style.color = binding.arg
        el.style.fontSize = binding.value + 'px'
    },
    beforeUpdate() { },
    beforeUnmount() { }
})