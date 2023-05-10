<!--
 * @Date: 2023-05-10 12:11:51
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-10 14:08:44
 * @FilePath: \vue-advance-vite\src\views\Home.vue
-->
<template>
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    <HelloWorld msg="Hello World" />
</template>

<script lang='ts' setup>
import HelloWorld from '@/components/HelloWorld.vue';

</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>