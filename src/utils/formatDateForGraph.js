export default function formatDateForGraph(date) {
  const formattedDate = date.slice(0,10).split('-').reverse().join('/')
  return formattedDate

}