<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="q-mt-lg q-mb-sm text-center">Zeg "nee" tegen alcohol!</h4>

      <div class="column justify-center">
        <h5 class="text-center">Klik op start!</h5>
        <div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
          <q-btn size="xl" class="q-ma-sm" color="primary" to="/intro">
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
      </div>
      <q-space class="q-mb-xl" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Home",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>