import Message from "./props/Message";
import Eevent from "./events/Eevent";
import UseStateComp from "./UseState/UseState";
import DataRendering from "./dataRendering/DataRendering";
import Register from "./forms/Register";
import Register_part2 from "./forms/Register_part2";
import HTTPRequest from "./HTTPRequest/HTTPRequest";

const App = () => {
  return (
    <div>
      <h1>app is up and running</h1>
      <HTTPRequest />
    </div>
  );
};

export default App;

// we basically send things from parent to the child
