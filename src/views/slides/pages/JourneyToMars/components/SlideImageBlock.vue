<template>
  <div class="journey-bg">
    <JourneyToMarsGrid v-if="!isMobile"/>
    <JourneyToMarsGridMobile v-else/>
    <div :class="{'stage-group': isMobile}">
      <template v-for="(category,index) in categories">
        <JourneyStage :key="'stage_'+index"
                      :index=index+1
                      :stage="category"
                      :milestones="milestones(category.id, index)"
                      :isMobile="isMobile">
        </JourneyStage>
        <template>
          <template v-for="(milestone, ind) in milestones(category.id, index)">
            <JourneyStagePoint :offsetX="category.offsetX+228"
                               :point="milestone"
                               :stage="category.name"
                               :status="milestone.status.toLowerCase()"
                               :key="'point_'+index+ind">
            </JourneyStagePoint>
          </template>
        </template>
      </template>

    </div>
  </div>
</template>

<script>
import JourneyToMarsGrid from '@/views/slides/pages/JourneyToMars/components/JourneyStages/JourneyToMarsGrid'
import JourneyStage from '@/views/slides/pages/JourneyToMars/components/JourneyStages/JourneyStage/JourneyStage'
import { MODULE_NAMES } from '../../../../../store'
import { mapState } from 'vuex'
import { CATEGORIES_POSITION, MILESTONES_POSITION } from '../../../../../constants/journeyStages'
import JourneyStagePoint
  from '@/views/slides/pages/JourneyToMars/components/JourneyStages/JourneyStagePoint/JourneyStagePoint'
import JourneyToMarsGridMobile from './JourneyStages/JourneyToMarsGridMobile'
import _ from 'lodash'

export default {
  name: 'SlideImageBlock',
  components: {
    JourneyToMarsGridMobile,
    JourneyStagePoint,
    JourneyStage,
    JourneyToMarsGrid
  },
  props: {
    isMobile: Boolean
  },
  methods: {
    milestones (categoryId, categoryIndex) {
      let list = this.$store.state.phases.milestones
        .filter(item => item.category.id === categoryId)
      list = _.orderBy(list, ['position'], ['asc'])
      return list
        .map((value, index, arr) => {
          let predictors = 0
          let dueDate = 0
          const predictions = this.$store.state.phases.predictions.filter(item => item.milestone.id === arr[index].id)
          Array.from(predictions).forEach(prediction => {
            predictors += prediction.predictorsNumber
            dueDate = prediction.dueDate
          })
          Object.assign(arr[index], { predictions })
          Object.assign(arr[index], {
            predictors,
            dueDate
          })
          Object.assign(arr[index], MILESTONES_POSITION[categoryIndex].points[index])
          return arr[index]
        })
    }
  },
  computed: {
    ...mapState(MODULE_NAMES.PHASES, {
      categories (state) {
        return Array.from(state.categories).map((value, index) => {
          return Object.assign(value, CATEGORIES_POSITION[index])
        })
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .journey-bg {
    position: relative;
  }

  .stage-group {
    position: absolute;
    top: 100px;
    right: 23px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
