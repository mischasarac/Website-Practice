// PascalCase: means capitalizing the first letter of each word in the name
function Message() {
  const name = "Daddy";
  // JSX - JavaScript XML
  // To see how JSX is converted to JS, go to https://babeljs.io/repl
  return <h1>Hello {name}</h1>;
}

export default Message; // This is the default export of this module
