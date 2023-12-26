
import './App.css'
import First from './component/First'
function App() {
  const respone=[
    {
      day:'Mon',
      month:'Jan',
      year:'2024'
    },
    {
      day:'Tue',
      month:'Feb',
      year:'2025'
    }
  ]
  return (
    <>
    <h1>Hello Duniya!</h1>
    {/* use data manually  */}
  <First day={'mon'} month={'may'} year={'2024'}></First>
  {/* use data as array object  */}
  <First day={respone[0].day} month={respone[0].month} year={respone[0].year}> </First>
  <First day={respone[1].day} month={respone[1].month} year={respone[1].year}> </First>

    </>
  )
}

export default App
