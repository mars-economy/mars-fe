<template>
  <section id="prediction-markets" name="prediction markets" class="slide-container" slide-title="Prediction markets">
    <flex-col class="prediction-markets" v-if="!isMobile">

      <div class="h4">Prediction Markets</div>
      <StepsLine></StepsLine>
      <flex-row align-h="between" align-v="center" class="predictions-line-title">
        <div>Top four predictions</div>
        <div>
          <Button color="primary" name="see more predictions" v-on:click="navigateToApp()"></Button>
        </div>
      </flex-row>
      <PredictionsLine></PredictionsLine>

    </flex-col>
    <div v-else>
      <div class="h2">Instruction</div>
      <StepsLine :isMobile="isMobile"></StepsLine>
      <Button color="primary" name="see all predictions" v-on:click="navigateToApp()"/>
    </div>
  </section>
</template>

<script>
import StepsLine from '@/views/slides/pages/PredictionMarkets/components/StepsLine/StepsLine'
import PredictionsLine from '@/views/slides/pages/PredictionMarkets/components/PredictionsLine/PredictionsLine'
import Button from '@/components/buttons/Button'

export default {
  name: 'PredictionMarkets',
  components: {
    Button,
    PredictionsLine,
    StepsLine
  },
  props: {
    isMobile: Boolean
  },
  methods: {
    navigateToApp () {
      window.open(process.env.VUE_APP_MARS_APPLICATION, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

  .h4 {
    margin-bottom: 2rem;
  }

  .prediction-markets {
    padding: 0 7.5rem;
  }

  .predictions-line-title {
    margin: 2rem 0;
    font-size: 20px;
    font-weight: bold;
  }

  .h2 + .step-line {
    margin-top: 16px;
  }
</style>
