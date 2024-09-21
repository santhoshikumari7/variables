import React from 'react'

function MarkSheet(props) {
    let engMarks =Number(props.engMarks);
    let telMarks =Number(props.telMarks);
    let hinMarks =Number(props.hinMarks);
    let matMarks =Number(props.matMarks);
    let sciMarks =Number(props.sciMarks);
    let sociMarks =Number(props.sociMarks);
    
    let totalMarks = engMarks+telMarks+hinMarks+matMarks+sciMarks+sociMarks;

    let perc = (totalMarks/600)*100;
  return (
    <div>
       
      <table>
          <caption><strong>{props.studentName} Marksheet</strong></caption>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Max.marks</th>
                <th>Marks obtaines</th>
                <th>Results</th>
                <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks >= 35 ? "Pass":"Fail" }</td>
                <td>{engMarks >= 35 ? "Excellent":"Poor" }</td>
            </tr>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hinMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{matMarks}</td>
                <td>{matMarks >= 35 ? "Pass":"Fail" }</td>
                <td>{matMarks >= 35 ? "Excellent":"Poor" }</td>
            </tr>
            <tr>
                <td>science</td>
                <td>100</td>
                <td>{sciMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>social</td>
                <td>100</td>
                <td>{sociMarks}</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>
           
        </tbody>
        <tfoot>
            <tr>
                <td>total</td>
                <td>600</td>
                <td>{totalMarks}({perc.toFixed(2)}%)</td>
                <td>pass</td>
                <td>Excellent</td>
            </tr>
            </tfoot>
      </table>
    </div>
  )
}

export default MarkSheet
