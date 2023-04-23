import './App.css';
import {ReactComponent as ReactionSVG} from "./Icons/icon-reaction.svg";
import {ReactComponent as VerbalSVG} from "./Icons/icon-verbal.svg";
import {ReactComponent as VisualSVG} from "./Icons/icon-visual.svg";
import {ReactComponent as MemorySVG} from "./Icons/icon-memory.svg";

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
          <li id="titleText">Summary</li>
          <div id="statList">

            <div id="reactionBox">
              <li id="reactionText"> <ReactionSVG id="reactionIcon"/>Reaction</li><li id="resultNumbers"><strong>80</strong>/100</li>
            </div>

            <div id="memoryBox">
              <li id="memoryText"> <MemorySVG id="memoryIcon"/>Memory</li><li id="resultNumbers"><strong>92</strong>/100</li>
            </div>

            <div id="verbalBox">
              <li id="verbalText"> <VerbalSVG id="verbalIcon"/>Verbal</li><li id="resultNumbers"> <strong>61</strong>/ 100</li>
            </div>

            <div id="verbalBox">
              <li id="visualText"> <VisualSVG id="visualIcon"/>Visual</li><li id="resultNumbers"><strong>72</strong>/ 100</li>
            </div>
              
              
              
              
          </div>
      <button id="continueButton">Continue</button>
      </ul>
     

    </li>
</ul>
     </body>
    </div>
  );
}

export default App;
