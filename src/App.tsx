import { useState } from 'react';

import Layout from './components/layout/Layout';
import { Heading } from './components/ui/heading/Heading';
import { Checkbox } from './components/ui/checkbox/Checkbox';
import './App.css';
import 'normalize.css';

function App() {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    alert(e.target.checked);
  };

  return (
    <>
      <Layout>
        <Heading level={2} align="center" titlePattern={true}>
          日本の都道府県別総人口推移可視化SPA
        </Heading>

        <div className="container">
          <Heading level={3} align="left">
            都道府県
          </Heading>

          <div className="checkboxWrapper">
            <Checkbox label="東京都" checked={checked} onChange={handleChange} />
            <Checkbox label="神奈川県" checked={!checked} onChange={handleChange} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
