<template>
  <div class="contacts">
    <div class="email-container">
      <EmailContact label="Press inquiries" email="press@marseconomy.org"></EmailContact>
    </div>
    <div class="email-container">
      <EmailContact label="Other inquiries" email="support@marseconomy.org"></EmailContact>
    </div>
    <flex-row align-v="center" class="social-networks">
      <template v-for="network in socials">
        <SocialNetwork :network="network" :key="network.name" :isFullName="!isMobile"></SocialNetwork>
      </template>
    </flex-row>
   </div>

</template>

<script>
import EmailContact from './EmailContact'
import SocialNetwork from '@/views/slides/layout/socialNetworks/SocialNetwork'
import { SOCIAL_NETWORKS } from '@/constants/socialNetworkLinks'
export default {
  name: 'Contacts',
  components: {
    SocialNetwork,
    EmailContact
  },
  props: {
    isMobile: Boolean
  },
  data: function () {
    return {
      socials: SOCIAL_NETWORKS
    }
  }
}
</script>

<style scoped lang="scss">
  .email-container + .email-container {
    margin-top: 1.5rem;
    @media (max-width: $screen-sm-max) {
      margin-top: 12px;
    }
  }
  .email-container + .button-container {
    margin-top: 2rem;
  }
  .button-container + .button-container {
    margin-top: 1rem;
  }
  .social-networks {
    width: 312px;
    margin-top: 16px;
    & > div {
      width: 33%;
      margin: 10px 0;
    }
    @media (max-width: $screen-sm-max) {
      width: 200px;
      margin: 32px auto 0 auto;
      & > div {
        justify-content: center;
        transform: scale(1.3);
      }
    }
  }

</style>
