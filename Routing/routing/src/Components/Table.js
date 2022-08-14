import {Table} from 'antd';
import React from 'react';
import axios from 'axios';
import { useState ,useEffect} from 'react';


const App = () =>{
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: 'ID',
  },

  {
    title: 'Name',
    dataIndex: 'name',
    key: 'Name',
  },

  {
    title: 'Email',
    dataIndex: 'email',
    key: 'Email',
  },

  {
    title: 'password',
    dataIndex: 'password',
    key: 'password',
  },

];
const fetchRecords = () => {
  axios
    .get('https://afternoon-ocean-37218.herokuapp.com/user')
    .then((res) => {
      setDataSource(res.data.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
 <Table columns={columns} dataSource={dataSource} />

  )
}
export default App;