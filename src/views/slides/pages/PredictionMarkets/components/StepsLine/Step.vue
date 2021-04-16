<template>
  <div class="step-container">
    <div v-html="step.icon" class="step-icon"></div>

    <div class="step-info">
      <div>
        <Button :name="'step '+number" color="light" size="small" :link="step.link"></Button>
      </div>
      <flex-row>
        <span>{{step.description}}</span>
        <LinkIcon :link="step.link"></LinkIcon>
      </flex-row>
    </div>

  </div>

</template>

<script>
import LinkIcon from '@/components/svgImages/LinkIcon'
import Button from '@/components/buttons/Button'
export default {
  name: 'Step',
  components: {
    Button,
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
</style>
