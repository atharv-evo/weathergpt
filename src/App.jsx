import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Forecast } from './pages/Forecast';
import { Alerts } from './pages/Alerts';
import MapPage from './pages/MapPage';
import Climate from './pages/Climate';
import AskWeatherGPT from './pages/AskWeatherGPT';
import { Settings } from './pages/Settings';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="forecast" element={<Forecast />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="map" element={<MapPage />} />
          <Route path="climate" element={<Climate />} />
          <Route path="ask" element={<AskWeatherGPT />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
