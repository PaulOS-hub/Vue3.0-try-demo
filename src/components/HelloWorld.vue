<template>
  <div class="hello">
    <div v-for="item in itemRefs" :ref="setItemRef" :key="item.id">
      {{ item.name }}
    </div>
    <div v-highlight:red="20">123</div>
  </div>
  <div v-bind="$attrs">
    456
  </div>
</template>

<script>
import { onBeforeUpdate, onUpdated } from "vue";
export default {
  setup() {
    let itemRefs = [{ id: 1, name: "!2312" }];
    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el);
      }
    };
    onBeforeUpdate(() => {
      console.log(123);
      itemRefs = [];
    });
    onUpdated(() => {
      console.log(itemRefs);
    });
    return {
      setItemRef,
    };
  },
};
</script>
