import { BrowserRouter as Route, Routes, Link, Router } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Dashboard from "./Dashboard"

function NestedRouting(){
    return(
        <Router>
            <>
            <Routes>
                <Route path="/" exact element={<Nav/>}/>
                <Route path="/home" exact element={<Home/>}/>
                <Route path="/dashboard/*" exact element={<Dashboard/>}/>
                
            </Routes>
            </>
        </Router>
    )
}
export default NestedRouting;