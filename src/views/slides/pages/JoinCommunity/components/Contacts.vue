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
        <SocialNetwork :network="network" :key="network.name" isFullName></SocialNetwork>
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
  }
  .email-container + .button-container {
    margin-top: 2rem;
  }
  .button-container + .button-container {
    margin-top: 1rem;
  }
  .social-networks {
    width: 312px;
    margin-top: 1rem;
    & > div {
      width: 33%;
      margin: 10px 0;
    }
  }

</style>
