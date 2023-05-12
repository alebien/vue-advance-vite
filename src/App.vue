<!--
 * @Date: 2023-05-10 11:57:35
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-10 14:56:27
 * @FilePath: \vue-advance-vite\src\App.vue
-->

<template>
	<div class="changeRoute">
		<router-link v-for="router in routerList" :key="router.name" :to="router.path">
			<button>{{ router.name }}</button>
		</router-link>
	</div>
	<router-view />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// router 实例
const router = useRouter();

// 路由列表
const routerList = router.options.routes;

</script>

<style scoped>
.changeRoute {
	position: fixed;
	top: 50px;
	left: 0;
	width: 100%;
	text-align: center;
}
</style>
