---
slug: v-model
title: v-model
---


### V-model双向绑定


```vue
// v-model 可以在组件上使用以实现*双向绑定*

// 1、在原生元素上
<input v-model="searchText">
// 在代码背后，模板编译器会对v-model进行更冗长的等价展开，👇
<input :value="searchText" @input="searchText = $event.target.value">
// 2、使用在组件上👇
<CustomInput :model-value="searchText" @update:model-value="newValue => searchText = newValue"></CustomInput>
// 要让这个例子实际工作起来，<CustomInput> 组件内部需要做两件事：
* 将内部原生 <input> 元素的 value attribute 绑定到 modelValue prop
* 当原生的 input 事件触发时，触发一个携带了新值的 update:modelValue 自定义事件

  <!-- CustomInput.vue -->
  <script setup>
    defineProps(['modelValue'])
    defineEmits(['update:modelValue'])
  </script>

  <template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </template>
  
  // 现在 v-model 可以在这个组件上正常工作了
```