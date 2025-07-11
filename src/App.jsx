  import { Routes, Route } from "react-router-dom";
  import React from 'react';

  function App() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Routes>
          <Route path="/" element={<div className="p-4 text-xl font-bold bg-blue-500 text-green-500 ">Welcome to LinkedIn Clone</div>} />
        
          {/* More routes later */}
        </Routes>
      </div>
    );
  }

  export default App;
