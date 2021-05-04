<template>
  <section id="mars-markets" name="mars markets" class="slide-container">
    <div class="mars-markets-container">
      <div class="mars-markets-image" v-if="!isMobile">
        <MarsMarketsSvg></MarsMarketsSvg>
      </div>
      <div class="mars-markets-content">
        <div class="h4 hidden-sm">Mars Markets</div>
        <div>The Decentralized Mars Token ($DMT) holders have the ability to submit and vote on project proposals. Ecosystem pool tokens will be distributed gradually to organizations advancing Mars colonization, as voted on by the community.
        </div>
        <div>You can buy $DMT tokens now - see the available markets below.</div>

        <div class="tokens-block-container">
          <div v-for="(block, index) in blocksArray" v-bind:key="index" class="tokens-block-item">
            <TokensBlock :block="block" :is-muted="block.waiting" :isMobile="isMobile"></TokensBlock>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import TokensBlock from './components/TokensBlock'
import MarsMarketsSvg from '@/components/svgImages/MarsMarketsSvg'

export default {
  name: 'MarsMarkets',
  components: { MarsMarketsSvg, TokensBlock },
  props: {
    isMobile: Boolean
  },
  data: function () {
    return {
      blocksArray: [
        {
          icon: '<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path opacity="0.5" d="M7.62715 7.57649C8.58635 7.57649 9.36393 6.83488 9.36393 5.92005C9.36393 5.00523 8.58635 4.26362 7.62715 4.26362C6.66796 4.26362 5.89038 5.00523 5.89038 5.92005C5.89038 6.83488 6.66796 7.57649 7.62715 7.57649Z" fill="white"/>\n' +
            '<path d="M2.86831 9.16865V0.00157166H0V12.0583C0 14.7697 1.51411 16.0455 4.57877 15.9989H8.89034V13.6135H4.59294C3.30756 13.6256 2.86831 13.172 2.86831 11.953V9.16865Z" fill="white"/>\n' +
            '<path opacity="0.5" d="M10.8761 7.13084V15.9982H13.7444V3.94352C13.7444 1.2341 12.2324 -0.0416335 9.16568 0.000891007H4.85815V2.38834H9.15353C10.4389 2.37619 10.8761 2.82979 10.8761 4.0468V7.13084Z" fill="white"/>\n' +
            '</svg>\n',
          title: 'Liquifi',
          content: 'A new-gen decentralized exchange on Binance Smart Chain and Ethereum.',
          link: 'https://app.liquifi.org/'
        },
        {
          icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.87697 2.5C2.62461 1.2 3.63407 0 4.94637 0C6.10725 0 7.06625 0.95 7.06625 2.1V4.7C7.36908 4.7 7.67192 4.65 7.97476 4.65C8.2776 4.65 8.52997 4.65 8.83281 4.7V2.1C8.83281 0.95 9.7918 0 10.9527 0C12.265 0 13.2744 1.2 13.0726 2.5L12.5173 5.55C14.4858 6.4 16 7.9 16 9.75V10.9C16 12.45 14.9905 13.75 13.5268 14.6C12.0631 15.5 10.1451 16 7.97476 16C5.80442 16 3.88644 15.5 2.42271 14.6C1.00946 13.75 0 12.45 0 10.9V9.75C0 7.9 1.46372 6.4 3.43218 5.55L2.87697 2.5ZM11.5 6L12 2.5C12.1514 1.6 11.959 1 11 1C10.1924 1 9.66275 1.3 9.66275 2.1L9.48896 6.35C9.28707 6.3 9.0347 6.3 8.83281 6.3C8.52997 6.3 8.2776 6.25 7.97476 6.25C7.67192 6.25 7.36908 6.25 7.06625 6.3C6.86435 6.3 6.61199 6.35 6.41009 6.35V2.1C6.41009 1.3 5.75394 0.65 4.94637 0.65C4.03785 0.65 3.33123 1.5 3.53312 2.4L4.5 5.95C2.38013 6.75 1 8 0.656151 9.75V10.95C0.656151 13.4 3.93691 15.4 7.97476 15.4C12.0126 15.4 15.2934 13.4 15.2934 10.95V9.8C15.3438 8.15 13.6703 6.8 11.5 6Z" fill="white"/>\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.53329 2.39991C3.33139 1.49991 4.03802 0.64991 4.94654 0.64991C5.75411 0.64991 6.41026 1.29991 6.41026 2.09991V5.39991C6.91499 5.34991 7.41972 5.29991 7.97493 5.29991C8.47966 5.29991 8.98439 5.34991 9.48912 5.39991V2.09991C9.48912 1.29991 10.1453 0.64991 10.9528 0.64991C11.8614 0.64991 12.568 1.49991 12.4166 2.39991L11.7604 5.99991C13.8803 6.79991 15.344 8.19991 15.344 9.79991C15.344 12.2499 12.0633 14.2499 8.0254 14.2499C3.98754 14.2499 0.706787 12.2499 0.706787 9.79991C0.706787 8.19991 2.12004 6.79991 4.23991 5.99991L3.53329 2.39991ZM5.95575 9.45C5.95575 10.1 5.60244 10.65 5.14818 10.65C4.69392 10.65 4.34061 10.1 4.34061 9.45C4.34061 8.8 4.69392 8.25 5.14818 8.25C5.60244 8.25 5.95575 8.8 5.95575 9.45ZM10.7508 10.65C11.205 10.65 11.5583 10.1 11.5583 9.45C11.5583 8.8 11.205 8.25 10.7508 8.25C10.2965 8.25 9.9432 8.8 9.9432 9.45C9.9432 10.1 10.2965 10.65 10.7508 10.65Z" fill="white"/>\n' +
            '</svg>\n',
          title: 'PancakeSwap',
          content: 'One of the most popular decentralized exchanges on Binance Smart Chain.',
          waiting: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .mars-markets-container {
    @media (min-width: $screen-md-min) {
      display: flex;
      margin: 0 14rem 0 12rem;
      flex-wrap: nowrap;
      align-items: center;
      font-size: 20px;
    }
  }
  .mars-markets-image {
    filter: drop-shadow(0px 0px 24px rgba($white, 0.3));
  }
  .mars-markets-content {
    text-align: left;
    margin-left: 5.5rem;
    > div + div {
      margin-top: 1em;
      text-shadow: $heading-shadow-base;
    }
    @media (max-width: $screen-sm-max) {
      text-align: left;
      margin-left: 0;
    }

  }
  .tokens-block-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    @media (max-width: $screen-sm-max) {
      flex-direction: column;
      .tokens-block-item + .tokens-block-item {
        margin-top: 16px;
      }
    }
  }

  .tokens-block-item {
    @media (min-width: $screen-md-min) {
      width: 276px;
      + .tokens-block-item {
        margin-left: 2rem;
      }
    }
  }
</style>
