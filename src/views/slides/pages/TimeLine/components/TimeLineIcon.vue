<template>
  <div class="vf__flex timeline-icon-block vf__flex-dir--column">
    <div :class="isLast ? 'last' : ''"
         class="timeline-block-icon vf__flex vf__align-items-center vf__justify-content-center">
      <div class="vf__flex vf__align-items-center vf__justify-content-center" v-html="icon"></div>
    </div>
    <div class="timeline-block-month">{{ month }}</div>
  </div>
</template>

<script>
export default {
  name: 'TimeLineIcon',
  props: {
    icon: String,
    month: String,
    isLast: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .timeline-icon-block {
    position: relative;
    width: 100%;
    justify-content: center;

    & > div {
      display: flex;
      align-self: center;
    }

    .timeline-block-icon {
      & > div {
        width: 64px;
        height: 64px;
        background-repeat: no-repeat;
        background-image: url("../../../../../assets/images/timeline-round.svg");
        margin-bottom: 30px;
      }

      &:not(.last)::after {
        content: " ";
        display: block;
        position: absolute;
        height: 10px;
        background-image: url("../../../../../assets/images/dashed-line.svg");
        width: 78%;
        left: 60%;
        top: calc(50% - 30px);
      }
    }

    .timeline-block-month {
      font-family: Karla;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      /* identical to box height */

      letter-spacing: -0.02em;
      text-transform: uppercase;
    }

  }

</style>
