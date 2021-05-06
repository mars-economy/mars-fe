<template>
  <div class="social-networks-panel">

    <template v-for="network in socials">
      <SocialNetwork :network="network" :key="network.name"></SocialNetwork>
    </template>

  </div>
</template>

<script>
import { SOCIAL_NETWORKS } from '@/constants/socialNetworkLinks'
import SocialNetwork from '@/views/slides/layout/socialNetworks/SocialNetwork'

export default {
  name: 'SocialNetworksPanel',
  components: {
    SocialNetwork
  },
  data: function () {
    return {
      socials: SOCIAL_NETWORKS
    }
  }
}
</script>

<style scoped lang="scss">
  .social-networks-panel {
    display: flex;
    @media (min-width: $screen-md-min) {
      flex-direction: column;
      position: absolute;
      left: 2.2vw;
      padding: 0 !important;
      z-index: 1024;
      top: 50%;
      transform: translateY(-50%);
      .social-network {
        margin: 1rem 0;
      }
    }
    @media (max-width: $screen-sm-max) {
      flex-direction: row;
      width: 100%;
      padding: $padding-slide-mobile;
      position: relative;
      margin-top: auto;
      justify-content: space-between;
    }
  }

</style>
