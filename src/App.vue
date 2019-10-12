<template>
  <div>
    <a class="contribute"
      href="https://github.com/reebr/challenge-stats"
      title="Ajude a melhorar este projeto 🐵"
      alt="Ajude a melhorar este projeto no GitHub 🐵">
        <img src='@/assets/github-logo.svg'>
    </a>
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
    height 30px
    width 30px
    position fixed
    top 2%
    right 2%
    user-select none
    z-index 99999
    transition transform 200ms ease-in
    &:hover
      transform scale(1.5)
    > img
      height inherit
</style>