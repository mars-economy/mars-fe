<template>
  <div>

    <div class="predictions-line" :class="{'mobile' : isMobile}">
      <div v-for="(prediction,index) in predictions" :key="index" class="predictions-line-item">
        <PredictionBlock :isMobile="isMobile" :prediction="prediction"></PredictionBlock>
        <Divider v-if="isMobile && index !== predictions.length -1"/>
      </div>

    </div>
  </div>

</template>

<script>

import PredictionBlock from '@/views/slides/pages/PredictionMarkets/components/PredictionsLine/PredictionBlock'
import { mapState } from 'vuex'
import { MODULE_NAMES } from '../../../../../../store'
import Divider from '@/components/block/Divider'

export default {
  name: 'PredictionsLine',
  components: {
    Divider,
    PredictionBlock
  },
  props: {
    isMobile: Boolean
  },
  computed: {
    ...mapState(MODULE_NAMES.PHASES, {
      predictions (state) {
        if (!state.predictions) return []
        return this.lodash.reverse(this.lodash.sortBy(state.predictions, 'predictorsNumber')).slice(0, 4)
      }
    })
  }
}

</script>

<style scoped lang="scss">
  .predictions-line {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    &:not(.mobile) {
      .predictions-line-item {
        width: 276px;
      }
    }

    &.mobile {
      flex-direction: column;
    }
  }
</style>
