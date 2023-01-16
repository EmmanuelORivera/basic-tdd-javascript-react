import { evaluate } from "mathjs";
import { useState } from "react";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const operations = ['+', '-', '*', '/']
export const equalSign = '='

const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
]

const Calculator = () => {
    const [value, setValue] = useState('')
    const createHandleClick = operation => () => setValue(value.concat(operation))
    return (
        <section>
            <h1>Calculator</h1>
            <input value={value} readOnly />
            <div role='grid'>
                {
                    rows.map((row, i) => (
                        <div key={i} role='row'>{
                            row.map(number =>
                                <button onClick={createHandleClick(number)} key={number}>{number}</button>
                            )}
                        </div>
                    ))
                }
                {
                    operations.map(operation => (
                        <button onClick={createHandleClick(operation)} key={operation}>{operation}</button>
                    ))
                }
                <button onClick={()=>setValue(evaluate(value))}>{equalSign}</button>
            </div>
        </section>
    )
}

export default Calculator