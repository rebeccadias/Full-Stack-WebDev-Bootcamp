const Message = (props) => {
  return (
    <div>
      <h2>good morning {props.name}</h2>
      <h2>I am {props.age} years old </h2>
    </div>
  );
};

export default Message;
