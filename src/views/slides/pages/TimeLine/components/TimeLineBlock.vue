<template>
  <div class="timeline-block" :class="{'active' : isCurrent}">
    <div class="timeline-block-icon">
      <TimeLineIcon :icon="block.icon" :active="isCurrent"></TimeLineIcon>
    </div>
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
    isCurrent: Boolean
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
    width: 4rem;
    height: 4rem;
  }

  .timeline-block-period {
    font-size: 0.75rem;
    line-height: 0.875rem;
    font-weight: bold;
    letter-spacing: -0.02em;
    text-transform: uppercase;
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
