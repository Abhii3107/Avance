
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Card } from "reactstrap";
// import "./cl.css";

// const clients = [
//   { id: 1, alt: "Client 1", src: "/logos/client-1.png" },
//   { id: 2, alt: "Client 2", src: "/logos/client-2.png" },
//   { id: 3, alt: "Client 3", src: "/logos/client-3.png" },
//   { id: 4, alt: "Client 4", src: "/logos/client-4.png" },
//   { id: 5, alt: "Client 5", src: "/logos/client-5.png" },
//   { id: 6, alt: "Client 6", src: "/logos/client-6.png" }
// ];

// function Cl() {
//   return (
//     <section className="clients-wrap py-4">
//       <Container>
//         <div className="clients-slab position-relative">
//           <div aria-hidden="true" className="clients-tab">
//             Our Clients
//           </div>

//           <Row className="gx-3">
//             <Col xs="12">
//               {/* horizontal track */}
//               <div
//                 className="logo-track d-flex flex-nowrap gap-3 overflow-x-auto"
//                 role="list"
//                 aria-label="Clients logos"
//               >
//                 {clients.map((c) => (
//                   <Card key={c.id} role="listitem" className="logo-card shadow-sm">
//                     <img className="logo-img" src={c.src} alt={c.alt} />
//                   </Card>
//                 ))}
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default Cl;


//--------------------------
// src/components/ClientShowcase.jsx
import React from "react";
import { Container } from "reactstrap";
import "./cl.css";
import chft from "../../assests/client/chft.png";
import tgs from "../../assests/client/tgs.png";
import nike from "../../assests/client/nike.png";
import abia from "../../assests/client/abia.png";
import crest from "../../assests/client/crest.png";

const imgs = [chft, tgs, nike, abia, crest];

export default function Cl() {
  return (
    <>
      <Container className="clients-container">
      <div className="clients-text">Our Clients</div>
    </Container>
     <Container fluid className="clients-outer">
      <div className="clients-row">
        {imgs.map((src, i) => (
          <div className="client-box" key={i}>
            <img src={src} alt={`client-${i + 1}`} className="client-img" />
          </div>
        ))}
      </div>
    </Container>
    </>
   
  );
}
