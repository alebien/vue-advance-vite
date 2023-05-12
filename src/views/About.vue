<!--
 * @Date: 2023-05-10 12:14:09
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-12 13:56:45
 * @FilePath: \vue-advance-vite\src\views\About.vue
-->
<template>
    <div class="box">
        <h1>about</h1>
        <p>name: {{user.name}}</p>
        <p>age: {{user.age}}</p>
        <input type="text" placeholder="name" v-model="name">
        <input type="number" placeholder="age" v-model="age">
        <button @click="reset()">reset</button>
        <button @click="user.edit(name, age)">edit</button>
    </div>
</template>

<script lang='ts' setup>
import { useUserStore } from '@/stores/user.ts';
import { ref } from 'vue';

const user = useUserStore();
//      ^?

const age = ref();
//      ^?
const name = ref('');
//      ^?
const reset = () => {
    name.value = '';
    age.value = undefined;
    user.reset();
}


</script>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

</style>