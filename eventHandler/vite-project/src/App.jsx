import { Card } from './components/Card'
import './App.css'
import { Data } from './components/Data'
import { Product } from './components/product';
function App() {

   const data = Data(); // Accessing data from Data component

  return (
    <>
    <Product></Product>

    <div style={{display:"flex",alignContent:"center",flexDirection:"column" ,justifyContent:"center", width:"100%"}}>
    {
      data.map( (item, index) => (
        <Card key={index} year={item.year} month={item.month} day={item.day} title={item.title} />
        )
      )
    } 
      </div>
    </>
  )
}

export default App
