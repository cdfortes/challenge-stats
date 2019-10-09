<template>
  <div>
    <div class="contribute">
      Ajude a melhorar esse projeto
      <a href="https://github.com/reebr/challenge-stats">no GitHub</a> 🐵
    </div>
    <challenges />
  </div>
</template>

<script>
import Challenges from '@/components/challenge/Challenges'

export default {
  components: { Challenges },
  created(){
    this.$store.dispatch('initialize')
  }
}
</script>

<style lang="stylus">
  *
  *::after
  *::before
    box-sizing border-box
    font-family 'Concert One', cursive
    margin 0
    padding 0

  html
  body
    height 100%
    > div
      height inherit

  .contribute
    background-color #fff
    border-top: 2px solid #eb007d
    box-shadow 0 2px 2px rgba(#eb007d, 20%)
    color #666
    padding 5px
    position fixed
    top 2%
    right 2%
    user-select none
    z-index 99999
    > a
      color #eb007d
      text-decoration none
      user-select normal
</style>