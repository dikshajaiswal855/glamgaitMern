import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom';
import ListProduct from '../../Components/ListProduct/ListProduct';
import AddProduct from '../../Components/AddProduct/AddProduct';


function Admin() {
    return (
        <div className='Admin flex flex-col lg:flex-row'>
            <Sidebar/>
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>}/>
                <Route path='/listproduct' element={<ListProduct/>}/>
            </Routes>
        </div>
    )
}

export default Admin;
