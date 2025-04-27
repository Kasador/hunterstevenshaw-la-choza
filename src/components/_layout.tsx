import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';

export default function Layout() {
  return (
    <div className="overflow-clip">
      <Nav />
      <div className="ml-64">
        <Header />
        <main className='pt-30'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
