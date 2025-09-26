// import React from "react";
// import { Container } from "reactstrap";
// import "./home.css";

// // import HeaderNav from "./components/HeaderNav/HeaderNav";

// import GroupWrapper from "./components/GroupWrapper/GroupWrapper";
// import Group from "./components/Group/Group";
// import Footer from "./components/Footer/Footer";

// const Home = () => {
//   return (
//     <>
//       {/* Header */}
//       {/* <HeaderNav /> */}

//       {/* Page Container */}
//       <Container fluid className="home-container">
//         {/* Sections will go here */}
//         <GroupWrapper />
//         <Group />
//         {/* Footer */}
//         <Footer />
//       </Container>
//     </>
//   );
// };

// export default Home;

//-----------
// Home.jsx
import React,{useEffect} from "react";
import { Container } from "reactstrap";
// import "./home.css";
import GroupWrapper from "./components/GroupWrapper/GroupWrapper";
import Group from "./components/Group/Group";
import Footer from "./components/Footer/Footer";
import G2 from "./components/Group/G2";
// import Clients from "./components/Client/Clients";

import Cl from "../../src/views/components/Client/Cl";
import Partners from "./components/Partners/Partners";

const Home = () => {
  let margin = { marginTop: "50px", marginBottom: "50px" };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container fluid className="home-container flex-grow-1 px-0">
        {/* <GroupWrapper /> */}
        {/* <G2 /> */}
        {/* <Clients/> */}
        <Cl />
        <Partners style={margin} />
        <Group style={margin}/>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
