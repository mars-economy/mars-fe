<template>
  <div class="step-container">
    <div v-html="step.icon" class="step-icon"></div>

    <div class="step-info">
      <div>
        <div class="step-label"> step {{number}}</div>
      </div>
      <flex-row noWrap>
        <span class="text-small" style="flex-grow: 0"><a :href="step.link">{{step.description}}</a></span>
        <LinkIcon @click="openExternalLink(step.link)" class="mr-auto"></LinkIcon>
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
    number: Number
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
    display: inline-block;
  }
</style>
