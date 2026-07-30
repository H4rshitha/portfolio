import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingProvider } from '@/context/LoadingContext';
import Loading from '@/components/Loading';
import Home from '@/pages/Home';
import MyWorks from '@/pages/MyWorks';

export default function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Loading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-works" element={<MyWorks />} />
        </Routes>
      </LoadingProvider>
    </BrowserRouter>
  );
}
