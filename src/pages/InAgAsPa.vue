<template>
	<q-page>
		<div class="q-pa-md">
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/g-9lSKlv8dU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
				<q-btn size="sm" class="q-ma-md" padding="none" color="accent" to="/">
					<template slot="default">
						<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 70px;">
							<q-icon name="fas fa-redo-alt" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="35px" />
							<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md">PROBEER OPNIEUW </span>
						</div>
						<div class="column justify-center items-center gt-xs">
							<q-icon name="fas fa-redo-alt" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="35px" />
							<span class="text-capitalize text-weight-regular q-mb-md">PROBEER OPNIEUW </span>
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