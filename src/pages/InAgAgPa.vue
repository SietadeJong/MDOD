<template>
	<q-page>
		<div class="q-pa-md">
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<iframe width="1120" height="630" src="https://www.youtube.com/embed/divklcuer0w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<q-btn size="l" class="q-ma-sm" color="primary" to="/">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 200px;">
							<q-icon name="fas fa-volume-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md">PROBEER OPNIEUW</span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-volume-up" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="80px" />
							<span class="text-capitalize text-weight-regular q-mb-md">PROBEER OPNIEUW</span>
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
}
</script>

<style scoped>

</style>