import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingProvider } from '@/context/LoadingContext';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import MyWorks from '@/pages/MyWorks';

export default function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Loading />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-works" element={<MyWorks />} />
        </Routes>
        <Footer />
      </LoadingProvider>
    </BrowserRouter>
  );
}
