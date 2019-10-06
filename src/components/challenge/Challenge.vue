<template>
  <div
    :class="{ 'more-than-a-month': isFinishedAMonthAgo }"
    class="challenge">
    <div>
      <div v-if="isFinishedAMonthAgo" class="more-than-a-month-warning">
        Este Evento finalizou há mais de um mês, por isso a cor é exibida diferentemente 🚩
      </div>
      <div class="challenge__header">
        <h2>{{ challenge.title }}</h2>
        <p :title="challenge.deadline" class="challenge__header__deadline">
          <strong>Deadline:</strong>
          {{ challenge.deadline | toTextFromNow }}
        </p>
        <p title="Nº de participantes" class="challenge__header__participants">
          <strong>Participantes:</strong>
          {{ participants }}
        </p>
      </div>
      <p class="challenge__description">
        {{ challenge.description }}
      </p>
    </div>
    <div class="challenge__winners_and_pullrequests">
      <winners :winners="challenge.winners" />
      <pull-requests :repository="challenge.repository"/>
    </div>
  </div>
</template>

<script>
import Winners from '@/components/winner/Winners'
import PullRequests from '@/components/pullrequest/PullRequests'
import { isAMonthAgoToday } from '@/lib/datetime'

export default {
  components: { Winners, PullRequests },
  props: {
    challenge: { type: Object, required: true },
  },
  computed: {
    participants(){
      return this.challenge.repository.pullRequests.nodes.length
    },
    isFinishedAMonthAgo(){
      return isAMonthAgoToday(this.challenge.deadline)
    }
  }
}
</script>

<style lang="styl" src="./challenge.styl" scoped></style>