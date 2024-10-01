import './App.css';
import { Initiative } from './Components/Initiative/Initiative';
import { Search } from './Components/Search/Search';
import { TabControl } from './Components/TabControl';

export const App = () => {
  return (
    <div className="App">
      <TabControl>
        <Search />
        <Initiative />
      </TabControl>
    </div>
  );
}
