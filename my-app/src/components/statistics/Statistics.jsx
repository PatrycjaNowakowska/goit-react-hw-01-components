import "./Statistics.css";

const Item = ({ stat }) => {
  return (
    <li className="item">
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
