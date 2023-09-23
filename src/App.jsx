import Example from '@components/example'
import Test from '@components/test'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import Todo from './components/todo';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // recoil -> <RecoilRoot/>
  const queryClient = new QueryClient({
    defaultOptions: {
      // queries: {
      //   staleTime: 0,
      //   cacheTime: 1000 * 60 * 5
      // }
    }
  }); // config

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
        <RecoilRoot>
          <Example/>
          <hr/>
          <Test/>
          <hr/>
          <ErrorBoundary fallback={<div>에러 발생!!!</div>} onError={(err) => (console.log(err))}>
            <Suspense fallback={<div>TodoLoading...</div>}>
                <Todo />
            </Suspense>
          </ErrorBoundary>
          {/*
            1. 데이터 패칭 관련 로딩 중 상태를 보여줍니다.
            2. react-query에서는 suspense 옵션을 true
            3. 가장 가까운 Suspense를 찾습니다.
            4. Suspense는 해당 컴포넌트를 감싸고 있어야합니다. (부모)  
          */}
        </RecoilRoot>
      </Suspense>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
