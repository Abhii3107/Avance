import React from "react";
import "./Group.css";
import group12 from "../../assests/Group/group12.png";
import group21 from "../../assests/Group/group21.jpg";
import group18 from "../../assests/Group/group18.jpg";
import group19 from "../../assests/Group/group19.jpg";
import group20 from "../../assests/Group/group20.jpg";
import group16 from "../../assests/Group/group16.jpg";

export default function Group() {
  return (
    <div className="group">
      <div className="rectangle-3" />
      
      <div className="text-wrapper-50">Our Team</div>
      
      {/* Line with diamond boxes at both ends */}
      <div className="decorative-line-container">
        <div className="diamond-box left-diamond"></div>
        <div className="horizontal-line"></div>
        <div className="diamond-box right-diamond"></div>
      </div>
      
      <p className="text-wrapper-43">
        100+ Years of experience of core team members
      </p>
      
      <p className="text-wrapper-49">
        Welcome to RiskBirbal Insurance Brokers, your trusted partner in
        protecting your assets and managing risks. We are a team of experienced
        insurance professionals committed to providing our clients with
        personalized insurance solutions that meet their unique needs.
      </p>

      {/* Vertical line before photos */}
      <div className="vertical-line"></div>

      {/* Member 1 - Mukesh Jairath (Director) */}
      <div className="team-member-div member-1">
        <img className="img-2" alt="Mukesh Jairath" src={group12} />
        <div className="mukesh-jairath label-box outer-box" style={{ marginTop: "0.1px", marginLeft: "0.1px" }}>
          <div className="small-box left"></div>
          <div className="small-box right"></div>
          <span className="text-wrapper-44">Mukesh Jairath<br /></span>
          <span className="text-wrapper-45">Director</span>
        </div>
      </div>

      {/* Member 2 - Syed Meraj Naqvi */}
      <div className="team-member-div member-2">
        <img className="img-4" alt="Syed Meraj Naqvi" src={group21} />
        <p className="syed-meraj-naqvi">
          <span className="text-wrapper-46">Syed Meraj Naqvi<br /></span>
          <span className="text-wrapper-47">Chief Executive Officer</span>
        </p>
      </div>

      {/* Member 3 - Umang Sharma */}
      <div className="team-member-div member-3">
        <img className="img-3" alt="Umang Sharma" src={group18} />
        <p className="umang-sharma-product">
          <span className="text-wrapper-46">Umang Sharma<br /></span>
          <span className="text-wrapper-47">Product Head</span>
        </p>
      </div>

      {/* Member 4 - Mirdul Pandey */}
      <div className="team-member-div member-4">
        <img className="img-5" alt="Mirdul Pandey" src={group19} />
        <p className="mirdul-pandey">
          <span className="text-wrapper-46">Mirdul Pandey<br /></span>
          <span className="text-wrapper-47">Operation Head</span>
        </p>
      </div>

      {/* Member 5 - Ravikant Singh */}
      <div className="team-member-div member-5">
        <img className="img-6" alt="Ravikant Singh" src={group20} />
        <p className="ravikant-singh">
          <span className="text-wrapper-46">Ravikant Singh<br /></span>
          <span className="text-wrapper-47">Retention Head</span>
        </p>
      </div>

      {/* Member 6 - Manoj Karn */}
      <div className="team-member-div member-6">
        <img className="img-7" alt="Manoj Karn" src={group16} />
        <p className="manoj-karn-chief">
          <span className="text-wrapper-46">Manoj Karn<br /></span>
          <span className="text-wrapper-48">Chief Technology Officer</span>
        </p>
      </div>
    </div>
  );
}
