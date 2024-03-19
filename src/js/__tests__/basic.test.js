import personHealth from "../function";

test("Здоров", () => {
  const person = {
    name: "Маг",
    health: 90,
  };
  expect(personHealth(person)).toBe("healthy");
});

test("Ранен", () => {
  const person = {
    name: "Маг",
    health: 40,
  };
  expect(personHealth(person)).toBe("wounded");
});

test("Критично ранен", () => {
  const person = {
    name: "Маг",
    health: 5,
  };
  expect(personHealth(person)).toBe("critical");
});
