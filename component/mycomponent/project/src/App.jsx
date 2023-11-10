function MyButton() {
  return (
    <button>
      Show more
    </button>
  );
}

function MyApp() { //nesting component
  return (
    <div className="div">
      <h1>Welcome to my app</h1>
      <MyButton/> 
    </div>
  );
}

export default  MyApp