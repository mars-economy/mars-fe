<template>
  <section id="mars-markets" name="mars markets">
    <flex-row align-h="center" align-v="center" class="vf__flex-nowrap">
      <flex-col class="mars-markets-image">
        <img alt="racket" src="/images/mars-economy-racket.png">
      </flex-col>
      <flex-col class="mars-markets-content">
        <h4>Mars Markets</h4>
        <h6>$Mars token holders will both be able to submit and vote on project proposals as well as help incentivize
          Mars projects large and small by voting on ecosystem tokens for entities invested in the Mars
          colonization.</h6>
        <h6>You can buy $MARS tokens now - see the available markets below.</h6>
        <TokensBlock></TokensBlock>
      </flex-col>
    </flex-row>
  </section>
</template>

<script>
import TokensBlock from './components/TokensBlock'

export default {
  name: 'MarsMarkets',
  components: { TokensBlock }
}
</script>

<style lang="scss" scoped>
  h4 {
    text-transform: none !important;
    letter-spacing: -0.02em;
  }

  h6 {
    font-size: 1.2rem;
    line-height: 1.8 !important;
  }

  .mars-markets-image {
    width: 33%;

    img {
      //width: 350px;
      //height: 500px;
    }
  }

  .mars-markets-content {
    padding-left: 10%;
    flex-grow: 2;
    text-align: left;
    width: 66%;
  }
</style>
