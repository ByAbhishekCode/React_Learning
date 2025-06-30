function NumbersGen() {
  let number = Math.random() * 100;
  let colorGen =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  return <h1 style={{ background: colorGen }}>Random Number is : {Math.floor(number)}</h1>;
}

export default NumbersGen;
