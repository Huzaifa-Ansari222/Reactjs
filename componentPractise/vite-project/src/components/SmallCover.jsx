import './SmallCover.css'
function SmallCover(props){
const offers=props.offer;
const titles=props.title;
const paras=props.para;
const image=props.img
    return(
        <div className="smallcover">
            <div className="heroRightTop" >
                <h4> {offers}</h4>
                <h2><b>{titles}</b></h2>
                <p><b>{paras} </b></p>
                <img src={image} alt="item" id='smallcardImg' />
            </div>
        </div>
    )
}
export default SmallCover