import React, { useState } from 'react';
import './App.css';
import './SortingVisualizer/SortingVisualizer.css';
import SortingVisualizers from './SortingVisualizer/SortingVisualizer';
import CodeBlock from './SortingVisualizer/CodeBlock';
function App() {
  const [code, setCode] = useState(``);

  function handleCopy() {
    console.log('Code copied to clipboard!');
  }

  return (
    <div className="App"  >
      <SortingVisualizers />
      <div id="text-block" style={{ width: "25%", margin: "0 auto" }}>
        <h2>Description</h2>
        <p>Merge Sort that divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure</p>
      </div>
      <div id="text-block-2" style={{ width: "25%", margin: "0 auto" }}>
        <h3>Complexity</h3>
        <p>Average:O(n × log n)</p>
        <p>Best:O(n × log n)</p>
        <p>Worst:O(n × log n)</p>
        <p>Space:O(n)</p>
      </div>
      <CodeBlock code={code} onCopy={handleCopy} />


    </div>

  );
}




export default App;


