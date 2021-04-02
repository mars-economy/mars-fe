<template>
  <section id="introduction-second" data-visibility="uncounted" title="Introduction">
    <flex-row align-h="center" align-v="center" class="vf__flex-nowrap">
      <flex-col class="introduction-text">
        <h6>
          Our belief is that everyone's should be able to play
          <br/> a role in creating and shaping the future of Mars,
          <br/> whether or not they travel there themselves.
        </h6>
      </flex-col>
      <flex-col class="introduction-image">
        <svg fill="none" height="525" viewBox="0 0 351 525" width="351" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <circle cx="163.5" cy="121.5" fill="white" fill-opacity="0.05" r="105.5"/>
          </g>
          <g filter="url(#filter1_d)">
            <circle cx="281" cy="451" fill="white" fill-opacity="0.05" r="50"/>
          </g>
          <g filter="url(#filter2_d)">
            <circle cx="39" cy="387" fill="white" fill-opacity="0.05" r="19"/>
          </g>
          <defs>
            <filter id="filter0_d" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="251"
                    width="251" x="38" y="0">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/>
            </filter>
            <filter id="filter1_d" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="140"
                    width="140" x="211" y="385">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/>
            </filter>
            <filter id="filter2_d" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="78"
                    width="78" x="0" y="352">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/>
            </filter>
          </defs>
        </svg>

      </flex-col>
    </flex-row>

  </section>
</template>

<script>
export default {
  name: 'IntroductionSecond'
}
</script>

<style scoped>
  .introduction-text {
    flex-grow: 2;
  }

  h6 {
    text-align: left;
    line-height: 1.8 !important;
  }
</style>
