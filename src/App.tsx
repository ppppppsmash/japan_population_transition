import Layout from './components/layout/Layout';
import { Heading } from './components/ui/Heading';

import './App.css';
import 'normalize.css';

function App() {
  return (
    <>
      <Layout>
        <Heading level={1}>Hello World!!!</Heading>
      </Layout>
    </>
  );
}

export default App;
