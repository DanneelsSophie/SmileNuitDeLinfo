<template>
  <div class="background">
    <img class="logo" src="@/assets/smile.png">
    <img class="explosion" v-if="move > 31" src="@/assets/explosion.gif">
    <img v-if="move < 92" :style="{
      bottom: 20 -1*move*move/3+10*move+ '%',
      left: move * 2.7 + '%',
      transform: 'rotate('+ (6*move*2.7/9)+10 +'deg)'
      }" class="rocket" src="@/assets/logo.png">
      <audio ref="rocketsound">
        <source src="@/assets/rocketsound.mp3" type="audio/mp3">
      </audio>
      <audio ref="explosionsound">
        <source src="@/assets/explosionsound.mp3" type="audio/mp3">
      </audio>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      move: -10,
      secret: 0
    }
  },
  beforeDestroy () {
    clearInterval(this.$options.interval)
  },
  mounted () {
    let that = this
    window.addEventListener('keypress', e => {
      let letter = String.fromCharCode(e.keyCode)
      console.log(that.secret)
      if (that.secret === 0 && letter === 's') {
        that.secret++
      } else if (that.secret === 1 && letter === 'm') {
        that.secret++
      } else if (that.secret === 2 && letter === 'i') {
        that.secret++
      } else if (that.secret === 3 && letter === 'l') {
        that.secret++
      } else if (that.secret === 4 && letter === 'e') {
        that.secret = 0
        that.startMoving()
      } else {
        that.secret = 0
      }
    })
  },
  methods: {
    hello () {
      this.msg = 'salut'
    },
    startMoving () {
      if (this.$options.interval === undefined) {
        this.$options.interval = setInterval(this.moveRocket, 60)
        this.$refs.rocketsound.play()
      } else {
      }
    },
    moveRocket () {
      if (this.move < 80) {
        this.move++
        if (this.move > 30) {
          this.$refs.rocketsound.pause()
          this.$refs.explosionsound.play()
          this.$refs.rocketsound.load()
        }
      } else {
        this.move = -10
        clearInterval(this.$options.interval)
        this.$options.interval = undefined
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .hello
    color: red
  .rocket
    position: absolute
    width: 50px
    height: 50px
    left: 50%
    outline-style: none
    box-shadow:none
    transform: rotate(-45deg)
  .background
    background-color: #424242
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
  .explosion
    position: fixed
    height: 100px
    width: 100px
    bottom: 0
    right: 12%
  .logo
    top: 0
    left: 0
</style>
