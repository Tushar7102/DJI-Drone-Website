import { Route, Routes } from "react-router-dom";
import Cameradrone from "../Componets/Cameradrone";
import Handheld from "../Componets/Handheld";
import Power from "../Componets/Power";
import Specialized from "../Componets/Specialized";
import Explore from "../Componets/Explore";
import Support from "../Componets/Support";
import Buy from "../Componets/Buy";
import Login from "../Componets/Login";
import Register from "../Componets/Register";
import Aerial from "../Componets/Aerial-camera";
import { DroneProduct } from "../Componets/DroneProduct";
import Description from "../Componets/Description";
import AddToCart from "../Componets/AddToCart";

export function Navbarouters(){
    return(
        <Routes>
            <Route path="/" element={<Cameradrone/>}></Route>
            <Route path="/Handheld" element={<Handheld/>}></Route>
            <Route path="/Power" element={<Power/>}></Route>
            <Route path="/Specialized" element={<Specialized/>}></Route>
            <Route path="/Explore" element={<Explore/>}></Route>
            <Route path="/Support" element={<Support/>}></Route>
            <Route path="/Buy" element={<Buy/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/Aerial" element={<Aerial/>}></Route>
            <Route path="/description" element={<DroneProduct/>}></Route>
            <Route path="/descriptionmain/:id" element={<Description/>}></Route>
            <Route path="/AddToCart" element={<AddToCart/>}></Route>
            {/* <Route path="/Arial-imging" element={<h1></h1>}></Route>
            <Route path="/Immersive-flight" element={<Buy/>}></Route> */}
            
        </Routes>
    )
}