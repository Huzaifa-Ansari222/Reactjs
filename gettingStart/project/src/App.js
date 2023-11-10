import './App.css'
import Item from './component/item'
import Footer from './component/footer'

function App() {
  const productTwo='watch'// way2 
  const productThree='PS5'// way2 

  const respone=[
    {product:'laptop'},//0
    {product:'toy'},//1
    {product:'phone'}//2
  ];
  return (
    <div className='parent'>
      {/* way1  */}
      <Item product="shoe" ></Item>
      


      {/* way2  */}
      <Item product={productTwo} ></Item>
      <Item product={productThree} ></Item>


      {/* way3  */}
      <Item product={respone[0].product} ></Item>
      <Item product={respone[1].product} ></Item>
      <Item product={respone[2].product} ></Item>


      <button id="button">Show more</button>

      <Footer></Footer>
    </div>
      )
}

export default App
