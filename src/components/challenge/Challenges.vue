<template>
  <div v-if="status.loaded && challenges.length > 0">
    <challenge
      v-for="(challenge, index) in challenges"
      :key="index"
      :challenge="challenge"
    />
  </div>
  <div v-else>
    <img class="zen-monkey" src="@/assets/zen-monkey.png" alt="">
    <h2>{{ status.message }}</h2>
  </div>
</template>

<script>
import Challenge from '@/components/challenge/Challenge'

export default {
  components: { Challenge },
  props: {
    challenges: { type: Array, required: true },
    status: { type: Object, required: true }
  }
}
</script>

<style lang="styl" src="./challenges.styl" scoped></style>