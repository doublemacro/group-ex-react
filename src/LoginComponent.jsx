export default function LoginComponent({ visible, setLoggedIn, setUsername }) {
  return (
    <div className={visible ? "" : "hidden"}>
      <h3>Login</h3>
      <input id="username" type="text" />
      <button
        onClick={() => {
          let text = document.querySelector("#username").value;
          this.props.updateLoggedInState(text, true);
          setUsername(text);
          setLoggedIn(true);
        }}
      >
        Log In
      </button>
    </div>
  );
}
