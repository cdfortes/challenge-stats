<template>
  <div v-if="numberOfReactions === 0">Ninguém votou nesse pull request ainda</div>
  <div v-else class="reactions">
    <div class="reactions__counter">
      <p
        class="reactions__counter__total"
        title="Nº total de reações no pull request (contabilizando reações duplicadas).">
        Reações<br>
        <span>{{ reactions.totalCount }}</span>
      </p>
      <p
        class="reactions__counter__unique"
        title="Este é o número de reações únicas por usuário.
Nessa contagem, é desconsiderada a reação do próprio autor e número de reações múltiplas dadas por um mesmo usuário.">
        Reações Únicas<br>
        <span>{{ uniqueReactions.length }}</span>
      </p>
    </div>
    <div class="reactions__users">
      <reaction
        v-for="reaction in reactions.nodes"
        :key="reaction.id"
        :reaction="reaction"
      />
    </div>
  </div>
</template>

<script>
import Reaction from '@/components/reaction/Reaction'

export default {
  components: { Reaction },
  props: {
    reactions: { type: Object, required: true },
    authorLogin: { type: String, required: true }
  },
  computed: {
    uniqueReactions(){
      let logins = this.reactions
                       .nodes
                       .map(reaction => reaction.user.login)
                       .filter(login => login !== this.authorLogin)

      return [ ...new Set(logins) ]
    },
    numberOfReactions(){
      return this.reactions.totalCount || 0
    }
  }
}
</script>

<style lang="styl" src="./reactions.styl" scoped></style>