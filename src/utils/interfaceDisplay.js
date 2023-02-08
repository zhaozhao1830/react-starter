import moment from 'moment'

export function isFieldEmpty (value) {
  return value == null || Number.isNaN(value)
}

export function formatTime (value, formatString = 'YYYY-MM-DD HH:mm') {
  return typeof value === 'number' && String(value).length === 13
    ? moment(value).format(formatString)
    : value || '--'
}

export function formatRelativeTime (value) {
  if (!value) return '--'

  const now = moment().endOf('day')
  const momentValue = moment(value)

  const days = now.diff(momentValue, 'days')

  switch (days) {
    case 0:
      return `今天 ${momentValue.format('HH:mm')}`
    case 1:
      return `昨天 ${momentValue.format('HH:mm')}`
    default:
      return `${days}天前`
  }
}
