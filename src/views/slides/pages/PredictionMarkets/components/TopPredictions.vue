<template>
  <section id="top-predictions" data-visibility="uncounted" class="slide-container" title="Prediction markets">
    <div class="h2">Top Predictions</div>
    <div class="card-scrollable" >
      <PredictionsLine :isMobile=true></PredictionsLine>
    </div>

  </section>
</template>

<script>
import PredictionsLine from '@/views/slides/pages/PredictionMarkets/components/PredictionsLine/PredictionsLine'
export default {
  name: 'TopPredictions',
  components: {
    PredictionsLine
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
