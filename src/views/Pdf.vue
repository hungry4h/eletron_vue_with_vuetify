<template>
	<div>
        <v-container>
		<pdf
			v-for="i in numPages"
			:key="i"
			:src="src"
			:page="i"
			style="display: inline-block; width: 100%"
		></pdf>
        </v-container>
	</div>
</template>

<script>

//https://github.com/FranckFreiburger/vue-pdf

import pdf from 'vue-pdf'

var loadingTask = pdf.createLoadingTask('/pdf.pdf');

export default {
	components: {
		pdf
	},
	data() {
		return {
			src: loadingTask,
			numPages: undefined,
		}
	},
	mounted() {

		this.src.then(pdf => {

			this.numPages = pdf.numPages;
		});
	}
}

</script>