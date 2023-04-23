import './App.css';

function App() {
  return (
    <div className="App">
     <body>


<ul className="twoHalves">
    <li> 
      <ul id="firstHalf">
          <li id="heading">Your Result</li>
          <li>
            <div id="circlePart">
              <li id="topNumber">76</li>
              <li id="bottomNumber">of 100</li>
            </div>
            
          </li>
          <li id="resultName">Great</li>
          <li id="resultText">You scored higher than 65%
            of the people who have taken these 
            tests.</li>
        </ul>
    </li>


    <li class>
      <ul id="secondHalf">
      <li>Summary</li>
      <li>Reaction 80 / 100</li>
      <li>Memory  92 / 100</li>
      <li> Verbal 61 / 100</li>
      <li>Visual 72 / 100</li>
      <button>Continue</button>
      </ul>
     

    </li>
</ul>
     </body>
    </div>
  );
}

export default App;
