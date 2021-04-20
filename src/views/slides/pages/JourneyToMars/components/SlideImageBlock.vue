<template>
  <div class="journey-bg">
    <JourneyToMarsGrid></JourneyToMarsGrid>
    <template v-for="(stage,index) in stages">
      <JourneyStage :stage="stage" :index=index+1 :key="'stage_'+index"></JourneyStage>
      <template v-for="(point, ind) in stage.points">
        <JourneyStagePoint :point="point" :status="stage.status" :offsetX="stage.offsetX+228" :key="'point_'+index+ind"></JourneyStagePoint>
      </template>
    </template>

  </div>

</template>

<script>
import JourneyToMarsGrid from '@/views/slides/pages/JourneyToMars/components/JourneyStages/JourneyToMarsGrid'
import { STAGES } from '@/constants/journeyStages'
import JourneyStage from '@/views/slides/pages/JourneyToMars/components/JourneyStages/JourneyStage'
import JourneyStagePoint from '@/views/slides/pages/JourneyToMars/components/JourneyStages/JourneyStagePoint'

export default {
  name: 'SlideImageBlock',
  components: {
    JourneyStagePoint,
    JourneyStage,
    JourneyToMarsGrid
  },
  data: function () {
    return {
      stages: STAGES
    }
  }
}
</script>

<style scoped lang="scss">
  .journey-bg {
    position: relative;
  }

</style>
