<template>
  <div v-if="challenges.length > 0">
    <challenge
      v-for="(challenge, index) in challenges"
      :key="index"
      :challenge="challenge"
    />
  </div>
  <div v-else>
    <img class="zen-monkey" src="@/assets/zen-monkey.png">
    <h2>Buscando informações relacionadas aos eventos, aguarde...</h2>
  </div>
</template>

<script>
import Challenge from '@/components/challenge/Challenge'

export default {
  components: { Challenge },
  computed: {
    challenges(){
      return this.$store.getters.challenges
    }
  }
}
</script>

<style lang="styl" src="./challenges.styl" scoped></style>