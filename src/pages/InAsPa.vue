<template>
	<q-page>
		<div class="q-pa-md">
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<iframe width="1120" height="630" src="https://www.youtube.com/embed/k5dUtIi8gCo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<q-btn size="l" class="q-ma-sm" color="primary" @mouseenter="playAudio1" to="/InAsPaAg">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 200px;">
							<q-icon name="fas fa-volume-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-volume-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="80px" />
							<span class="text-capitalize text-weight-regular q-mb-md"> </span>
						</div>
					</template>
				</q-btn>
				<q-btn size="l" class="q-ma-sm" color="primary" @mouseenter="playAudio2" to="/InAgAsAs">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 200px;">
							<q-icon name="fas fa-volume-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-volume-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="80px" />
							<span class="text-capitalize text-weight-regular q-mb-md"> </span>
						</div>
					</template>
				</q-btn>
				<q-btn size="l" class="q-ma-sm" color="primary" @mouseenter="playAudio3" to="/InAgAsPa">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 200px;">
							<q-icon name="fas fa-volume-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-volume-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="80px" />
							<span class="text-capitalize text-weight-regular q-mb-md"> </span>
						</div>
					</template>
				</q-btn>
			</div>
		</div>
	</q-page>
</template>

<script>
export default {
  name: "Documentation",
  methods: {
	playAudio1() {
		var audio = new Audio(require('../assets/ASPAAG.mp3'));
		audio.play();
	},
	playAudio2() {
		var audio = new Audio(require('../assets/AGASAS.mp3'));
		audio.play();
	},
	playAudio3() {
		var audio = new Audio(require('../assets/AGASPA.mp3'));
		audio.play();
	}
  }
}
</script>

<style scoped>

</style>