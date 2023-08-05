const person = {
  foreName: "Dries",
  surName: "Bosmans",
  duration: getCurrentAge(),
  whereAbouts: "Tessenderlo",
  lineOfWork: "Software developer",
  page: "https://dries.bosmans.dev/",
  mainLanguages: ["C#", "JavaScript"],
  diversions: ["Natuurpunt Ham", "dog", "coding"],
};

const dog = {
  name: "Olaf",
  breed: "Belgian Malinois",
  numberOfPaws: 4
};
console.table(person);

function getCurrentAge() {
  const DOB = new Date(1990, 4, 28);
  // get time difference
  const diff = Date.now() - DOB.getTime();
  // convert the calculated difference in date format
  const year = new Date(diff).getUTCFullYear();
  // now calculate the age of the user
  return Math.abs(year - 1970);
}
