<template>
    <input type="text" v-model="data.name">
    <div>
        {{ data.name }}
        {{ data.age }}
    </div>
</template>

<script lang='ts' setup>
import { getCurrentInstance, reactive, ref, watch } from 'vue';
const test = ref();
console.log(test);

const data = reactive({
    name: 'sxw',
    age: 23
})
watch(() => data.name, (newVal, oldVal) => {
    console.log(newVal, oldVal);
})

const instance = getCurrentInstance();
console.log(instance?.appContext);

</script>

<style scoped>

</style>