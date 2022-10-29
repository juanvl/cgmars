import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { WorkoutDetails } from './pages/WorkoutDetails';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="p-4"></div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workout/:id" element={<WorkoutDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
