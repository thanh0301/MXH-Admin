import React from 'react'
import { Route, Routes } from "react-router-dom";
import HeaderMain from './Headers/HeaderMain';
import Users from './Content/Users';
function Layouts() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HeaderMain />}>
                    <Route path='Users' element={<Users />} />
                    {/* <Route path='RoomsMain' element={<RoomsMain />} />
                    <Route path='RequestMain' element={<RequestMain />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default Layouts