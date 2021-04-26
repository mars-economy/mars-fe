<template>
  <flex-row align-v="center" noWrap class="social-network clickable" @click="openExternalLink(network.link)">
    <flex-row align-v="center" align-h="center" class="social-network-icon" v-html="network.icon">
    </flex-row>
    <div class="social-network-name" :class="[!isFullName ? 'hidden' : '']">
      {{network.name}}
    </div>
  </flex-row>
</template>

<script>

export default {
  name: 'SocialNetwork',
  props: {
    network: {
      name: String,
      icon: String,
      link: String
    },
    isFullName: { type: Boolean, default: false }
  },
  methods: {
    openExternalLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
  .social-network {
    margin: 1rem 0;
    font-family: "Karla", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: Max(0.8vw, 10px);
    line-height: 1em;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: $white;
  }
  .social-network-icon {
    opacity: 0.8;
  }
  .social-network-name {
    margin-left: 1em;
    opacity: 0.5;
  }

  .social-network:hover {
    * {
      opacity: 1;
    }
  }

</style>
