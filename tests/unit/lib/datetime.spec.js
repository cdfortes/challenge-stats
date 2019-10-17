import formatDatetimeText from '@/lib/datetime'

describe('Datetime', () => {

  // Quando o dia atual é antes do deadline.
  it(`should return the formatted datetime correctly when it's before the deadline`, () => {
    const date = new Date()
    date.setDate(date.getDate() + 2) // Mais dois dias
    expect(formatDatetimeText(date)).toBe('em 2 dias')
  })

  // Quando o dia atual é depois do deadline, antes de dar um mês.
  it(`should return the formatted datetime text when it's after deadline without spending a month`, () => {
    const date = new Date()
    date.setDate(date.getDate() - 2) // Menos dois dias
    expect(formatDatetimeText(date)).toBe('há 2 dias')
  })

  // Quando o dia atual é depois do deadline, passado mais de um mês
  it(`should return the formatted datetime text when it's after deadline spending a month`, () => {
    const date = new Date('2019-01-24T17:00:00')
    expect(formatDatetimeText(date)).toBe('em 24 de Janeiro de 2019 às 17:00')
  })

})