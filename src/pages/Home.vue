<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="q-mt-lg q-mb-sm text-center">Zeg "nee" tegen alcohol!</h4>

      <div class="column justify-center">
        <h5 class="text-center">Klik op start!</h5>
        <div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
          <q-btn size="sm" padding="none" class="q-ma-sm" color="primary" to="/intro">
            <template slot="default">
              <div class="row justify-start items-center q-pl-lg lt-sm" style="width: 300px;">
                <q-icon name="far fa-comments" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
                <span class="text-capitalize text-weight-regular q-ml-sm q-mr-md">START</span>
              </div>
              <div class="column justify-center items-center gt-xs">
                <q-icon name="far fa-comments" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="100px" />
                <span class="text-capitalize text-weight-regular q-mb-md">START</span>
              </div>
            </template>
          </q-btn>
        </div>
		<div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
			<q-btn size="sm" padding="none" class="q-ma-sm" color="primary" @click="alert = true">
				<template slot="default">
					<div class="row justify-start items-center q-pl-lg lt-sm" style="width: 300px;">
						<q-icon name="fas fa-question" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
						<span class="text-capitalize text-weight-regular q-ml-sm q-mr-md">HELP</span>
					</div>
					<div class="column justify-center items-center gt-xs">
						<q-icon name="fas fa-question" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="100px" />
						<span class="text-capitalize text-weight-regular q-mb-md">HELP</span>
					</div>
				</template>
			</q-btn>
			
			<q-dialog v-model="alert">
				<q-card>
					<q-card-section>
						<div class="text-h6">Help</div>
					</q-card-section>

					<q-card-section class="q-pt-none">
						<div>
							<q-icon name="fab fa-youtube" color="red" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							Klik op de play-knop om het filmpje te kijken.
						</div>
						<div>
							<q-icon name="fas fa-volume-up" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							Klik op luidsprekers om je keuzes te horen.
						</div>
						<div>
							<q-icon name="fas fa-arrow-up" color="orange" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
							Klik op de pijl die wijst naar het beste antwoord.
						</div>
					</q-card-section>

					<q-card-actions align="right">
						<q-btn flat label="Sluiten" color="primary" v-close-popup></q-btn>
					</q-card-actions>
				</q-card>
			</q-dialog>
		</div>
      </div>
      <q-space class="q-mb-xl" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Home",
  data () {
	return {
		alert: false,
		address: ''
	}
  }	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>