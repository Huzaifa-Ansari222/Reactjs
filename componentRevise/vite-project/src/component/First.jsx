
function First(props) {
    // manual data 
const day=props.day;
const month=props.month;
const year=props.year;
    return (
      <>
      <h3> Hello  {day}day</h3>
      <h3> Hello {month} month </h3>
      <h3> Hello {year} year </h3>
      </>
    )
  }
  
  export default First