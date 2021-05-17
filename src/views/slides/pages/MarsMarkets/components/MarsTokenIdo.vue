<template>
  <div class="ido-card" :class="{'mobile' : isMobile}">
    <div class="card-label">
      <span>Mars Economy Launch!</span>
      <span class="text-muted">Decentralized Mars Token IDO</span>
    </div>
    <div class="card-body">
      <flex-col class="text-block">
        <span>Native tokens</span>
        <span>1,000,000,000 $DMT</span>
      </flex-col>
      <flex-col class="text-block">
        <span>Initial Liquidity of native tokens</span>
        <span>1,000,000 $DMT </span>
      </flex-col>
      <flex-col class="text-block">
        <span>Contract address</span>
        <span class="link" @click="navigateToContract">0xeEE23...97c</span>
      </flex-col>

    </div>

  </div>

</template>

<script>
export default {
  name: 'MarsTokenIdo',
  props: {
    isMobile: Boolean
  },
  methods: {
    navigateToContract () {
      window.open('https://bscscan.com/token/0x77da5632d829b457cd6d0de37768ef9d5c879a6c', '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

.ido-card {
  @extend %card;

  .card-label {
    @extend %card-label;
    display: flex;
    white-space: nowrap;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 $radius-base $radius-base;
    span + span {
      margin-left: 8px;
      padding-left: 8px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: -0.5em;
        bottom:  -0.5em;
        width: 1px;
        border-left: 1px solid rgba($white, 0.1);
        left: 0;
      }
    }
  }
  .card-body {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  .text-block {
    span:first-of-type {
      font-size: 14px;
      line-height: 20px;
    }
    span:last-of-type {
      font-size: 20px;
      line-height: 32px;
    }
    .link {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}

.ido-card.mobile {
  .card-label {
    flex-direction: column;
    span + span {
      margin-left: unset;
      padding-left: unset;
      margin-top: 6px;
      padding-top: 6px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: -1em;
        left: -1em;
        height: 1px;
        width: auto;
        border-top: 1px solid rgba($white, 0.1);
      }
    }
  }
  .card-body {
    flex-direction: column;
    margin-top: 40px;
  }
  .text-block {
      margin-top: 8px;
      span:last-of-type {
        font-size: 16px;
        line-height: 22px;
        font-weight: bold;
      }
    }
}

</style>
