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
import GroupWrapper from "./components/GroupWrapper/GroupWrapper";
import Group from "./components/Group/Group";
import Footer from "./components/Footer/Footer";
import G2 from "./components/Group/G2";
// import Clients from "./components/Client/Clients";

import Cl from "../../src/views/components/Client/Cl";
import Partners from "./components/Partners/Partners";

const Home = () => {
  let margin = { marginTop: "50px", marginBottom: "50px" };

   useEffect(() => {
    const updateSize = () => {
      console.log("Monitor resolution:", window.screen.width + " x " + window.screen.height);
    };

    // log when component mounts
    updateSize();

    // update on resize
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
