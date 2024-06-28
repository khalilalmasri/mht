import IndependenceFleelancer from "@/components/freelancer/independence-section-freelancer";
import Hrc from "@/components/freelancer/hr";
import First_section from "@/components/freelancer/first-section";
import Second_section from "@/components/freelancer/second-section-f";
import Thierd_section from "@/components/freelancer/thierd-section";
import Forth_section from "@/components/freelancer/forth-section";
import Form_box from "@/components/form-box";

function FreelancerPage() {
  return (
    <div>
      <IndependenceFleelancer />
      <Hrc />
      <div className="SamsungOne-700  ">
        <First_section />
        <Second_section />
        <Thierd_section />
        <Forth_section />{" "}
      </div>
      <Form_box />
    </div>
  );
}

export default FreelancerPage;
