<template>
  <div class="point-predictions-list">
    <flex-row noWrap align-v="center" class="predictions-list-item"
              v-for="(prediction, index) in predictions" :key="index">
      <NumberCircle :number="index+1"></NumberCircle>
      <div>{{prediction.theme}}</div>
    </flex-row>
  </div>

</template>

<script>
import NumberCircle from '../../../../../../../components/block/NumberCircle'
export default {
  name: 'PointPredictionsList',
  components: {
    NumberCircle
  },
  props: {
    predictions: Array
  }
}
</script>

<style scoped>

  .number-circle {
    margin-right: 12px;
  }
  .predictions-list-item + .predictions-list-item {
    margin-top: 0.875em;
  }

</style>
