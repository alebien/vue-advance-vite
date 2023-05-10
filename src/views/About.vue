<!--
 * @Date: 2023-05-10 12:14:09
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-10 15:13:09
 * @FilePath: \vue-advance-vite\src\views\About.vue
-->
<template>
    <div>
        <h1>about</h1>
        <p>name: {{user.name}}</p>
        <p>age: {{user.age}}</p>
        <input type="text" v-model="name">
        <input type="text" v-model="age">
        <button @click="user.reset">reset</button>
        <button @click="user.edit(name, age)">edit</button>
    </div>
</template>

<script lang='ts' setup>
import { useUserStore } from '@/stores/user.ts';
import { ref } from 'vue';

const user = useUserStore();

const age = ref(0);
const name = ref('');



</script>

<style scoped>

</style>