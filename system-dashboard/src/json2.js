import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {  useFormik } from 'formik';
import * as Yup from "yup";
import { number } from 'yup';

import Autocomplete from '@material-ui/lab/Autocomplete'
import { Chip } from '@material-ui/core';

//conditional rendering
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
     
    },
  },
}));
const validationSchema = Yup.object({
  name: Yup.string().required("name must be required"),
  identifier:Yup.string().required("Required")
 
});

      
// });
function Jsontable() {
  // const [dialogName, setDialogName] = useState('');
  // const [dialogIdentifier, setDialogIdentifier] = useState('');
  const [inputs, setInputs] = useState({});
  const{handleSubmit,values,errors} = useFormik({
    initialValues: {
      id:inputs.id,
      name: inputs.name,
      identifier:inputs.identifier,
      stripeProductPriceId:inputs.stripeProductPriceId,
      userLimit:inputs.userLimit,
      reportLimit:inputs.reportLimit,
      invoiceLimit:inputs.invoiceLimit,
      storageLimit:inputs.storageLimit,
      coupons:inputs.coupons,
      country_code:inputs.country_code,
      price:inputs.price,
      special_price:inputs.special_price,
      screenshotEnabled:inputs.screenshotEnabled, 
    },
    enableReinitialize:true,
  
    validationSchema: validationSchema,
    onSubmit  () {
      const oldData = [...data]
      
      const newData=
      { id: inputs.id, name: inputs.name,identifier: inputs.identifier,stripeProductPriceId:inputs.stripeProductPriceId,
      userLimit:inputs.userLimit,exclusivePath:inputs.exclusivePath,reportLimit:inputs.reportLimit,
    invoiceLimit:inputs.invoiceLimit,storageLimit:inputs.storageLimit,coupons:inputs.coupons,
    country_code:inputs.country_code,price:inputs.price,special_price:inputs.special_price,
    screenshotEnabled:inputs.screenshotEnabled}
    ;
    const midData = {...newData}
      console.log("updateNew",newData);
      if(inputs.userLimit == "")
      {
      inputs.userLimit = JSON.parse(null)
     }
   inputs.exclusivePath = JSON.parse( inputs.exclusivePath)
        //  inputs.storageLimit = JSON.parse(inputs.storageLimit )
      axios.put("http://localhost:4000/api/v1/products?id="+newData.id, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.id;
       
        dataUpdate[index] = midData;
        setData(dataUpdate);
        console.log("update successfull");
        handleClickClose();
      
        })
    },
     
    // onSubmit(values)
    // {
    //   console.log(values)    
    // },
    
  });
  const handleChange = (event)=> {
    console.log("name",inputs)
    const name = event.target.name;
    const value = event.target.value;
    
    setInputs(values => ({...values, [name]: value}))
  }
  const classes = useStyles();

  // const [dialogId, setDialogId] = useState('');
  
  // const [dialogStripeProduct, setStripeProduct] = useState('');
  // const [dialogUserLimit, setUserLimit] = useState('');
  const [dialogExclusivePath, setExclusivePath] = useState('');
  // const [dialogInvoiceLimit, setInvoiceLimit] = useState('');
  // const [dialogStoragLimit, setStorageLimit] = useState('');
  // const [dialogCoupons, setCoupons] = useState('');
  // const [dialogCountryCode, setCountryCode] = useState('');
  // const [dialogPrice, setPrice] = useState('');
  // const [dialogSpecialPrice, setSpecialPrice] = useState('');
  // const [dialogScreenShot, setScreenShot] = useState('');
  // const [dialogReportLimit, setReportLimit] = useState('');
  
  const [data, setData] = useState([])
  const columns = [
    {
      title: "custom button",
      render: (rowData) =>
            <div>
            <Button color="secondary"  onClick={()=>handleClickUpdate(rowData)}>update</Button>
          </div>
      },
    { title: "ID", field: "id",},// render: rowData => rowData.tableData.id + 1  },
    //{ title: "Id+1", render: rowData => rowData.tableData.id + 1 },
    { title: "Name", field:"name"},
    { title: "Identifier",field:"identifier",emptyValue:()=><em>null</em>},
    { title: "StripeProduct", field: "stripeProductPriceId" ,emptyValue:()=><em>null</em>},
    { title: "CreatedAt", field: "createdAt",emptyValue:()=><em>null</em> },
    { title: "UpdatedAt", field: "updatedAt",emptyValue:()=><em>null</em> },
    { title: "UserLimit", field: "userLimit",emptyValue:()=><em>null</em> },
    { title: "ExclusivePath", field: 'exclusivePath',emptyValue:()=><em>null</em> },
    { title: "ReportLimit", field: "reportLimit" ,emptyValue:()=><em>null</em> },
    { title: "InvoiceLimit", field: "invoiceLimit",emptyValue:()=><em>null</em> },
    { title: "StorageLimit", field:"storageLimit",
    render: (rowData) => JSON.stringify(rowData.storageLimit)
  },
    { title: "Coupons", field: 'coupons',emptyValue:()=><em>null</em> },
    { title: "Country_code", field: "country_code",emptyValue:()=><em>null</em> },
    { title: "Price", field: "price",emptyValue:()=><em>null</em> },
    { title: "SpecialPrice", field: "special_price",emptyValue:()=><em>null</em> },
    { title: "ScreenshotEnabled", field: 'screenshotEnabled' ,emptyValue:()=><em>null</em>} 
  ]


   const getProductData =async ()=>{
     const data = await axios.get(
      "http://localhost:4000/api/v1/products"
     );
     console.log("get",data.data);
     setData(data.data);
   };

   useEffect(()=>{
     getProductData();
   },[]);
   const [open, setOpen] = React.useState(false);
   const [update,setUpdate]= React.useState(true);
   const [lable,setLable]= React.useState(true);


  const handleClickOpen = () => {
  
    setOpen(true);
    setLable(true);
    setUpdate(false);
    setInputs('')
    // setDialogId('');
    // setDialogName('');
    // setDialogIdentifier('');
    // setStripeProduct('');
    // setUserLimit('');
    // setExclusivePath('');
    // setReportLimit('');
    // setInvoiceLimit('');
    // setStorageLimit('');
    // setCoupons('');
    // setCountryCode('');
    // setPrice('');
    // setSpecialPrice('');
    // setScreenShot('');
    

  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleClickUpdate =(rowData)=>{
    setInputs(rowData)
    // setDialogId(rowData.id)
    // setDialogName(rowData.name)
    // setDialogIdentifier(rowData.identifier)
    // setStripeProduct(rowData.stripeProductPriceId)
    // setUserLimit(rowData.userLimit)
    // setExclusivePath(rowData.exclusivePath)
    // setInvoiceLimit(rowData.invoiceLimit)
    // setStorageLimit(JSON.stringify(rowData.storageLimit))
    // setCoupons(rowData.coupons)
    // setCountryCode(rowData.country_code)
    // setPrice(rowData.price)
    // setSpecialPrice(rowData.special_price)
    // setScreenShot(rowData.screenshotEnabled)
    // setReportLimit(rowData.reportLimit)
    setUpdate(true)
    setLable(false)
    setOpen(true)
    console.log("rowdata",rowData);
    
  }
 
  

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }


  // const handleId = event => {
  //   setDialogId(event.target.value);
  // }

  // const handleName= event => {
  //  setDialogName(event.target.value);
  // }
  // const handleIdentifier= event => {
  //   setDialogIdentifier(event.target.value);
  // }
  // const handleStripeProduct= event => {
  //   setStripeProduct(event.target.value);
  // }
  // const handleUserLimit= event => {
  //   setUserLimit(event.target.value);
  // }
  // // const handleExclusivePath= event => {
  // //   setExclusivePath(event.target.value);
  // // }
  // const handleInvoiceLimit= event => {
  //   setInvoiceLimit(event.target.value);
  // }
  // const handleStoragLimit= event => {
  //   setStorageLimit(event.target.value);
  // }
  // const handleCoupons= event => {
  //   setCoupons(event.target.value);
  // }
  // const handleCountryCode= event => {
  //   setCountryCode(event.target.value);
  // }
  // const handlePrice= event => {
  //   setPrice(event.target.value);
  // }
  // const handleSpecialPrice= event => {
  //   setSpecialPrice(event.target.value);
  // }
  // const handleScreenShot= event => {
  //   setScreenShot(event.target.value);
  // }
  // const handleReportLimit= event => {
  //   setReportLimit(event.target.value);
  // }
  
  const handleAddNewRow = ()  => {
   const newData=
   { id: inputs.id, name: inputs.name,identifier: inputs.identifier,stripeProductPriceId:inputs.stripeProductPriceId,
    userLimit:inputs.userLimit,exclusivePath:inputs.exclusivePath,reportLimit:inputs.reportLimit,
  invoiceLimit:inputs.invoiceLimit,storageLimit:inputs.storageLimit,coupons:inputs.storageLimit,
  country_code:inputs.country_code,price:inputs.price,special_price:inputs.special_price,
  screenshotEnabled:inputs.screenshotEnabled}
    ;
    console.log("add",newData)
     newData.exclusivePath = JSON.parse( newData.exclusivePath)
     newData.storageLimit = JSON.parse(newData.storageLimit)
     axios.post("http://localhost:4000/api/v1/products", newData)
      .then(res => {
        
        let dataToAdd = [...data];
       
        dataToAdd.push(newData);
       
        setData(dataToAdd);
       
        console.log("Data added successfully")
        handleClickClose()
        
  })
 
}
// const handleRowUpdate = () => {
//   const oldData = [...data]
  
