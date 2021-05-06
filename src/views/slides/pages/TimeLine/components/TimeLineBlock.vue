<template>
  <div class="timeline-block" :class="{'active' : isCurrent}" @click="$emit('click')">
    <div class="timeline-block-icon">
      <TimeLineIcon :icon="block.icon" :active="isCurrent"></TimeLineIcon>
    </div>
    <template v-if="!isMobile">
      <div class="timeline-block-period">
        {{ block.month }}
      </div>
      <div class="timeline-block-card">
        <div class="card-header">
          {{ block.title }}</div>
        <div class="card-body">
          {{ block.content }}
        </div>
      </div>
    </template>
    <template v-else>
      <flex-col align-h="start">
        <div class="timeline-block-period">
          {{ block.month }}
        </div>
        <div class="h4">
          {{ block.title }}
        </div>
      </flex-col>
    </template>
  </div>
</template>

<script>

import TimeLineIcon from '@/views/slides/pages/TimeLine/components/TimeLineIcon'
export default {
  name: 'TimeLineBlock',
  components: { TimeLineIcon },
  props: {
    block: {
      title: String,
      content: String,
      icon: String,
      month: String
    },
    isCurrent: Boolean,
    isMobile: Boolean
  }
}
</script>

<style lang="scss" scoped>

  .timeline-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

  .timeline-block-icon {
    width: 64px;
    height: 64px;
  }
  .timeline-block-period {
    @extend .caption-bold;
      text-shadow: $heading-shadow-base;
      margin-top: 1rem;
      height: 2rem;
  }

  .timeline-block-card {
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: -0.02em;
    text-align: left;

    .card-header, .card-body {
      @extend %card;
    }

    .card-header {
      font-weight: bold;
      border-radius: $radius-base $radius-base 0 0;
      padding-bottom: 12px;
      margin-bottom: 4px;
    }

    .card-body {
      border-radius: 0 0 $radius-base $radius-base;
      padding-top: 12px;
    }
  }

</style>
