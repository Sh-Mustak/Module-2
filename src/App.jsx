/* eslint-disable react/prop-types */
function Button({onSmash, children}){
  return(
    <button onClick={onSmash}>{children}</button>
  )
}
function PlayButton({movieName}){
  function handlePlayClick(){
    alert((`Playing ${movieName}`));
  }
  return(
    <Button onSmash = {handlePlayClick}> Play {movieName} </Button>
  )
}

export default function App() {
  return (
    <div>
      <PlayButton movieName = "PK"/>
    </div>
  );
}