//   const newData=
//   { id: inputs.id, name: inputs.name,identifier: inputs.identifier,stripeProductPriceId:inputs.stripeProductPriceId,
//   userLimit:inputs.userLimit,exclusivePath:inputs.exclusivePath,reportLimit:inputs.reportLimit,
// invoiceLimit:inputs.invoiceLimit,storageLimit:inputs.storageLimit,coupons:inputs.storageLimit,
// country_code:inputs.country_code,price:inputs.price,special_price:inputs.special_price,
// screenshotEnabled:inputs.screenshotEnabled}
// ;
// const midData = {...newData}
//   console.log("updateNew",newData);
//   if(inputs.userLimit == "")
//   {
//   inputs.userLimit = JSON.parse(null)
//  }
//    // newData.exclusivePath = JSON.stringify( newData.exclusivePath)
//      inputs.storageLimit = JSON.parse(inputs.storageLimit )
//   axios.put("http://localhost:4000/api/v1/products?id="+newData.id, newData)
//   .then(res => {
//     const dataUpdate = [...data];
//     const index = oldData.id;
   
//     dataUpdate[index] = midData;
//     setData(dataUpdate);
//     console.log("update successfull");
//     handleClickClose();
  
//     })
// }
const handleRowDelete = (oldData, resolve) => {
  axios.delete("http://localhost:4000/api/v1/products?id="+oldData.id)
    .then(res => {
      const dataDelete = [...data];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      setData([...dataDelete]);
      resolve()
    })  
  }
  
  const datas = ["invoices ","integration","timesheets"]
 /*const handleRowAdd = (newData, resolve) => {
    axios.post("http://localhost:4000/api/v1/products", newData)
  .then(res => {
    let dataToAdd = [...data];
    dataToAdd.push(newData);
    setData(dataToAdd);
    resolve()
    console.log("Data added successfully")
    })
  }*/
  
   

 /* useEffect(() => {
    fetch("http://localhost:4000/api/v1/products")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])*/

  return (
    <div className="App">
      
      <h4 align='center'>Employee Table</h4>
       <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Row
      </Button>
      <Dialog  open={open}  onClose={handleClickClose} > 
  {lable?<DialogTitle>Add</DialogTitle>:<DialogTitle>update</DialogTitle>}
  <div className={classes.root}>
   
  <TextField name="id"value={values.id} onChange={handleChange} label="Id" />
    <TextField name="name"value={values.name}  onChange={handleChange}label="name" /> {errors.name ? errors.name : null}

    <TextField  name="identifier" value={values.identifier} onChange={handleChange}label="identifier" />{errors.identifier ? errors.identifier : null}
    <TextField name ="stripeProductPriceId"value={values.stripeProductPriceId} onChange={handleChange} label="stripeProduct" />
    <TextField name="userLimit" type='number' value={values.userLimit} onChange={handleChange}label="userLimit" />
    <Autocomplete
        multiple
       
        id="multiple-limit-tags"
        options={datas}
     
        onChange={(event, newValue) => {
          //handleExclusivePath()
      // setValue(newValue);
          console.log("dropdownupdate",newValue);
          setExclusivePath(newValue);
  
        }}
        renderInput={(params) => (
          <TextField value={dialogExclusivePath} {...params} label="ExclusivePath" />
        )}
      />
    <TextField name="reportLimit"type='number'value={values.reportLimit} onChange={handleChange}label="reportLimit" />
    <TextField name="invoiceLimit"type='number'value={values.invoiceLimit} onChange={handleChange}label="invoiceLimit" />
    <TextField name="storageLimit"value={values.storageLimit} onChange={handleChange}label="storageLimit" />
    <TextField name="coupons"value={values.coupons} onChange={handleChange}label="coupons" />
    <TextField name="country_code" value={values.country_code} onChange={handleChange}label="Country_code" />
    <TextField name="price"value={values.price} onChange={handleChange}label="price" />
    <TextField name="special_price"value={values.special_price} onChange={handleChange}label="Special_price" />
    <TextField name="screenshotEnabled"value={values.screenshotEnabled} onChange={handleChange}label="ScreenshotEnabled" />
  
    <div>
      {update? <Button color="secondary" onClick={handleSubmit}>update</Button>: <Button color="secondary" onClick={handleAddNewRow}>add</Button>}
     
      <Button color="secondary" onClick={handleClickClose}>Cancel</Button>
      
    </div>
    </div>
  </Dialog> 
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
        options={{
             search:true,
             paging:false,
             filtering:false,
             exportButton:true
          }}
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
              onRowDelete: (oldData) =>
              new Promise((resolve) => {
                handleRowDelete(oldData, resolve)
              }),          
                
                
          }}
      />
    </div>
  );
}

export default Jsontable;