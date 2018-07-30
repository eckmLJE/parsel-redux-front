const tagNames = {
  fact_check: "Fact Check",
  truth: "True",
  inspire: "Inspiring",
  deceptive: "Deceptive"
};

const countTags = () => {
  const tags = {
    fact_check: 0,
    inspire: 0,
    deceptive: 0,
    truth: 0
  };
  this.props.statement.attributes.tags.forEach(tag => {
    tags[tag.tag_type]++;
  });
  return tags;
};

const totalTags = tags => {
  const values = Object.values(tags);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return values.reduce(reducer);
};

const makePercentFixed = (num, total) => ((num / total) * 100).toFixed(1);

const makeTagStats = (tags, total) => {
  return [
    {
      tag_type: "truth",
      color: colors.blue,
      percent: this.makePercentFixed(tags.truth, total),
      count: tags.truth
    },
    {
      tag_type: "inspire",
      color: colors.gold,
      percent: this.makePercentFixed(tags.inspire, total),
      count: tags.inspire
    },
    {
      tag_type: "deceptive",
      color: colors.green,
      percent: this.makePercentFixed(tags.deceptive, total),
      count: tags.deceptive
    },
    {
      tag_type: "fact_check",
      color: colors.red,
      percent: this.makePercentFixed(tags.fact_check, total),
      count: tags.fact_check
    }
  ];
};

const statsGenerator = () => {
  const tags = this.countTags();
  const total = this.totalTags(tags);
  return this.makeTagStats(tags, total);
};

const generateSpectrumDiv = (color, percent) => (
  <div
    className="spectrum"
    key={color}
    style={{
      backgroundColor: color,
      width: `${percent - 1}%`,
      height: 20,
      margin: 1
    }}
  />
);
