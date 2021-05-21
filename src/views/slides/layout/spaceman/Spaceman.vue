<template>
  <div class="spaceman hidden-sm">
    <flex-row class="spaceman-label" align-v="center" align-h="between"  noWrap :class="{'label-collapse' : !isLabelOpen}">
        <span class="label-text clickable" @click="openExternalLink('https://mars-10.gitbook.io/mars/')">
          Have a question?<br>
          Please read <b>F.A.Q.</b>
        </span>
        <div class="btn-icon" @click="isLabelOpen = !isLabelOpen">
          <template v-if="isLabelOpen">
            <svg width="6" height="8" style="transform: rotate(180deg)" viewBox="0 0 6 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833496 0.809508L0.833496 1.65004C0.833496 1.83284 0.921313 2.00668 1.07006 2.11421L3.67589 3.99958L1.07006 5.88495C0.921313 5.99248 0.833496 6.16453 0.833496 6.34912L0.833496 7.18965C0.833496 7.30614 0.966117 7.37424 1.0611 7.30614L5.46985 4.11607C5.54871 4.05872 5.54871 3.94223 5.46985 3.88488L1.0611 0.694808C0.966117 0.624913 0.833496 0.693017 0.833496 0.809508Z" fill="#ffffff"/>
            </svg>
          </template>
          <template v-else>
            <span>?</span>
          </template>
        </div>
      </flex-row>
    <SpacemanSvg class="spaceman-img"></SpacemanSvg>
  </div>

</template>

<script>
import SpacemanSvg from '@/components/svgImages/SpacemanSvg'
export default {
  name: 'Spaceman',
  components: {
    SpacemanSvg
  },
  data: function () {
    return {
      isLabelOpen: false
    }
  },
  methods: {
    openExternalLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
  .spaceman {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 88px;
    z-index: 1024;
  }
  .spaceman-img {
    position: absolute;
    left: 12px;
    top: 0;
    width: 71px;
    height: 88px;
  }
  .spaceman-label {
    position: relative;
    top: 8px;
    left: 23px;
    height: 59px;
    // width: 240px;
    border: 1px dashed rgba($white, 0.5);
    border-radius: 30px;
    padding: 10px 16px 10px 65px;

    .label-text {
      font-size: 14px;
      font-weight: 200;
      line-height: 18px;
      letter-spacing: -0.02em;
      text-align: left;
      white-space: nowrap;
      text-shadow: $shadow-base;
      opacity: 1;
      width: 115px;
      transition: all 0.3s ease-out;
      overflow: hidden;
    }

    &.label-collapse {
      .label-text {
        opacity: 0.5;
        width: 0;
      }
    }
  }
  .btn-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($white, 0.05);
    border: 1px solid rgba($white, 0.1);
    cursor: pointer;
    z-index: 1030;
    &:hover {
      background-color: rgba($white, 0.1);
    }
    span {
      font-size: 18px;
      font-weight: bold;
    }
  }

</style>
