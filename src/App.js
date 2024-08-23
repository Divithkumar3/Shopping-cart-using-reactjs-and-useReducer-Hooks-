import React, {useReducer} from 'react';

let add={ add:0 };
let sub={ sub:10 };
let mul={ mul:30 };
let div={ div:50 };

function maths(state,action){
    switch(action.answer){
        case 'Addition':
            return { add:state.add + 1};
        case 'Subtraction':
            return { sub:state.sub - 1};
        case 'Multiplication':
            return { mul:state.mul * 2};
        case 'Division':
            return { div:state.div / 2};
        default:
            return state;        
    }
}

function Calculation(){
    let [state,dispatch]=useReducer(maths,add,sub,mul,div);
     return(
        <div>
            <h1>Calculate</h1>
            <h2>Addition:{state.add}</h2>
            <button onClick={()=>dispatch({answer:'Addition'})}>Add Here</button>
            <h2>Subtraction:{state.sub}</h2>
            <button onClick={()=>dispatch({answer:'Subtraction'})}>Subtract Here</button>
            <h2>Multication:{state.mul}</h2>
            <button onClick={()=>dispatch({answer:'Multiplication'})}>Multiply Here</button>
            <h2>Addition:{state.div}</h2>
            <button onClick={()=>dispatch({answer:'Division'})}>Divide Here</button>
        </div>
     );

}
export default Calculation;



