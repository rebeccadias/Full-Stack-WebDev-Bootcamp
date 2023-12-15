import Message from "./props/Message";

const App = () => {
  const user = { name: "rebecca", age: 23, dob: [25, 10, 2000] };
  return (
    <div>
      <h1>app is up and running</h1>
      <Message name={user.name} age={user.age} />
    </div>
  );
};

export default App;

// we basically send things from parent to the child
