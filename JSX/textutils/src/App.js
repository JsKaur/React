
import './App.css'; // style sheet

let name="Jashan";
function App() {
  // we can return only one element.
  return (
    // <div className='blank'>
    //   Lovely
    // </div>


    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>

    {/* JSX is stricter than HTML. You have to close tags like <br />.  */}
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quidem at excepturi fugiat, ratione fugit et magnam hic, ducimus explicabo, perspiciatis rem cum cumque. Nihil, cumque quidem! A quibusdam in similique, temporibus amet accusantium?</p>
    </div>
    </>
  );
}

export default App;
