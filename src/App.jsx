import Gallery from "./Gallery"
export default function App() {
  return (
    <>
      <div className = "flex items-center justify-evenly">
        <div>
          <Gallery />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </>
  );
}
