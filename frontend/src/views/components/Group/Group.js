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

      <p className="text-wrapper-43">
        100+ Years of experience of core team members
      </p>

      {/* <img
        className="img"
        alt="Group"
        src="https://c.animaapp.com/mfr8k808PpGNxz/img/group-12.png"
      /> */}

      {/* <p className="mukesh-jairath">
        <span className="text-wrapper-44">Mukesh Jairath<br /></span>
        <span className="text-wrapper-45">Director</span>
      </p> */}

      <p className="mukesh-jairath label-box">
        <span className="text-wrapper-44">
          Mukesh Jairath
          <br />
        </span>
        <span className="text-wrapper-45">Director</span>
      </p>

      <p className="umang-sharma-product">
        <span className="text-wrapper-46">
          Umang Sharma
          <br />
        </span>
        <span className="text-wrapper-47">Product Head</span>
      </p>

      <p className="syed-meraj-naqvi">
        <span className="text-wrapper-46">
          Syed Meraj Naqvi
          <br />
        </span>
        <span className="text-wrapper-47">Chief Executive Officer</span>
      </p>

      <p className="mirdul-pandey">
        <span className="text-wrapper-46">
          Mirdul Pandey
          <br />
        </span>
        <span className="text-wrapper-47">Operation Head</span>
      </p>

      <p className="ravikant-singh">
        <span className="text-wrapper-46">
          Ravikant Singh
          <br />
        </span>
        <span className="text-wrapper-47">Retention Head</span>
      </p>

      <p className="manoj-karn-chief">
        <span className="text-wrapper-46">
          Manoj Karn
          <br />
        </span>
        <span className="text-wrapper-48">Chief Technology Officer</span>
      </p>

      <p className="text-wrapper-49">
        Welcome to RiskBirbal Insurance Brokers, your trusted partner in
        protecting your assets and managing risks. We are a team of experienced
        insurance professionals committed to providing our clients with
        personalized insurance solutions that meet their unique needs.
      </p>

      <div className="text-wrapper-50">Our Team</div>

      <img className="img-2" alt="Group" src={group12} />

      <img className="img-3" alt="Group" src={group18} />
      <img className="img-4" alt="Group" src={group21} />
      <img className="img-5" alt="Group" src={group19} />
      <img className="img-6" alt="Group" src={group20} />
      <img className="img-7" alt="Group" src={group16} />
      <div className="line" />
    </div>
  );
}
