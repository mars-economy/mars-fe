<template>
  <section id="timeline" name="roadmap" class="slide-container" title="Roadmap">
    <flex-col align-h="center" align-v="center" class="vf__flex-nowrap">
      <div class="h4 hidden-sm">Mars Economy project roadmap</div>
      <div class="timeline-container">
        <div v-for="(block, index) in blocksArray" :key="index" class="timeline-item">
          <template v-if="!isMobile">
            <TimeLineBlock :block="block" :isCurrent="block.current" />
          </template>
          <template v-else>
            <TimeLineBlockTitle :block="block" :isCurrent="block.current" @click="showModal(block)" clickable />
          </template>
        </div>
      </div>
    </flex-col>
  </section>
</template>

<script>
import TimeLineBlock from './components/TimeLineBlock'
import { MILESTONES } from '@/constants/milestones'
import TimeLineBlockModal from './components/TimeLineBlockModal'
import Reveal from 'reveal.js/js'
import TimeLineBlockTitle from './components/TimeLineBlockTitle'

export default {
  name: 'TimeLIne',
  components: {
    TimeLineBlockTitle,
    TimeLineBlock
  },
  props: {
    isMobile: Boolean
  },
  data: function () {
    return {
      blocksArray: MILESTONES
    }
  },
  methods: {
    showModal (block) {
      this.$modal.show(
        TimeLineBlockModal,
        { block: block },
        { classes: ['mobile-modal', 'custom-modal'], adaptive: true },
        { opened: this.isModalOpen, closed: this.isModalClose }
      )
    },
    isModalOpen () {
      Reveal.configure({ mouseWheel: false, touch: false, keyboard: false })
      Reveal.getCurrentSlide().classList.add('back-blur')
    },
    isModalClose () {
      Reveal.configure({ mouseWheel: true, touch: true, keyboard: true })
      Reveal.getCurrentSlide().classList.remove('back-blur')
    }
  }
}
</script>

<style scoped lang="scss">
  .h4 {
    margin-bottom: 3rem;
  }
  .timeline-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 6.5rem;
    background-image: url("data:image/svg+xml,%3Csvg width='980' height='18' viewBox='0 0 980 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.5' filter='url(%23filter0_d)'%3E%3Cpath d='M8 9L972 9' stroke='white' stroke-dasharray='1 5'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0' y='0.5' width='980' height='17' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center 1.3rem;
    @media (max-width: $screen-sm-max) {
      padding: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='18' height='387' viewBox='0 0 18 387' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.7' filter='url(%23filter0_d)'%3E%3Cpath d='M8.99996 379L9.00015 8' stroke='white' stroke-dasharray='1 5'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0.5' y='0' width='17.0002' height='387' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A");
      background-position: 15px center;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
  .timeline-item {
    @media (min-width: $screen-md-min) {
      margin-left: 1rem;
      margin-right: 1rem;
      width: 173px;
    }
    @media (max-width: $screen-sm-max) {
      width: 240px;
      & + .timeline-item {
        margin-top: 16px;
      }
    }
  }
 </style>
