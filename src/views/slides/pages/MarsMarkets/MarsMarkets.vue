<template>
  <section id="mars-markets" title="Mars Markets">
    <flex-row align-h="center" align-v="center" class="vf__flex-nowrap">
      <flex-col class="mars-markets-image">
        <svg fill="none" height="548" viewBox="0 0 548 548" width="548" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f)">
            <circle cx="274" cy="274" fill="url(#paint0_radial)" r="154"/>
          </g>
          <defs>
            <filter id="filter0_f" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="548"
                    width="548" x="0" y="-3.05176e-05">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="60"/>
            </filter>
            <radialGradient id="paint0_radial" cx="0" cy="0"
                            gradientTransform="translate(274 274) rotate(90) scale(154)" gradientUnits="userSpaceOnUse"
                            r="1">
              <stop stop-color="#FFEE59"/>
              <stop offset="0.291667" stop-color="#FFEE59"/>
              <stop offset="1" stop-color="#E15F00" stop-opacity="0"/>
            </radialGradient>
          </defs>
        </svg>
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
    width: 300px;
    height: 300px;

    svg {
      width: 300px;
      height: 300px;
    }
  }

  .mars-markets-content {
    padding-left: 10%;
    flex-grow: 2;
    text-align: left;
  }
</style>
