<template>
  <section id="community" name="community">
    <div class="community-container">
      <flex-row class="community-content">
        <div class="subscribe-container">
          <div class="h2">Join the community</div>
          <div class="subscribe-text">
            Learn more about Mars Economy, chat with the team and other members of the community on our messaging channels,  have a say in shaping the roadmap, and join us on this journey to the Red Planet. Be a part of the future.
          </div>
          <flex-row class="button-container">
            <Button name="comprehensive guide" color="light"
                    @click="openExternalLink('https://mars-10.gitbook.io/mars/')">
            </Button>
            <Button name="whitepaper" color="light"
                    @click="openExternalLink('https://dev.marseconomy.org/whitepaper/Mars_Economy_Project_Whitepaper.pdf')"></Button>
          </flex-row>
        </div>
        <div class="contacts-container">
          <Contacts></Contacts>
        </div>

      </flex-row>
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
  methods: {
    openExternalLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">

  .community-container {
    padding: 0 17.5rem 0 20.3rem;
    text-align: left;
  }

  .h2 {
    margin-bottom: 1.25rem;
  }

  .subscribe-container {
    width: 57%;
    margin-right: auto;
  }

  .subscribe-text {
    margin-bottom: 3rem;
  }

  .button-container {
    .btn + .btn {
      margin-left: 1rem;
    }
  }

</style>
