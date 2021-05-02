<template>
  <section id="community" name="community" class="slide-container">
    <div class="community-container">
      <div class="community-content">
        <div class="subscribe-container">
          <div class="h4 hidden-sm">Join the community</div>
          <div class="subscribe-text">
            Learn more about Mars Economy, chat with the team and other members of the community on our messaging channels,  have a say in shaping the roadmap, and join us on this journey to the Red Planet. Be a part of the future.
          </div>
          <div class="button-container">
            <Button name="comprehensive guide" color="light"
                    @click="openExternalLink('https://mars-10.gitbook.io/mars/')">
            </Button>
            <Button name="whitepaper" color="light"
                    @click="openExternalLink('https://dev.marseconomy.org/whitepaper/Mars_Economy_Project_Whitepaper.pdf')"></Button>
          </div>
        </div>
        <div class="contacts-container">
          <Contacts :isMobile="isMobile"></Contacts>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Contacts from './components/Contacts'
import Button from '@/components/buttons/Button'
export default {
  name: 'JoinCommunity',
  components: {
    Button,
    Contacts
  },
  props: {
    isMobile: Boolean
  },
  methods: {
    openExternalLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

  .community-container {
    @media (min-width: $screen-md-min) {
      padding: 0 17.5rem 0 20.3rem;
      .h4 {
        margin-bottom: 1.25rem;
      }
      .subscribe-container {
        width: 57%;
        margin-right: auto;
      }
    }
    .subscribe-text {
      margin-bottom: 4px;
    }
    text-align: left;
  }
  .community-content {
    display: flex;
    @media (max-width: $screen-sm-max) {
      flex-direction: column;
    }
  }

  .button-container {
    display: flex;
    @media (max-width: $screen-sm-max) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    }
      .btn {
      margin-right: 16px;
      margin-top: 16px;
    }
  }

</style>
