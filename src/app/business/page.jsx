import IndependenceBusiness from "@/components/business/independence-section-business";
import HrB from "@/components/business/hrb";
import First_section_B from "@/components/business/first-sectionB";
import Second_section_b from "@/components/business/second-section-b";
import Third_section_B from "@/components/business/third-sectionB";
import Form_box from "@/components/form-box";

function BusinessPage() {
  return (
    <div>
      <IndependenceBusiness />
      <HrB />
      <div className="SamsungOne-700 ">
        <First_section_B />
        <Second_section_b />
        <Third_section_B />
      </div>
      <Form_box />
    </div>
  );
}

export default BusinessPage;
