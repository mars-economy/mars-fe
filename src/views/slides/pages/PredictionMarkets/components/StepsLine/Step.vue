<template>
  <div class="step-container">
    <div v-html="step.icon" class="step-icon"></div>

    <div class="step-info">
      <div>
        <div class="step-label">
          <span>step {{number}}</span>
          <flex-row class="clickable" @click="openExternalLink(step.link)" align-v="center">
            read more
            <LinkIcon  class="mr-auto"></LinkIcon>
          </flex-row>
        </div>
      </div>
      <flex-row>
        <span :class="{'text-small' : isMobile}" style="flex-grow: 0">{{step.description}}</span>
      </flex-row>
    </div>

  </div>

</template>

<script>
import LinkIcon from '@/components/svgImages/LinkIcon'
export default {
  name: 'Step',
  components: {
    LinkIcon
  },
  props: {
    step: {
      icon: String,
      description: String,
      link: String
    },
    number: Number,
    isMobile: Boolean
  },
  methods: {
    openExternalLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

  .step-container {
    display: flex;
    flex-direction: row;
  }
  .step-icon {
    margin-right: 12px;
  }
  .step-info {
    text-align: left;

    > div + div {
      margin-top: 0.5rem;
    }
  }
  .step-label {
    @extend %card-label;
    position: relative;
    border-radius: $radius-base;
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    span:first-of-type {
      opacity: 0.5;
      margin-right: 8px;
      padding-right: 8px;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 1px;
        right: 0;
        top: -0.5rem;
        bottom: -0.5rem;
        border-right: $border-light;
      }
    }
  }
</style>
