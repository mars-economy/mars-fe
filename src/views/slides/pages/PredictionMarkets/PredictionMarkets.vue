<template>
  <section id="prediction-markets" name="prediction markets">
    <flex-col class="prediction-markets">

      <div class="h2">Prediction Markets</div>
      <StepsLine></StepsLine>
      <PredictionsLine></PredictionsLine>

    </flex-col>
  </section>
</template>

<script>
import StepsLine from '@/views/slides/pages/PredictionMarkets/components/StepsLine/StepsLine'
import PredictionsLine from '@/views/slides/pages/PredictionMarkets/components/PredictionsLine/PredictionsLine'
export default {
  name: 'PredictionMarkets',
  components: {
    PredictionsLine,
    StepsLine
  }
}
</script>

<style scoped lang="scss">

  .h2 {
    margin-bottom: 2rem;
  }
  .prediction-markets {
    padding: 0 7.5rem;
  }

</style>
