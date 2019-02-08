<template lang="pug">
  div.page-section.contact
    h1 Contact
    el-form(action="https://formspree.io/vinh@vinh.cloud", method="post", label-position="right", label-width="100px")
      el-form-item(label="Name")
        el-input(v-model="form.name", name="name")
      el-form-item(label="Email")
        el-input(v-model="form.email", name="email")
      el-form-item(label="Message")
        el-input(v-model="form.message", name="message")
      el-button(native-type="submit") Submit
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/variables.scss';

  .contact {
    text-align: center;
    width: 600px;
    margin: 0 auto;
  }
</style>
