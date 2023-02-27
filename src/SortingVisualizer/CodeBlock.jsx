import React, { useRef, useState } from 'react';
import './CodeBlock.css';

function CodeBlock({ onCopy }) {
    const [language, setLanguage] = useState('python');
    const codeRef = useRef(null);
    const pythonCode = `def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]

        mergeSort(L)
        mergeSort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
`;
    const jsCode = `
function mergeSort(array) {
  const half = array.length / 2

  if (array.length < 2){
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [ ...arr, ...left, ...right ]
}
`;
    const cppCode = `void merge(int *array, int l, int m, int r) {
        int i, j, k, nl, nr;
        nl = m-l+1; nr = r-m;
        int larr[nl], rarr[nr];
     
        for(i = 0; i<nl; i++)
           larr[i] = array[l+i];
     
        for(j = 0; j<nr; j++)
           rarr[j] = array[m+1+j];
     
        i = 0; j = 0; k = l;
     
        while(i < nl && j<nr) {
           if(larr[i] <= rarr[j]) {
              array[k] = larr[i];
              i++;
           } else {
              array[k] = rarr[j];
              j++;
           }
           k++;
        }
        while(i<nl) {
           array[k] = larr[i];
           i++; k++;
        }
        while(j<nr) {
           array[k] = rarr[j];
           j++; k++;
        }
     }
     
     void mergeSort(int *array, int l, int r) {
        int m;
        if(l < r) {
           int m = l+(r-l)/2;
     
           mergeSort(array, l, m);
           mergeSort(array, m+1, r);
           merge(array, l, m, r);
        }
     }`;

    function handleCopyClick() {
        const codeElement = codeRef.current;
        if (codeElement) {
            const range = document.createRange();
            range.selectNode(codeElement);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            onCopy();
        }
    }

    function handleLanguageChange(event) {
        setLanguage(event.target.value);
    }

    let code;
    if (language === 'python') {
        code = pythonCode;
    } else if (language === 'javascript') {
        code = jsCode;
    } else if (language === 'cpp') {
        code = cppCode;
    }

    return (
        <div className="code-block">
            <select value={language} onChange={handleLanguageChange}>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="cpp">C++</option>
            </select>
            <button onClick={handleCopyClick}>Copy</button>
            <pre ref={codeRef} className={`language-${language}`}>
                {code}
            </pre>
        </div>
    );
}

export default CodeBlock;

