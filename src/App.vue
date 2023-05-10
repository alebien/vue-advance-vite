<!--
 * @Date: 2023-05-10 11:57:35
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-10 14:56:27
 * @FilePath: \vue-advance-vite\src\App.vue
-->

<template>
	<div class="changeRoute">
		<router-link to="/">
			<button>toHome</button>
		</router-link>
		<router-link to="/about">
			<button>toAbout</button>
		</router-link>
	</div>
	<router-view />
</template>

<script setup lang="ts">
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
