import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileTabBar from './MobileTabBar';
import EmergencyBanner from '../alerts/EmergencyBanner';

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />
      <EmergencyBanner />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
          <div className="max-w-7xl mx-auto p-4 md:p-6">
            <Outlet />
          </div>
        </main>
      </div>
      <MobileTabBar />
    </div>
  );
}
