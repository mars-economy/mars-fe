<template>
  <div>

    <flex-row align-h="between" class="predictions-line-title">
      <div>Top four predictions</div>
      <div>
        <Button name="see more predictions" color="primary" link=""></Button>
      </div>
    </flex-row>
    <div class="predictions-line">
      <div v-for="(prediction,index) in predictions" :key="index" class="predictions-line-item">
        <PredictionBlock :prediction="prediction"></PredictionBlock>
      </div>

    </div>
  </div>

</template>

<script>

import Button from '@/components/buttons/Button'
import PredictionBlock from '@/views/slides/pages/PredictionMarkets/components/PredictionsLine/PredictionBlock'
import { PREDICTIONS } from '@/constants/predictions'

export default {
  name: 'PredictionsLine',
  components: {
    PredictionBlock,
    Button
  },
  data: function () {
    return {
      predictions: PREDICTIONS
    }
  }
}

</script>

<style scoped lang="scss">
  .predictions-line-title {
    margin: 2rem 0;
  }
  .predictions-line {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
  .predictions-line-item {
    width: 276px;
  }

</style>
