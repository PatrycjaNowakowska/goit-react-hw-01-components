import "./Statistics.css";

function RandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Item = ({ stat }) => {
  return (
    <li className="stat-item" style= {{ backgroundColor: RandomHexColor() }}>
      <span className="label">{stat.label}</span>
      <span className="percentage"> {stat.percentage}%</span>
    </li>
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title !== "" && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((stat) => (
          <Item key={stat.id} stat={stat} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
