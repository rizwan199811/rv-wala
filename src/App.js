import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

const App = () => {
  let themeRoutes =Themeroutes();
  console.log({themeRoutes})
  const routing = useRoutes(themeRoutes);

  return <div className="dark">{routing}</div>;
};

export default App;
