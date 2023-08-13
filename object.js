const student = {
  name: "Xaman",
  id: 23,
  address: "Movie",
  isSing: true,
  friends: ["opu", "Salam", "Kalam"],
  carAct: function () {
    console.log("Hello car act");
  },
  car: {
    brand: "Toyota",
    price: 2300000,
    color: "Goldenrod",
    made: 2023,
    parts: [{ tire: 4, glass: 2, body: "Stainless steal" }],
  },
};

// console.log(student.friends);
let friends = student.friends;
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
