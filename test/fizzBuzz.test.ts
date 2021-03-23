describe("FizzBuzz", () => {
  it("pinta el resultado de FizzBuzz para 1", () => {
    jest.spyOn(console, "log");

    fizzBuzz();

    expect(console.log).toHaveBeenCalledWith(1);
  });
});

function fizzBuzz() {
  console.log(1);
}
