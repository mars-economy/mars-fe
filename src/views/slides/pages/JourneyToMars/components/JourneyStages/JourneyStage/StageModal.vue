<template>
  <div>
    <ModalLabel :labels="isMobile ? 'Phase & milestones' : 'About stage'"></ModalLabel>
    <ModalCloseIcon @closeModal="$emit('close')"></ModalCloseIcon>

    <div class="modal-content">
      <ModalHeader :header="name" level="1"></ModalHeader>
      <div class="modal-body"> {{ description }}</div>
      <template v-if="milestones">
        <div class="milestones-list">
          <flex-col v-for="(milestone, index) in milestones" :key="index" class="milestone-list-item">
            <ModalHeader :header="milestone.name" level="2"></ModalHeader>
            <StagePointInfo :point="milestone"></StagePointInfo>
            <Button color="primary" name="Show predictions" icon class="mr-auto ml-auto"></Button>
          </flex-col>

        </div>
      </template>
      <div class="modal-footer hidden-sm">
        <Button color="primary" icon name="Go to application" v-on:click="navigateToApp()"></Button>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '@/components/buttons/Button'
import { ICONS } from '@/constants/icons'
import ModalLabel from '@/components/modal/ModalLabel'
import ModalCloseIcon from '@/components/modal/ModalCloseIcon'
import ModalHeader from '@/components/modal/ModalHeader'
import StagePointInfo from '../JourneyStagePoint/StagePointInfo'

export default {
  name: 'StageModal',
  components: {
    StagePointInfo,
    ModalHeader,
    ModalCloseIcon,
    ModalLabel,
    Button
  },
  props: {
    name: String,
    description: String,
    milestones: {
      type: Array,
      default: null
    },
    isMobile: {
      type: Boolean,
      dafault: false
    }
  },
  data: function () {
    return {
      iconClose: ICONS.close
    }
  },
  methods: {
    navigateToApp (milestoneId = null) {
      if (!milestoneId) {
        window.open(process.env.VUE_APP_MARS_APPLICATION, '_blank')
        return
      }
      window.open(process.env.VUE_APP_MARS_APPLICATION + '/milestone/' + milestoneId, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

  .milestone-list-item {
    padding: 12px 0;
    margin-top: 12px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -12px;
      right: -12px;
      border-top: $border-light;
    }

    .stage-point-info {
      margin-bottom: 12px;
    }
  }

</style>
