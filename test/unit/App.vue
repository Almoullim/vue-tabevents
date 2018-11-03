<template>
	<div>
		<button @click="toggle">Hide/Show</button>
		<h1 v-if="show">Hello</h1>
	</div>
</template>

<script>
export default {
	name: 'demo',
	data() {
		return {
			show: true,
		};
	},
	methods: {
		toggle() {
			this.$tabEvent.emit('hide/show');
			this.show = !this.show;
		},
	},
	mounted() {
		this.$tabEvent.on('hide/show', () => {
			this.show = !this.show;
		});
	},
};
</script>


