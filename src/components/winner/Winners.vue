<template>
  <div v-if="winners.length === 0">Este evento não ainda possui vencedores divulgados</div>
  <div v-else>
    <h2>Vencedores</h2>
    <div class="winners">
      <winner
        v-for="winner in winnerlist"
        :key="winner.position"
        :winner="winner"
        :title="winner.position + 'º colocado'"
      />
    </div>
  </div>
</template>

<script>
import Winner from '@/components/winner/Winner'

export default {
  components: { Winner },
  props: {
    winners: { type: Array, required: true }
  },
  computed: {
    winnerlist(){
      return this.winners.map((winner, index) => ({
        position: index + 1,
        login: winner
      }))
    }
  }
}
</script>

<style lang="styl" src="./winners.styl" scoped></style>