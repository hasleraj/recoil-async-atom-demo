import { render } from '@testing-library/react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { Title } from './App';

test('renders the title', () => {
  expect(() => {
    render(
      <Suspense fallback={"Loading..."}>
        <RecoilRoot>
          <Title/>
        </RecoilRoot>
      </Suspense>
    );
  }).not.toThrow();
  
});
