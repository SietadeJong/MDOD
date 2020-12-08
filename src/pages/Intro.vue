<template>
	<q-page>
		<div class="q-pa-md">
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<iframe width="560" height="315" max-width="100%" src="https://www.youtube.com/embed/gGFdEkuFeXs?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
			</div>
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<q-btn size="sm" class="q-ma-md" padding="none" color="primary" @click="playAudio1">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 10px;">
							<q-icon name="fas fa-volume-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-volume-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-mb-md"> </span>
						</div>
					</template>
				</q-btn>
				<q-btn size="sm" class="q-ma-md" padding="none" color="primary" @click="playAudio2">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 10px;">
							<q-icon name="fas fa-volume-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-volume-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-mb-md"> </span>
						</div>
					</template>
				</q-btn>
				<q-btn size="sm" class="q-ma-md" padding="none" color="primary" @click="playAudio3">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 10px;">
							<q-icon name="fas fa-volume-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-volume-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-mb-md"> </span>
						</div>
					</template>
				</q-btn>
			</div>
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<q-btn size="sm" class="q-ma-md" padding="none" color="accent" to="/InAg">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 10px;">
							<q-icon name="fas fa-arrow-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-arrow-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-mb-md"> </span>
						</div>
					</template>
				</q-btn>
				<q-btn size="sm" class="q-ma-md" padding="none" color="accent" to="/InAs">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 10px;">
							<q-icon name="fas fa-arrow-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-arrow-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-mb-md"> </span>
						</div>
					</template>
				</q-btn>
				<q-btn size="sm" class="q-ma-md" padding="none" color="accent" to="/InPa">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 10px;">
							<q-icon name="fas fa-arrow-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md"> </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-arrow-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="40px" />
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
		var audio = new Audio(require('../assets/AG.mp3'));
		audio.play();
	},
	playAudio2() {
		var audio = new Audio(require('../assets/AS.mp3'));
		audio.play();
	},
	playAudio3() {
		var audio = new Audio(require('../assets/PA.mp3'));
		audio.play();
	}
  }
}
</script>

<style scoped>

</style>