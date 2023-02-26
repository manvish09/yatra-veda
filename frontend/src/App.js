import { Search } from "./Components/Search";
import { NavBar } from "./Components/NavBar";
import { PostCard1 } from "./Components/PostCard1";
import { PostCard2 } from "./Components/PostCard2";
import { PostCard3 } from "./Components/PostCard3";
import { PostCard4 } from "./Components/PostCard4";
import { PostCard5 } from "./Components/PostCard5";

import citydata from "./assets/cities.json";
function App() {
  return (
    <div className="App w-10/12  m-auto ">
      <div className="">
        <NavBar />
      </div>
      <div className="my-10">
        <Search />
      </div>
      <div className="posts w-full grid grid-cols-3 gap-6">
        {/* {citydata.map((entry) => (
          <PostCard name={entry.city} desc={entry.desc} />
        ))} */}
        <PostCard1 />
        <PostCard2 />
        <PostCard3 />
        <PostCard4 />
        <PostCard5 />
      </div>
    </div>
  );
}

export default App;
