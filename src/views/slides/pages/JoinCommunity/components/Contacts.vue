<template>
  <div class="contacts">
    <div class="email-container">
      <EmailContact label="Press inquiries" email="press@marseconomy.com"></EmailContact>
    </div>
    <div class="email-container">
      <EmailContact label="Other inquiries" email="support@marseconomy.com"></EmailContact>
    </div>
    <div class="button-container">
      <Button name="comprehensive guide" color="light" link=""></Button>
    </div>
    <div class="button-container">
      <Button name="Whitepaper" color="light" link=""></Button>
    </div>
  </div>

</template>

<script>
import EmailContact from './EmailContact'
import Button from '../../../../../components/buttons/Button'
export default {
  name: 'Contacts',
  components: {
    Button,
    EmailContact
  }
}
</script>

<style scoped>
  .email-container + .email-container {
    margin-top: 1.5rem;
  }
  .email-container + .button-container {
    margin-top: 2rem;
  }
  .button-container + .button-container {
    margin-top: 1rem;
  }

</style>
