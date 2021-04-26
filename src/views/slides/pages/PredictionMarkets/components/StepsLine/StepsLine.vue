<template>
  <div class="step-line-container">

    <div class="step-line-item" v-for="(step, index) in stepsArray" :key="index">
      <Step :number=index+1 :step="step"></Step>
    </div>

  </div>

</template>

<script>
import Step from '@/views/slides/pages/PredictionMarkets/components/StepsLine/Step'
import { STEPS } from '@/constants/steps'

export default {
  name: 'StepsLine',
  components: {
    Step
  },
  data: function () {
    return {
      stepsArray: STEPS
    }
  }

}
</script>

<style scoped lang="scss">

  .step-line-container {
    @extend %card;
    padding: 2rem 4.5rem;
    display: flex;
    justify-content: space-between;
  }

</style>
