import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const DashBoard = () => {
//     return (
//         <div>
//             <h1>Dashboard</h1>
//         </div>
//     );
// };

const DashBoard = () => {
  const [dash, setDash] = useState("");

  useEffect(() => {
    console.log(DashBoard);
  }, [DashBoard]);

  return (
    <Dash>
      <DashHeader></DashHeader>
      <DashNav></DashNav>
      <DashBody>
        <DashNet></DashNet>
        <DashAcc></DashAcc>
        <DashPlat></DashPlat>
        <DashAsset></DashAsset>
      </DashBody>
    </Dash>
  );
};

const Dash = styled.div`
  display: flex;
  justify-content: center;
`;

const DashHeader = styled.div``
;

const DashNav = styled.div``
;

const DashBody = styled.div``
;

const DashNet = styled.div``
;

const DashAcc = styled.div``
;

const DashPlat = styled.div``
;

const DashAsset = styled.div``
;

export default DashBoard;
