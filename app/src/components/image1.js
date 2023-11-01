import Userimg from './apple.png';
import img from '../banana.jpeg';
const Image1 =()=>{
    return(
        <div>
            <h2>Arrow Function</h2>
            <img src={Userimg} alt="" style={{height:'200px',width:'300px'}}/>
            <img src={img} alt="" style={{height:'200px',width:'300px'}}/>
            <img src='/apple.jpeg' alt="" style={{height:'200px',width:'200px'}}/>
        </div>
    )
}
export default Image1