<template>
  <div class="step-container">
    <div v-html="step.icon" class="step-icon"></div>

    <div class="step-info">
      <div>
        <div class="step-label"> step {{number}}</div>
      </div>
      <flex-row>
        <span><a :href="step.link">{{step.description}}</a></span>
        <LinkIcon :link="step.link"></LinkIcon>
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
  }
}
</script>

<style scoped lang="scss">

  .step-container {
    display: flex;
    flex-direction: row;

  }
  .step-icon {
    margin-right: 1rem;
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
