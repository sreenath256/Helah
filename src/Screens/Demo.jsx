import React from 'react';

const Demo = () => {
  return (
    <div className="flex">
      {/* Category Side (Fixed) */}
      <div className="w-1/4 min-h-screen fixed bg-gray-200">
        {/* Your category filter content goes here */}
        Category Side
      </div>

      {/* Product Display (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Your product display content goes here */}
        {/* Use flex, grid, or other layout components */}
        {/* Ensure that the product display has a minimum height to allow scrolling */}
        <div style={{ minHeight: '100vh' }}>
          {/* Individual product components or cards */}
          Product 1
          Product 2
          {/* ... more products */}
        </div>
      </div>
    </div>
  );
};

export default Demo;