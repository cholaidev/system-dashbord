
import React from "react";
import MaterialTable from "material-table";
import { useState } from "react";


function Table() {
   
  
    const [columns, setColumns] = useState([
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname'},
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    
    ]);
  
    const [data, setData] = useState([
      { name: 'Raj', surname: 'kumar', birthYear: 1999},
      { name: 'cholai', surname: 'mani', birthYear: 1998},
    ]);
  
    return (
      <MaterialTable
        title="product"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }

  export default Table;
  