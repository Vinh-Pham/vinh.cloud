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
      position: relative;
      margin-bottom: $--spacer;
      display: inline-block;
      margin: 0 auto;

      .dot1, .dot2 {
        position: absolute;
        top: -4px;
        left: -4px;
        width: 0.5rem;
        height: 0.5rem;
        background: white;
        filter: opacity(95%);
        border-radius: 50%;
      }
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

      .text {
        font-size: 1.5rem;
      }
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

    .contact {
      .el-form {
        display: flex;
        justify-content: center;
      }
    }
  }

  .page-section {
    padding: $--spacer * 4;
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

<template lang="pug">
  full-page(ref="fullpage", :options="options", id="fullpage")
    div.section
      .main
        transition(name="fade", enter-active-class="fadeIn")
          div.transition-group-navigation(v-if="show", style="animation-duration: 3s")
            .logo
              <svg class="logo" width="301" height="282" viewBox="0 0 301 282" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g id="Layer-1" serif:id="Layer 1"><path class="path1" d="M25.179,61.348l-2.927,-7.251l-6.436,0l49.179,121.808l53.397,-129.265l18.499,0l20.402,0l58.848,0c0.158,0.163 0.362,0.242 0.604,0.242l0.605,0l9.18,0c3.059,0 6.12,0.163 9.182,0.483c3.646,0.216 7.273,0.645 10.885,1.252c-25.726,-29.479 -63.56,-48.117 -105.758,-48.117c-47.995,0 -90.354,24.098 -115.66,60.848Z" style="fill:none;stroke:#fff;stroke-width:1px;"/><path class="path2" d="M285.364,76.117c3.624,8.698 5.516,17.801 5.679,27.303c0.157,8.699 -1.33,17.075 -4.47,25.128c-3.142,8.058 -8.337,14.74 -15.585,20.053c-6.123,4.349 -12.767,7.213 -19.934,8.579c-7.169,1.369 -14.458,2.217 -21.866,2.537l-11.597,0l-44.216,-0.242l0,60.647l-36.484,0l0,-111.309l36.484,0l0,19.977l44.457,0c8.857,0 16.509,-1.731 22.954,-5.195c6.441,-3.463 9.664,-10.186 9.664,-20.175c0.322,-11.116 -3.102,-18.159 -10.269,-21.142c-7.168,-2.977 -15.342,-4.469 -24.524,-4.469l0,-0.242l-71.287,0l-59.562,142.555l-37.693,0l-44.641,-102.732c-1.287,7.626 -1.974,15.456 -1.974,23.448c0,77.507 62.832,140.338 140.339,140.338c72.342,0 131.891,-54.74 139.507,-125.058c0.029,-0.02 0.059,-0.039 0.088,-0.059c7.248,-5.314 12.443,-11.996 15.585,-20.054c3.14,-8.053 4.627,-16.429 4.47,-25.127c-0.163,-9.502 -2.055,-18.605 -5.679,-27.304c-3.57,-8.568 -9.537,-15.328 -17.872,-20.302c3.569,3.708 6.397,7.975 8.426,12.845Z" style="fill:none;stroke:#fff;stroke-width:1px;"/></g></svg>
              .dot1
              .dot2
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
          div.transition-group-navigation(v-if="show")
            .scroll-down
              span.text Scroll
              fa(icon="arrow-alt-down", size="3x")
        #particles-js

    //- div.section
    //-   About
    //- div.section
    //-   Projects
    //- div.section
    //-   Links
    //- div.section
    //-   Contact
      //- div.footer
      //-   p Vinh T. Pham &copy; 2018-{{ (new Date()).getFullYear() }}
</template>

<script>
import anime from 'animejs'
import particlesJS from 'particles.js' // eslint-disable-line
import About from '@/components/About'
import Projects from '@/components/Projects'
import Links from '@/components/Links'
import Contact from '@/components/Contact'
import particlesConfig from '../static/particles.json'

export default {
  name: 'Index',
  components: {
    About,
    Projects,
    Links,
    Contact
  },
  data() {
    return {
      title: 'Vinh T. Pham',
      show: false,
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

    this.$watch('show', (show) => {
      if (show) {
        const path1 = anime.path('.path1')
        const path2 = anime.path('.path2')

        anime({
          targets: '.dot1',
          translateX: path1('x'),
          translateY: path1('y'),
          rotate: path1('angle'),
          easing: 'linear',
          duration: 5000,
          loop: true
        })

        anime({
          targets: '.dot2',
          translateX: path2('x'),
          translateY: path2('y'),
          rotate: path2('angle'),
          easing: 'linear',
          duration: 10000,
          loop: true
        })

        anime({
          targets: '.logo svg',
          opacity: [0.7, 0.15],
          loop: true,
          direction: 'alternate',
          duration: 10000,
          easing: 'linear'
        })

        anime({
          targets: '.scroll-down',
          opacity: [0.9, 0],
          loop: true,
          direction: 'alternate',
          easing: 'linear',
          duration: 1500
        })
      }
    })
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
          this.setNavColor('rgba(0, 0, 0, 0.7)')
          break
        case 3:
          this.updateTitle('Links')
          this.setNavColor('rgba(0, 0, 0, 0.7)')
          break
        case 4:
          this.updateTitle('Contact')
          this.setNavColor('rgba(0, 0, 0, 0.7)')
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
