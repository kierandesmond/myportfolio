import WideCard from "../common/WideCard";

export default function Education() {
  return (
    <div className="contents education">
      <h1>My Education</h1>
      <br></br>
      <WideCard
        title="Master in Management"
        desc="UCD Smurfit BSchool"
        from="YYYY"
        to="YYYY"
      />
      <WideCard title="Bachelors in Science" desc="UCD"
       from="YYYY" to="YYYY" />
    </div>
  );
}
