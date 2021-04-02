<template>
  <section id="mars-markets" title="Mars Markets">
    <flex-row align-h="center" align-v="center" class="vf__flex-nowrap">
      <flex-col class="mars-markets-image">
        <svg fill="none" height="548" viewBox="0 0 548 548" width="548" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f)">
            <circle cx="274" cy="274" fill="url(#paint0_radial)" r="154"/>
          </g>
          <g filter="url(#filter1_df)">
            <path
              d="M427.502 327.455C422.522 382.735 385.198 424.017 327.47 427.501C298.615 429.242 275.511 419.297 258.677 401.407C241.831 383.505 231.237 357.615 227.496 327.438C223.768 297.361 234.698 273.269 253.585 256.246C272.485 239.211 299.371 229.243 327.531 227.499C383.741 224.017 432.473 272.276 427.502 327.455Z"
              stroke="#FFCC00"/>
          </g>
          <g filter="url(#filter2_df)">
            <path
              d="M428 274.067C426 286.067 419 292.567 407 295.067C395 297.567 386 285.665 386 274.067C386 262.469 395 252.067 407 253.067C419 254.067 430 262.067 428 274.067Z"
              fill="#FFCC00" fill-opacity="0.05"/>
            <path
              d="M427.507 273.984C426.52 279.903 424.309 284.424 420.9 287.772C417.487 291.124 412.834 293.341 406.898 294.577C401.103 295.784 396.024 293.525 392.369 289.517C388.706 285.499 386.5 279.745 386.5 274.067C386.5 262.696 395.311 252.594 406.958 253.565C412.87 254.058 418.51 256.274 422.414 259.812C426.306 263.339 428.475 268.174 427.507 273.984Z"
              stroke="#FFCC00"/>
          </g>
          <defs>
            <filter id="filter0_f" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="548"
                    width="548" x="0"
                    y="-3.05176e-05">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="60"/>
            </filter>
            <filter id="filter1_df" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="261.375"
                    width="262.082"
                    x="196.271" y="196.822">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="15"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.505882 0 0 0 0 0.0196078 0 0 0 1 0"/>
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/>
              <feGaussianBlur result="effect2_foregroundBlur" stdDeviation="2"/>
            </filter>
            <filter id="filter2_df" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="102.402"
                    width="102.237" x="356"
                    y="223">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="15"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.505882 0 0 0 0 0.0196078 0 0 0 1 0"/>
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/>
              <feGaussianBlur result="effect2_foregroundBlur" stdDeviation="2"/>
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
