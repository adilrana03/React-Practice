// import React from "react";

// function Table(props) {
//   var tableStyle = {
//     width: "500px",
//     margin: "50px auto",
//   };
//   return (
//     <div>
//       <table style={tableStyle} border="2">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>NAME</th>
//             <th>CITY</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th>A</th>
//             <td>101</td>
//             <td>S1</td>
//             <td>C1</td>
//           </tr>
//           <tr>
//             <th>B</th>

//             <td>102</td>
//             <td>S2</td>
//             <td>C2</td>
//           </tr>
//           <tr>
//             <th>C</th>
//             <td>103</td>
//             <td>S3</td>
//             <td>C3</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;








import React from 'react'

const Table = ({ data }) => {
  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
          </tr>
          <tbody>
            <tr>
              <th>A</th>
              <td>101</td>
              <td>S1</td>
              <td>C1</td>
            </tr>
            <tr>
              <th>B</th>
              <td>101</td>
              <td>S1</td>
              <td>C1</td>
            </tr>
            <tr>
              <th>C</th>
              <td>101</td>
              <td>S1</td>
              <td>C1</td>
            </tr>
          </tbody>
        </thead>
      </table>
      <button onClick={() => { data(true) }}>CARD</button>
    </div>
  )
}

export default Table
