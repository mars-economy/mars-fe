<template>
  <section id="community" name="community">
    <div class="community-container">
      <div class="h2">Join the community</div>
      <flex-row class="community-content">
        <div class="subscribe-container">
          <div class="subscribe-text">
            Learn more about Mars Economy, chat with the team and other community members, have a say in shaping the roadmap, and join us on this journey to the Red Planet. Be a part of the future.
          </div>
          <SubscribeForm></SubscribeForm>
        </div>
        <div class="contacts-container">
          <Contacts></Contacts>
        </div>

      </flex-row>
    </div>
  </section>
</template>

<script>
import SubscribeForm from './components/SubscribeForm'
import Contacts from './components/Contacts'
export default {
  name: 'JoinCommunity',
  components: {
    Contacts,
    SubscribeForm
  }
}
</script>

<style scoped>

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

</style>
