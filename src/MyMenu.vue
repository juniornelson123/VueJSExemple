<template>
	<div @click="onMenuClick">
		<h3>{{ title }}</h3>
		<div>
			<slot></slot>
		</div>
	</div>
	
</template>
<script>
	export default {
		props: ['title']
		methods:{
			onMenuClick: function(){
				this.$emit('menu-click')
			},

			onButtonClick: function(){
				this.$emit('button-click', "Evento de emit message")
			}
		}
	}
</script>