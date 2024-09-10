export default function formatDate(date) {
  console.log(date)
  const formattedDate = date.slice(0,10).split('-').reverse().join('/')
  return formattedDate

}