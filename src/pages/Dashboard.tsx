import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopMenuBar from '../components/TopMenu';
import Posts from '../components/Post/posts';

function Dashboard() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <TopMenuBar onSearchChange={setSearchText} />
        <div className="h-full overflow-y-scroll p-4 bg-backgroundish">
          <Posts searchText={searchText} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;