import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  let themeRoutes =Themeroutes();
  console.log({themeRoutes})
  const routing = useRoutes(themeRoutes);

  return <div className="dark">{routing}</div>;
};

export default App;
