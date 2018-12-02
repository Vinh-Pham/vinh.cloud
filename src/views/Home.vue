<template lang="pug">
  div.home
    img.logo(src="../assets/logo.svg")
    div.navigation
      button.btn(@click="goToUrl('https://www.facebook.com/vinhsterrr')")
        i.icon.facebook
      button.btn(@click="goToUrl('https://twitter.com/VinhTPham')")
        i.icon.twitter
      button.btn(@click="goToUrl('https://github.com/Vinh-Pham')")
        i.icon.github
      button.btn(@click="$router.push({ name: 'psyduck' })")
        img.psyduck(src="../assets/1054.png", width="35")
    div.info.container.with-title
      p.title Info
      p I am a JavaScript developer from Frisco, TX.
    div.footer
      p Vinh T. Pham &copy; 2018
</template>

<script>
export default {
  name: 'home',
  methods: {
    goToUrl (url) {
      location.href = url
    }
  }
}
</script>

<style lang="scss">
  @import '../style/variables';

  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      margin-bottom: $--spacer;
    }

    .navigation {
      margin-bottom: $--spacer * 2;

      .btn:not(:last-child) {
        margin-right: $--spacer * 2;
      }
    }

    .info {
      width: 500px;
      margin-bottom: $--spacer * 2;
    }

    .footer {
      display: flex;
      justify-content: center;
    }
  }
</style>
