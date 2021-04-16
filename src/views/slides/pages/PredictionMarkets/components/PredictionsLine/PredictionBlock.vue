<template>
  <flex-col class="prediction-card">
    <div class="card-label">
      {{prediction.label}}
    </div>
    <div class="card-header">
      {{prediction.name}}
    </div>
    <div class="card-body">
      <div class="card-info">
        <TextPair label="current state" :data="prediction.state" icon="statePoint"></TextPair>
        <TextPair label="due to" :data="getTime(prediction.dueTo)" icon="timePoint"></TextPair>
        <TextPair label="predictors" :data="prediction.predictors" icon="users"></TextPair>
      </div>
      <div>
        {{prediction.description}}
      </div>
    </div>
    <div class="card-footer">
      <Button color="primary" size="block" name="predict now" :link="prediction.link" icon></Button>
    </div>
  </flex-col>

</template>

<script>
import Button from '@/components/buttons/Button'
import moment from 'moment'
import TextPair from '@/components/block/TextPair'

export default {
  name: 'PredictionBlock',
  components: {
    TextPair,
    Button
  },
  props: {
    prediction: {
      name: String,
      description: String,
      dueTo: String,
      predictors: String,
      link: String,
      label: String
    }
  },
  methods: {
    getTime: function (time) {
      return moment.unix(time).format('MMMM YYYY')
    }
  }
}
</script>

<style scoped lang="scss">

  .prediction-card {
    @extend %card;
    padding: 2.6rem 1.5rem 1.5rem 1.6rem;
    text-align: left;
    height: 100%;
  }
  .card-label {
    @extend %card-label;
    top: 0;
    right: 0;
    border-radius: 0 0 0 $radius-base;
  }
  .card-header {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.2em;
    letter-spacing: -0.02em;
  }
  .card-info{
    margin: 1rem 0;
  }
  .card-body {
    margin-bottom: 1rem;
  }
  .card-footer {
    margin-top: auto;
  }

</style>
