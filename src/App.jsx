import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UpdateVaribal from "./Component/UpdateVaribal";
import UseState from "./Component/UseState";
import Usestate1 from "./Component/Hooks/Usestate1";
import UseEffeect from "./Component/Hooks/UseEffeect";
import UseeffectOne from "./Component/Hooks/UseeffectOne";
import CardComponent from "./Component/CardComponent";
import ContitionRendering from "./Component/ContitionRendering";
import UseEffectComponentAPI from "./Component/UseEffectComponentAPI";
import APIAdmission from "./Component/APIAdmission";
// import AAPI from "./Component/AAPI";
import DisplayAPI from "./Component/DisplayAPI";
import Form from "./Component/Form";
import ArratList_with_Map_Function from "./Component/ArratList_with_Map_Function";
import GetApi from "./Component/GetApi";
import AAPII from "./Component/AAPII";
import ReUseComponent from "./Component/ReUseComponent";
import SendDataChildToParents from "./Component/SendDataChildToParents";
import { Route, Routes } from "react-router-dom";
import DisplayTender from "./Component/Curd/DisplayTender";
import AddTender from "./Component/Curd/AddTender";
import ViewTender from "./Component/Curd/ViewTender";
import UpdateTender from "./Component/Curd/UpdateTender";

function App() {
  const [count, setCount] = useState(0);

  // Reuse Component in loop

  const user = [
    { name: "anil", email: "anil@gamil.com", phone: 123456 },
    { name: "shayam", email: "shayam@gamil.com", phone: 8765432 },
    { name: "ram", email: "ram@gamil.com", phone: 87774567 },
  ];

  return (
    <>
      {/* <center> */}
      {/* <UpdateVaribal /> */}
      {/* <UseState /> */}
      {/* <Usestate1 /> */}
      {/* <UseEffeect /> */}
      {/* <UseeffectOne /> */}
      {/* <CardComponent /> */}
      {/* <ContitionRendering /> */}
      {/* <APIAdmission /> */}
      {/* <DisplayAPI /> */}
      {/* <UseEffectComponentAPI /> */}
      {/* <Form /> */}
      {/* <ArratList_with_Map_Function /> */}
      {/* <GetApi /> */}
      {/* <AAPII /> */}
      {/* <ReUseComponent /> */}
      {/* 
        <h1>Resue Component With List</h1>

        {user.map((item, i) => (
          <ReUseComponent data={item} />
        ))} */}

      {/* <SendDataChildToParents /> */}
      {/* </center> */}

      {/* <Routes>
        <Route path="/" element={<DisplayTender />} />
        <Route path="/addtender" element={<AddTender />} />
        <Route path="/view/:id" element={<ViewTender />} />
        <Route path="/edit/:id" element={<UpdateTender />} />
      </Routes> */}
    </>
  );
}

export default App;
