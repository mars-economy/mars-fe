<template>
  <div class="timeline-block" :class="{'active' : isCurrent}" @click="$emit('click')">
    <div class="timeline-block-icon">
      <TimeLineIcon :icon="block.icon" :active="isCurrent"></TimeLineIcon>
    </div>
      <flex-col align-h="start">
        <div class="timeline-block-period">
          {{ block.month }}
        </div>
        <div class="h4">
          {{ block.title }}
        </div>
      </flex-col>
  </div>

</template>

<script>
import TimeLineIcon from '@/views/slides/pages/TimeLine/components/TimeLineIcon'
export default {
  name: 'TimeLineBlockTitle',
  components: { TimeLineIcon },
  props: {
    block: {
      title: String,
      content: String,
      icon: String,
      month: String
    },
    isCurrent: Boolean
  }
}
</script>

<style scoped lang="scss">
  .timeline-block {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .timeline-block-icon {
      width: 48px;
      height: 48px;
  }
  .timeline-block-period {
    @extend .caption-bold;
      margin-left: 16px;
      opacity: 0.5;
      & + .h4 {
        margin-left: 16px;
      }
  }

</style>
