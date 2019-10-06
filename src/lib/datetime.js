import dayjs from 'dayjs'
import ptbr from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const isAMonthAgoToday = date => dayjs(date).isBefore(dayjs().subtract(1, 'month'))

/**
 * Formata o datetime.
 *
 * Se o deadline tiver ocorrido há mais de um mês a partir da data atual,
 * a formatação será exibida como:
 *
 *    20 de Janeiro de 2019 às 22:00
 *
 * Se o deadline ainda não tiver passado de um mês, considerando a data atual,
 * será utilizada a formatação em relação ao tempo, exemplo:
 *
 *    Há 11 dias
 *    Há 9 horas
 *    Há uma hora
 *
 * Etc.
 */
export default date => {
  const deadline = dayjs(date)

  if(isAMonthAgoToday(deadline))
    return deadline.locale(ptbr).format('DD [de] MMMM [de] YYYY [às] HH:mm')

  return deadline.locale(ptbr).fromNow()
}