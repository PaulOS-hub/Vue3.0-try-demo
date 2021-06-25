<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <DynamicHeading v-bind="$attrs" :level="'diuv'" />
    <button @click="changList">改变数组</button>
    <div v-for="item in list.arr" :key="item.id">
      {{item.name}}
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineAsyncComponent,
  getCurrentInstance,
  toRefs,
} from "vue";
import DynamicHeading from "./components/functionnal";
// 异步组件Vue3.0新写法。
// const asyncModalWithOptions = defineAsyncComponent({
//   loader: () => import('./Modal.vue'),
//   delay: 200,
//   timeout: 3000,
//   errorComponent: ErrorComponent,
//   loadingComponent: LoadingComponent
// })
import { useStore } from "vuex";
// const { mapState } = createNamespacedHelpers("user"); // 通过这个函数来辅助我们找到user模块
import { ref, reactive, watch } from "vue";
export default {
  name: "App",
  provide: {},

  setup(props, context) {
    const { proxy: self } = getCurrentInstance();

    const store = useStore();
    self.$store.commit("user/SET_NAME", "wsnd");
    let name = computed(() => store.state.user.name);

    console.log(name.value, "name");
    console.log(props, "props");
    console.log(context, "context");
    let count = ref(0);
    let obj = reactive({
      title: "reactive",
    });
    let list = reactive({
      arr: [
        { id: 1, name: 2 },
        { id: 3, name: 4 },
      ],
    });
    watch(
      list,
      (oldVal, newVal) => {
        console.log(oldVal);
        console.log(newVal);
      },
      {
        deep: true,
      }
    );

    // 这些 refs 将保留与源对象的反应式连接
    // refs需要解包，通过value来获取值。
    let { arr } = toRefs(list);
    const changList = () => {
      arr.value = [];
    };
    return {
      count,
      obj,
      list,
      arr,
      changList,
    };
  },
  props: { name },
  components: {
    // 异步组件Vue3.0新语法
    HelloWorld: defineAsyncComponent(() =>
      import("./components/HelloWorld.vue")
    ),
    DynamicHeading,
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    // changList() {
    //   console.log(this.arr);
    //   this.arr = [];
    //   // console.log(this.arr)
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
