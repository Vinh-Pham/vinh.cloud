<template lang="pug">
  div.home
    transition(name="fade", enter-active-class="fadeInDown")
      img.logo(v-if="show", src="@/assets/images/logo.svg")
    transition(name="fade", enter-active-class="fadeInUp")
      div.transition-group-navigation(v-if="show")
        div.navigation
          button.nes-btn(@click="goToUrl('https://www.facebook.com/vinhsterrr')")
            i.nes-icon.facebook
          button.nes-btn(@click="goToUrl('https://twitter.com/VinhTPham')")
            i.nes-icon.twitter
          button.nes-btn(@click="goToUrl('https://github.com/Vinh-Pham')")
            i.nes-icon.github
          button.nes-btn(@click="$router.push({ path: '/psyduck' })")
            img.psyduck(src="@/assets/images/1054.png", width="35")
    transition(name="fade", enter-active-class="fadeInUp")
      div.transition-group-about(v-if="show")
        div.info.nes-container.is-dark.with-title
          p.title Info
          p.description I am a JavaScript developer from Frisco, TX.
        div.info.nes-container.is-dark.with-title
          p.title Projects
          div.project-links
            p Check back soon.
            //- a.description(@click="$router.push({ path: '/reddit' })") Reddit Backup Tool
        div.footer
          p Vinh T. Pham &copy; 2018-{{ (new Date()).getFullYear() }}

    no-ssr
      vue-particles.particles(color="#000", linesColor="#000")
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      show: false
    }
  },
  head () {
    return {
      title: 'Vinh T. Pham'
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.show = true
    }, 500)
  },
  methods: {
    goToUrl (url) {
      location.href = url
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/css/variables';

  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      margin-bottom: $--spacer;
    }

    .transition-group-navigation {
      z-index: 999;

      .navigation {
        margin-bottom: $--spacer * 2;

        .nes-btn:not(:last-child) {
          margin-right: $--spacer * 2;
        }
      }
    }

    .transition-group-about {
      .info {
        width: 500px;
        margin-bottom: $--spacer * 2;

        .description {
          color: white;
        }

        .project-links {
          z-index: 999;

          p {
            color: white;
          }

          a {
            color: $blue;
            text-decoration: none;

            &:hover, &:focus {
              color: $teal;
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
      }

      .footer {
        display: flex;
        justify-content: center;
      }
    }

  }

  .particles {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
