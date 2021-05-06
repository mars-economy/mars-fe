<template>
  <div class="step-line" :class="{'mobile': isMobile }">

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
  props: {
    isMobile: Boolean
  },
  data: function () {
    return {
      stepsArray: STEPS
    }
  }

}
</script>

<style scoped lang="scss">

  .step-line {
    &:not(.mobile) {
      @extend %card;
      padding: 32px 64px;
    }
    display: flex;
    justify-content: space-between;

    &.mobile {
      flex-direction: column;
      align-items: flex-start;
      padding: unset;
      margin-bottom: 50px;

      .step-line-item + .step-line-item {
        margin-top: 32px;
      }
    }
  }

</style>
