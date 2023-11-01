import apple from './apple.png';
import banana from '../banana.jpeg'
function Image(){
    return(
        <div>
            <img src={apple} alt="apple" style={{height:"100px", width:"100px"}}/>
            <img src={banana} alt='banana' style={{height:"100px", width:"100px"}}/>
            <img src='apple.jpeg' alt='apple'></img>
        </div>
    )
}
export default Image;