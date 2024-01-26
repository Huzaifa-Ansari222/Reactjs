import SmallCover from "./SmallCover"
import "./BigCover.css"

function BigCover(){
    function hello(){
        console.log('hi');
    }
const coverData =[{
        offer:'20% Off',
        title:'title 1',
        para:'Shop the category +',
        img:'./images/cola.png'
},
{            
    offer:'10% Off',
    title:'title 2',
    para:'Shop the category +',
    img:'./images/cola.png'
}]


    return(
        
        <div className="bigcover">

            <div className="leftHero">
                <p>100% Natural</p>
                <h2>Fresh Smoothie & </h2>
                <h2>Summer Juice</h2>
                <p onMouseOver={hello}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button onClick={hello}>Shop Now </button>
                <img src="" alt="item" />
            </div>
            <div className="rightbottom">
            <SmallCover offer={coverData[0].offer} title={coverData[0].title} para={coverData[0].para} img={coverData[0].img} ></SmallCover>
            <SmallCover offer={coverData[1].offer} title={coverData[1].title} para={coverData[1].para} img={coverData[1].img}></SmallCover>
            </div>
        </div>
    )
}
export default BigCover;