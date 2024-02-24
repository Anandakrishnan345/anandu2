// import React, { useState } from 'react';

// const Calculator = () => {
//   const [display, setDisplay] = useState('');
//   const [result, setResult] = useState('');

//   const handleButtonClick = (value) => {
//     if (value === '=') {
//       try {
//         setResult(eval(display).toString());
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setDisplay('');
//       setResult('');
//     } else {
//       setDisplay((prevDisplay) => prevDisplay + value);
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <input type="text" value={display} readOnly />
//       </div>
//     
//       <div className="result">
//         <input type="text" value={result} readOnly />
//       </div>
//     </div>
//   );
// };

// export default Calculator;
// import React, { useState } from 'react';


// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import { useTheme, ThemeProvider } from './ThemeContext';

// import './Calc.css';
// const Calculator = () => {
//   const { theme, toggleTheme } = useTheme();
//   const [display, setDisplay] = useState('');
//   const [result, setResult] = useState('');

//   const handleButtonClick = (value) => {
//     if (value === '=') {
//       try {
//         setResult(eval(display).toString());
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setDisplay('');
//       setResult('');
//     } else {
//       setDisplay((prevData) => prevData + value);
//     }
//   };

//   return (
//     <ThemeProvider>
//       <div className={`mainctn w-50 mx-auto ${theme === 'dark' ? 'dark-mode' : ''}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     <div className="mainctn w-50 mx-auto">
//     <div className="calculator  container-fluid align=items-center row text">
//       <div className="display d-flex flex-column align-items-center justify-content-center">
//       <input type="text" value={display} onChange={(e) => setDisplay(e.target.value)} />
//       <input type="text"  value={result} readOnly placeholder='answer' />
//       </div>
//       <div className="result d-flex align-items-center justify-content-center">
        
//       </div>
//       <div className="buttons">
//       <div className="row w-50 mx-auto ">
//           <div className="col "><button  className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('C')}>C</button></div>
//         </div>
       
//       <div className="row w-50 mx-auto ">
//           <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('1')}>1</button></div>
//           <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('2')}>2</button></div>
//           <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('3')}>3</button></div>
//           <div className="col-3"><button  className='shadow-sm p-sm-3 mb-sm-5  rounded'onClick={() => handleButtonClick('-')}>-</button></div>
          
        
        
        
          
//         </div>

//       <div className="row  w-50 mx-auto">
//           <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('4')}>4</button></div>
//           <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('5')}>5</button></div>
//           <div className="col-3"> <button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('6')}>6</button></div>
//           <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('*')}>*</button></div>
          
         
       
        
          
//         </div>

       
        
      
      
//         <div className=' row w-50 mx-auto '>
//           <div className="col "><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('7')}>7</button></div>
//           <div className="col"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('8')}>8</button></div>
//          <div className="col"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('9')}>9</button></div>
//          <div className="col"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('/')}>/</button></div>
         
          
//         </div>
//        <div className="row  w-50 mx-auto ">
        
          
//           <div className="col border border-danger "><button className='shadow-sm p-sm-3 mb-sm-5 rounded act_num' onClick={() => handleButtonClick('0')}>0</button></div>
//           <div className="col border border-danger "><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('.')}>.</button></div>
//           <div className="col border border-danger "><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('=')}>=</button></div>
//           <div className="col border border-danger "><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('+')}>+</button></div>
  
        
        
//        </div>
 
       
        

        
//       </div>
      
//     </div>
    
//     </div>
//     </div>
//     </ThemeProvider>
//   );
// };

// export default Calculator;

import React from 'react';
import { useTheme, ThemeProvider } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calc.css';

const Calculator = () => {
  const { theme, toggleTheme } = useTheme();
  const [display, setDisplay] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay((prevData) => prevData + value);
    }
  };

  return (
    <ThemeProvider>
    <div className={`mainctn w-50 mx-auto ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className={`calculator container-fluid align-items-center row text  ${theme === 'dark' ? 'dark-mode' : ''}`} >
        <div className="display d-flex flex-column align-items-center justify-content-center">
          <input type="text" value={display} onChange={(e) => setDisplay(e.target.value)} />
          <input type="text" value={result} readOnly placeholder="answer" />
        </div>
        <div className="result d-flex align-items-center justify-content-center"></div>
        <div className="buttons">
          <div className="row w-50 mx-auto">
            <div className="col">
              <button className="shadow-sm p-sm-3 mb-sm-5 rounded" onClick={() => handleButtonClick('C')}>
                C
              </button>
            </div>
          </div>

             
      <div className="row w-50 mx-auto ">
          <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('1')}>1</button></div>
          <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('2')}>2</button></div>
          <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('3')}>3</button></div>
          <div className="col-3"><button  className='shadow-sm p-sm-3 mb-sm-5  rounded'onClick={() => handleButtonClick('-')}>-</button></div>
          
        
        
        
          
        </div>

      <div className="row  w-50 mx-auto">
          <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('4')}>4</button></div>
          <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('5')}>5</button></div>
          <div className="col-3"> <button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('6')}>6</button></div>
          <div className="col-3"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('*')}>*</button></div>
          
         
       
        
          
        </div>

       
        
      
      
        <div className=' row w-50 mx-auto '>
          <div className="col "><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('7')}>7</button></div>
          <div className="col"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('8')}>8</button></div>
         <div className="col"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('9')}>9</button></div>
         <div className="col"><button className='shadow-sm p-sm-3 mb-sm-5  rounded' onClick={() => handleButtonClick('/')}>/</button></div>
         
          
        </div>

          <div className="row w-50 mx-auto">
            <div className="col ">
              <button className="shadow-sm p-sm-3 mb-sm-5 rounded act_num" onClick={() => handleButtonClick('0')}>
                0
              </button>
            </div>
            <div className="col ">
              <button className="shadow-sm p-sm-3 mb-sm-5 rounded" onClick={() => handleButtonClick('.')}>
                .
              </button>
            </div>
            <div className="col r">
              <button className="shadow-sm p-sm-3 mb-sm-5 rounded" onClick={() => handleButtonClick('=')}>
                =
              </button>
            </div>
            <div className="col ">
              <button className="shadow-sm p-sm-3 mb-sm-5 rounded" onClick={() => handleButtonClick('+')}>
                +
              </button>
            </div>
          </div>
        </div>
        <button className='w-25' onClick={toggleTheme}>Dark-mode</button>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default Calculator;
