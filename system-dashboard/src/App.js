import React from "react";
import MaterialTable from "material-table";


function App() {
  return (
    <div className="App">

    <MaterialTable
      title="products"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
     
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987},
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017},
      ]}        
      options={{
        search: true,
        filtering: true
      }}
    />
  )


    </div>
  );
}

export default App;