const Eevent = () => {

  const handleClick=()=>{
    alert("i am clicked");
   };

  return (
    <div>
      <h3>some text</h3>
      <button onClick ={handleClick}> Click me </button>
    </div>
  );
};

export default Eevent;
