import '../App.css';
function Style(){
    var mystyle={
        color:"green"
    };
    return(
        <>
            <h1 style={{color:"red"}}>Hello</h1>
            <h2 style={mystyle}>hi</h2>
            <h3 className="blue">olaf</h3>
        </>
    )
}
export default Style;