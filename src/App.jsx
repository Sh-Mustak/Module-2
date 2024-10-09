/* eslint-disable react/prop-types */
function Button({onSmash, children}){
  return(
    <button
    onClick={(e)=>{
      e.stopPropagation();
      onSmash();
    }}
    >{children}</button>
  )
}

function App() {

  return (
    <div onClick={()=>
    {alert("Parent")
    }} >
      <Button onSmash={()=>{alert("Child")}}>Play Movie</Button>
      <Button onSmash={()=>{alert("Child")}}>Play Music</Button>
    </div>
  )
}

export default App;
