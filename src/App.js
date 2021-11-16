//import "./App.css";
import ProfilePage from "./components/ProfilePage";

function App() {
  const appStyle = {
    marginLeft: "3%",
    marginRight: "3%",
  };
  return (
    <div className="App" style={appStyle}>
      <ProfilePage />
    </div>
  );
}

export default App;
