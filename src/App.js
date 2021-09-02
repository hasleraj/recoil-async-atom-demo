import './App.css';
import {
  RecoilRoot,
  atom,
  useRecoilValue,
} from 'recoil';
import { Suspense } from 'react';

export const titleState = atom({
  key: 'titleState', // unique ID (with respect to other atoms/selectors)
  default: new Promise((resolve) => {
    console.log('this is run once on file evaluation')
    resolve('This is an asynchronously provided title')
  })
});

export const Title = () => {
  const title = useRecoilValue(titleState)
  return title
}

const App = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <RecoilRoot>
        <Title/>
      </RecoilRoot>
    </Suspense>
  );
}

export default App;
