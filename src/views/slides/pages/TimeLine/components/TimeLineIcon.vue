<template>
    <flex-row class="timeline-icon-container" :class="{'active' : active}">
      <flex-row class="timeline-icon" :class="{'active' : active}">
        <div v-html="icon"></div>
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
    padding: 0.3rem;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    &.active {
      border: 1px solid rgba($color-primary, 0.5);
    }
  }
</style>
