const CompFunc = ({ value, index }) => {
  return (
    <li key={value.item}>
      <b>{value.item}</b> - {value.group}
      <div>contents</div>
      <div>contents</div>
      <div>contents</div>
      <div>contents</div>
    </li>
  );
};

export default CompFunc;
