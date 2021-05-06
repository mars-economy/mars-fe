<template>
    <div class="stage-point-info">
        <TextPair :data="point.status" icon="statePoint" label="state"></TextPair>
        <TextPair :data="getTime(point.dueDate)" icon="timePoint" label="due date"></TextPair>
        <TextPair :data="point.predictors.toString()" icon="users" label="predictors"></TextPair>
    </div>
</template>

<script>
import TextPair from '@/components/block/TextPair'
import moment from 'moment'
export default {
  name: 'StagePointInfo',
  components: {
    TextPair
  },
  props: {
    point: Object
  },
  methods: {
    getTime: function (time) {
      return moment.unix(time).utc().format('MMM, D YYYY z')
    }
  }

}
</script>

<style scoped lang="scss">
  .stage-point-info {
    display: flex;
    justify-content: space-between;
    @media (min-width: $screen-md-min) {
      flex-direction: row;
      flex-wrap: nowrap;
    }
    @media (max-width: $screen-sm-max) {
      flex-direction: column;
      .pair + .pair {
        margin-top: 8px;
      }
    }
  }

</style>
