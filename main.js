const users = [
    {
      name: "David",
      age: 50,
      scores: [20, 30, 40, 80],
      products: [{ name: "Gucci Bag" }],
    },
    {
      name: "David",
      age: 50,
      scores: [60, 22, 49, 36],
      products: [{ name: "Gucci Bag" }],
    },
    {
      name: "David",
      age: 50,
      scores: [55, 44, 49, 88],
      products: [{ name: "Gucci Bag" }],
    },
    {
      name: "David",
      age: 50,
      scores: [13, 16, 30, 88],
      products: [{ name: "Gucci Bag" }],
    },
    {
      name: "David",
      age: 50,
      scores: [18, 44, 66, 99],
      products: [{ name: "Gucci Bag" }],
    },
    {
      name: "David",
      age: 50,
      scores: [19, 17, 88, 20],
      products: [{ name: "Gucci Bag" }],
    },
    {
      name: "David",
      age: 50,
      scores: [14, 70, 30, 0],
      products: [{ name: "Gucci Bag" }],
    },
    {
      name: "David",
      age: 50,
      scores: [1, 5, 6, 3],
      products: [{ name: "Gucci Bag" }],
    },
  ];
  
  return (function (users) {
    const scores = users.map((user) => user.scores);
    return scores.flat();
  }
)(users);



    // Output: [30, 40, 80, 60, 22, 49, 36, 55, 44, 49, 88, 30, 88, 44, 66, 99, 88]