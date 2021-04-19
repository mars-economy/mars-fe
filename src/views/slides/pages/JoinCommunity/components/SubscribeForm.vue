<template>
  <div class="subscribe-form-card">
    <div class="card-label">
      Stay in the know!
    </div>
    <div class="card-body">
      <div class="card-text">
        We’ll send out period updates, newsletters, etc.
      </div>
    </div>
    <flex-row>
      <div class="form-field">
        <input type="email" placeholder="E-mail">
      </div>
      <Button color="primary" name="Notify me" link=""></Button>
    </flex-row>

  </div>
</template>

<script>
import Button from '../../../../../components/buttons/Button'
export default {
  name: 'SubscribeForm',
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">

  .subscribe-form-card {
    @extend %card;
    padding: 2.37rem 1.25rem 1.25rem 1.25rem;
  }

  .card-label {
    @extend %card-label;
    top: 0;
    left: 1.25rem;
    border-radius: 0 0 $radius-base $radius-base;
  }
  .card-text {
    margin-bottom: 1em;
  }
  .form-field {
    flex-grow: 1;
    margin-right: 1em;
    input {
      font-family: $font-family-base;
      font-size: 0.75rem;
      line-height: 1em;
      padding: 0.5em 1.6em;
      min-height: 2.5rem;
      width: 100%;
      box-sizing: border-box;
      color: $white;
      backdrop-filter: blur(20px);
      border-radius: $radius-base;
      background: rgba($white, 0.05);
      border: 1px solid rgba($white, 0.05);
      font-weight: bold;
      &::placeholder {
        color: $white;
        opacity: 1;
        text-transform: uppercase;
      }
      &:focus {
        outline: none;
      }
      &:focus::placeholder {
       opacity: 0.2;
      }
    }
  }

</style>
