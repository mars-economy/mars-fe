<template>
  <section id="top-predictions" :data-visibility="isMobileView ? 'uncounted' : 'hidden'" class="slide-container"
           title="Prediction markets" slide-title="Prediction markets">
    <div class="h2">Top Predictions</div>
    <div class="card-scrollable">
      <PredictionsLine :isMobile=true></PredictionsLine>
    </div>

  </section>
</template>

<script>
import PredictionsLine from '@/views/slides/pages/PredictionMarkets/components/PredictionsLine/PredictionsLine'
import Reveal from 'reveal.js/js'

export default {
  name: 'TopPredictions',
  components: {
    PredictionsLine
  },
  data: function () {
    return {
      isMobileView: window.innerWidth <= 781
    }
  },
  watch: {
    isMobileView: {
      async handler (val) {
        console.log(val)
        Reveal.availableRoutes()
        Reveal.sync()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .card-scrollable {
    @extend %card;
    height: 400px;
    margin-top: 16px;
    overflow-y: auto;
  }

</style>
