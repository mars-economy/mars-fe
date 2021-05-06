<template>
  <div class="tokens-block-card" :class="[isMuted ? 'muted' : 'clickable', {'mobile' : isMobile}]" @click="openExternalLink">
      <flex-row class="card-header" alignV="center">
        <flex-row v-html="block.icon" class="tokens-block-icon"></flex-row>
        <div>{{ block.title }}</div>
        <div v-if="isMobile && block.link" class="ml-auto">
          <Button name="go to market" color="none" icon txtOnly></Button>
        </div>
      </flex-row>
      <div class="card-body" :class="{'muted' : isMuted}">
        {{ block.content }}
        <flex-col align-h="end" class="card-button" v-if="block.link && !isMobile">
          <Button name="go to market" color="none" icon txtOnly></Button>
        </flex-col>
      </div>
    <div class="card-label" v-if="isMuted">
      COMING SOON
    </div>
    </div>
</template>

<script>

import Button from '@/components/buttons/Button'
export default {
  name: 'TokensBlock',
  components: {
    Button
  },
  props: {
    block: {
      title: String,
      content: String,
      icon: String,
      link: String
    },
    isMobile: Boolean,
    isMuted: Boolean
  },
  methods: {
    openExternalLink () {
      if (this.block.link) {
        window.open(this.block.link, '_blank')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .tokens-block-card {
    @extend %card;
    padding: 16px 20px;
    &:not(.mobile) {
      padding: 24px 20px;
      min-height: 100%;
    }

    &.clickable:hover {
      background-color: rgba($white, 0.1)
    }
  }
  .card-header {
    font-size: 1rem;
    line-height: 1.4em;
    margin-bottom: 0.3em;
    font-weight: bold;
  }
  .tokens-block-icon {
    margin-right: 0.375rem
  }
  .tokens-block-card.muted {
    position: relative;
    .card-body, .card-header {
      @extend .text-muted
    }
    @media (min-width: $screen-md-min) {
      padding-bottom: 40px;
    }
  }
  .card-button {
    margin-top: 14px;
  }
  .card-label {
    position: absolute;
    padding: 0.375rem 0.75rem;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 0.75rem;
    line-height: 1.16em;
    text-align: center;
    letter-spacing: -0.02em;
    @extend %card;
    @media (min-width: $screen-md-min) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    @media (max-width: $screen-sm-max) {
      top: 0;
      right: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;

    }
  }
</style>
