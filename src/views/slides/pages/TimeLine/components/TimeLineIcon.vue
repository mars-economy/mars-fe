<template>
    <flex-row class="timeline-icon-container" :class="{'active' : active}">
      <flex-row class="timeline-icon" :class="{'active' : active}">
        <span v-html="icon"></span>
      </flex-row>
    </flex-row>
</template>

<script>
export default {
  name: 'TimeLineIcon',
  props: {
    icon: String,
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>

  .timeline-icon-container, .timeline-icon {
    background: rgba($color-primary, 0.05);
    border: 1px solid rgba($color-primary, 0.05);
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    line-height: 1;
    width: 100%;
    height: 100%;

    &.active {
      border: 1px solid rgba($color-primary, 0.5);
    }
  }
  @media (min-width: $screen-md-min) {
    .timeline-icon-container, .timeline-icon {
      padding: 4px;
    }
  }
  @media (max-width: $screen-sm-max) {
    .timeline-icon-container {
      padding: 3px;
    }
    .timeline-icon {
      padding: 3px;
      backdrop-filter: none;
      span {
        transform: scale(0.75);
      }
    }
  }

</style>
