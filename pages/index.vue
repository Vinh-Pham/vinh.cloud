<template lang="pug">
  full-page(ref="fullpage", :options="options", id="fullpage")
    div.section
      .main
        transition(name="fade", enter-active-class="fadeInDown")
          img.logo(v-if="show", src="@/assets/images/logo.svg", width="300")
        transition(name="fade", enter-active-class="fadeInUp")
          div.transition-group-navigation(v-if="show")
            h1.name Vinh T. Pham
        transition(name="fade", enter-active-class="fadeInUp")
          span.transition-group-navigation.social-links(v-if="show")
            a(href="https://www.facebook.com/vinhsterrr")
              fa(:icon="['fab', 'facebook-f']", size="2x")
            a(href="https://twitter.com/VinhTPham")
              fa(:icon="['fab', 'twitter']", size="2x")
            a(href="https://github.com/Vinh-Pham")
              fa(:icon="['fab', 'github']", size="2x")
        //- transition(name="fade", enter-active-class="fadeIn")
          div.transition-group-navigation(v-if="scrollFade")
            .scroll-down
              span Scroll
              fa(icon="arrow-alt-down", size="3x")
        #particles-js

    //- div.section Second section ...
    //- div.section Second section ...
    //- div.section Second section ...
    //- div.section
    //-   .contact
    //-     div.footer
    //-       p Vinh T. Pham &copy; 2018-{{ (new Date()).getFullYear() }}
</template>

<script>
import particlesJS from 'particles.js' // eslint-disable-line
import particlesConfig from '../static/particles.json'

export default {
  name: 'Index',
  data() {
    return {
      title: 'Vinh T. Pham',
      show: false,
      scrollFade: false,
      options: {
        licenseKey: '68F86791-D59349D0-82FEA56E-5C8A2D10',
        menu: '#menu',
        anchors: ['title', 'about', 'projects', 'links', 'contact'],
        sectionsColor: ['#000', '#2C8993', '#FF6B35', '#0C7C59', '#FFF'],
        // navigation: true,
        navigationPosition: 'right',
        onLeave: this.onLeave
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  async mounted() {
    await this.$nextTick()

    window.particlesJS('particles-js', particlesConfig)

    window.setTimeout(() => {
      this.scrollFade = true
      this.show = true
    }, 500)

    window.setInterval(() => {
      this.scrollFade = !this.scrollFade
    }, 1250)
  },
  methods: {
    onLeave(origin, destination, direction) {
      switch (destination.index) {
        case 0:
          this.scrollFade = false
          this.updateTitle()
          this.setNavColor('rgba(255, 255, 255, 0.5)')
          break
        case 1:
          this.updateTitle('About')
          this.setNavColor('rgba(0, 0, 0, 0.7)')
          break
        case 2:
          this.updateTitle('Projects')
          break
        case 3:
          this.updateTitle('Links')
          break
        case 4:
          this.updateTitle('Contact')
          break
        default: break
      }
    },
    updateTitle(section = '') {
      if (!section) {
        this.title = 'Vinh T. Pham'
      } else {
        this.title = `Vinh T. Pham | ${section}`
      }
    },
    setNavColor(color) {
      const el = document.querySelectorAll('#fp-nav ul li a span')

      el.forEach((anchor) => {
        anchor.style.backgroundColor = color
      })
    },
    goToUrl(url) {
      location.href = url
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/css/variables';

  #fp-nav ul li a span {
    background-color: darken(#FFF, 25%);
  }

  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
      color: white;
      filter: opacity(70%);
    }

    .logo {
      margin-bottom: $--spacer;
      filter: opacity(70%);
    }

    .name {
      font-family: 'Special Elite', cursive;
      font-size: 4rem;
    }

    .scroll-down {
      color: white;
      filter: opacity(70%);
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      text-align: center;
      bottom: $--spacer * 2;
      left: 0;
      right: 0;
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

    .social-links {
      display: flex;
      align-items: center;
      z-index: 999;

      a {
        color: rgba(255, 255, 255, 0.7);

        &:hover {
          color: white;
        }
      }

      a:not(:last-child) {
        margin-right: $--spacer * 4;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
  }

  #particles-js {
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
