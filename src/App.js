import { BrowserRouter , Routes , Route  } from "react-router-dom";
import CopyRight from "./component/Copyright";
import SignUp from "./component/SignUp";

function App(props) {
  return (
    <BrowserRouter>
          <div className="App">
         <Routes>
            <Route path="/" element={<CopyRight />} ></Route>
                <Route  path="/singup" element={<SignUp />}></Route>
              </Routes>

          </div>
    </BrowserRouter>
  );
}

export default App;
