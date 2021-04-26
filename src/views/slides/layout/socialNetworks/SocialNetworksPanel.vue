<template>
  <flex-col class="social-networks-panel">

    <template v-for="network in socials">
      <SocialNetwork :network="network" :key="network.name" :isFullName="isFullName"></SocialNetwork>
    </template>

  </flex-col>
</template>

<script>
import { SOCIAL_NETWORKS } from '@/constants/socialNetworkLinks'
import SocialNetwork from '@/views/slides/layout/socialNetworks/SocialNetwork'
import Reveal from 'reveal.js/js'

export default {
  name: 'SocialNetworksPanel',
  components: {
    SocialNetwork
  },
  data: function () {
    return {
      socials: SOCIAL_NETWORKS,
      isFullName: false
    }
  },
  mounted () {
    Reveal.on('slidechanged', event => {
      this.isFullName = event.currentSlide.id === 'community'
    })
  }
}
</script>

<style scoped lang="scss">
  .social-networks-panel {
    position: absolute;
    left: 2.2vw;
    padding: 0 !important;
    z-index: 1024;
    top: 50%;
    transform: translateY(-50%);
  }

</style>
