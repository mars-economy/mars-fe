<template>
  <flex-col class="prediction-card" :class="{'mobile' : isMobile}">
    <div class="card-label hidden-sm">
      {{ prediction.milestone.category.name }}
    </div>
    <div class="card-header">
      {{prediction.name}}
    </div>
    <div class="card-body">
      <div class="card-info">
        <TextPair label="current state" :data="prediction.state" icon="statePoint" class="hidden-sm"></TextPair>
        <TextPair :data="getTime(prediction.dueDate)" icon="timePoint" label="due to" :direction="getDirection()"></TextPair>
        <TextPair :data="prediction.predictorsNumber.toString()" icon="users" label="predictors" :direction="getDirection()"></TextPair>
      </div>
      <div>
        {{prediction.description}}
      </div>
    </div>
    <div class="card-footer mt-auto">
      <Button color="primary" icon name="predict now" size="block"
              @click="navigateToApp(prediction.milestone.id)"></Button>
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
      predictors: Number,
      link: String,
      label: String
    },
    isMobile: Boolean
  },
  methods: {
    getTime: function (time) {
      return moment.unix(time).utc().format('MMM, D YYYY z')
    },
    navigateToApp (milestoneId) {
      window.open(process.env.VUE_APP_MARS_APPLICATION + '/milestone/' + milestoneId, '_blank')
    },
    getDirection () {
      return this.isMobile ? 'column' : 'row'
    }
  }
}
</script>

<style scoped lang="scss">

  .prediction-card:not(.mobile) {
    @extend %card;
    padding: 2.6rem 1.5rem 1.5rem 1.6rem;
    text-align: left;
    height: 100%;
    position: relative;
  }
  .card-label {
    @extend %card-label;
    top: 0;
    right: 0;
    border-radius: 0 0 0 $radius-base;
  }
  .card-header {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.02em;
  }
  .card-info {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
  }
  .card-body {
    margin-bottom: 1rem;
  }
  .prediction-card.mobile {
    .card-header {
      font-size: 12px;
      line-height: 18px;
      text-align: left;
    }
    .card-body {
      margin-bottom: unset;
    }
    .card-info {
      flex-direction: row-reverse;
      justify-content: flex-end;
      margin: 12px 0;

      .pair {
        font-size: 12px;
        line-height: 18px;
      }

      .pair.column + .pair.column {
        margin-right: 16px;
      }
    }
  }

</style>
