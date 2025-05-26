import { useSelector } from "react-redux";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthed = useSelector((state) => state.auth.isAuthed);
  return (
    <>
      <Header />
      <Counter />
      {!isAuthed && <Auth />}
      {isAuthed && <UserProfile />}
    </>
  );
}

export default App;
