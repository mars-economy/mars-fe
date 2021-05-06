<template>
  <div class="stage-label" @click="showModal()"
       :id="'journey-stage-'+index"
       :style="[ !isMobile ? {left: stage.offsetX+'px', top: stage.offsetY+'px'} : '']"
       :class="'stage'+index">
    <flex-row align-v="center" align-h="start" class="stage-label-body">
      <NumberCircle :number="index"></NumberCircle>
      <div>{{ stage.name }}</div>
    </flex-row>
  </div>

</template>

<script>
import StageModal from '@/views/slides/pages/JourneyToMars/components/JourneyStages/JourneyStage/StageModal'
import NumberCircle from '@/components/block/NumberCircle'
import Reveal from 'reveal.js/js'

export default {
  name: 'JourneyStage',
  components: {
    NumberCircle
  },
  props: {
    stage: Object,
    milestones: Array,
    index: Number,
    isMobile: Boolean
  },
  methods: {
    showModal () {
      if (!this.isMobile) {
        this.$modal.show(
          StageModal,
          { name: this.stage.name, description: this.stage.description },
          { height: 'auto', classes: 'custom-modal' },
          { opened: this.isModalOpen, closed: this.isModalClose }
        )
      } else {
        this.$modal.show(
          StageModal,
          { name: this.stage.name, description: this.stage.description, milestones: this.milestones, isMobile: true },
          { height: 'auto', classes: ['custom-modal', 'mobile-modal', 'stage-point-modal'] },
          { opened: this.isModalOpen, closed: this.isModalClose }
        )
      }
    },
    isModalOpen () {
      Reveal.configure({ mouseWheel: false, touch: false, keyboard: false })
    },
    isModalClose () {
      Reveal.configure({ mouseWheel: true, touch: true, keyboard: true })
    }
  }
}
</script>

<style scoped lang="scss">
  .stage-label {
    width: 232px;
    height: 42px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    cursor: pointer;
    @media (min-width: $screen-md-min) {
      position: absolute;
    }
    @media (max-width: $screen-sm-max) {
      position: relative;
    }

    &:after {
      content: '';
      position: absolute;
      right: -2px;
      width: 6px;
      top: 0;
      bottom: 0;
      z-index: -1;
      box-sizing: border-box;
    }
    &.stage1:after { background:  linear-gradient(-90deg, $color-info, transparent); }
    &:not(.stage1):after { background: linear-gradient(-90deg, $color-primary, transparent); }

  }
  .stage-label-body {
    background: rgba($white, 0.03);
    border: 1px solid rgba($white, 0.03);
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    border-radius: 21px 0px 0px 21px;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.29em;
    letter-spacing: -0.02em;
    flex-grow: 1;
  }
  .number-circle {
    margin: auto 0.6em;
  }

</style>
