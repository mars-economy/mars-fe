<template>
  <div class="journey-bg">
    <JourneyToMarsGrid></JourneyToMarsGrid>
    <template v-for="(category,index) in categories">
      <JourneyStage :key="'stage_'+index" :index=index+1 :stage="category"></JourneyStage>
      <template v-for="(milestone, ind) in milestones(category.id, index)">
        <JourneyStagePoint :offsetX="category.offsetX+228"
                           :point="milestone"
                           :stage="category.name"
                           :status="milestone.status.toLowerCase()"
                           :key="'point_'+index+ind">
        </JourneyStagePoint>
      </template>
    </template>
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

export default {
  name: 'SlideImageBlock',
  components: {
    JourneyStagePoint,
    JourneyStage,
    JourneyToMarsGrid
  },
  methods: {
    milestones (categoryId, categoryIndex) {
      return this.$store.state.phases.milestones
        .filter(item => item.category.id === categoryId)
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

</style>
