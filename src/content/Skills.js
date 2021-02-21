export default function Skills() {
  const myskills = ["HTML", "CSS", "JavaScript", "React", "JIRA"];
  return (
    <div className="contents skills">
      <h1>My Skills</h1>
      <br />
      <ul>
        {myskills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
