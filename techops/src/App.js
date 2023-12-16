import Message from "./props/Message";
import Eevent from "./events/Eevent";
import UseStateComp from "./UseState/UseState";

const App = () => {
  return (
    <div>
      <h1>app is up and running</h1>
      <UseStateComp />
    </div>
  );
};

export default App;

// we basically send things from parent to the child
