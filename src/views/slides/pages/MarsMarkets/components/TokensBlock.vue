<template>
  <div class="tokens-block-card" :class="{'muted' : isMuted}">
      <flex-row class="card-header" alignV="center">
        <flex-row v-html="block.icon" class="tokens-block-icon"></flex-row>
        <div>{{ block.title }}</div>
      </flex-row>
      <div class="card-body" :class="{'muted' : isMuted}">
        {{ block.content }}
      </div>
    <div class="card-footer" v-if="isMuted">
      COMING SOON
    </div>
    </div>
</template>

<script>

export default {
  name: 'TokensBlock',
  props: {
    block: {
      title: String,
      content: String,
      icon: String
    },
    isMuted: Boolean
  }
}
</script>

<style lang="scss" scoped>

  .tokens-block-card {
    @extend %card;
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
  .card-body {
    font-size: 0.875rem;
    line-height: 1.4em;
    letter-spacing: -0.02em;
  }
  .tokens-block-card.muted {
    padding-bottom: 40px;
    position: relative;
    .card-body, .card-header {
      @extend .text-muted
    }
  }
  .card-footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @extend %card;
    padding: 0.375rem 0.75rem;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 0.75rem;
    line-height: 1.16em;
    text-align: center;
    letter-spacing: -0.02em;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

</style>
