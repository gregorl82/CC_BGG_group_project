use financial_data;
db.dropDatabase();

db.topics.insertMany(
  [{
    topicHeading: "Savings",
  	subtopicHeadings: ["Sub topic 1", "Sub topic 2"]
  },
  {
    topicHeading: "Credit",
    subtopicHeadings: ["Sub topic 1", "Sub topic 2"]
  }
]);

db.savings.insertOne(
  {
    subtopics: [
      {heading: "Sub topic 1", text: "Descrption of Savings' sub topic 1 hehe"},
      {heading: "Sub topic 2", text: "This is a description of Savings' sub topic 2 lolz"}
    ],
	    factoids: [
        "Did you know sub topic 1 is the best thing since sliced bread?",
        "Did you know Gregor is the coolest cat on the block?",
        "Factoid 3",
        "Factoid 4",
      ],
	    comparatives: [
        {name: "Cup of coffee", value: 2},
        {name: "Tesla Model S", value: 77770},
        {name: "Bunch of bananas", value: 1},
        {name: "The CodeClan experience", value: 6250},
        {name: "Pint", value: 3.5}
    ]
  });

db.credit.insertOne(
  {
    subtopics: [
      {heading: "Sub topic 1", text: "Descrption of Credit's sub topic 1 hehe"},
      {heading: "Sub topic 2", text: "This is a description of Credit's sub topic 2 lolz"}
    ],
	    factoids: [
        "Did you know sub topic 2 is actually the best thing since sliced bread?",
        "Did you know Gregor is the coolest cat on the block?",
        "Factoid 3",
        "Factoid 4",
      ],
	    comparatives: [{name: "", value: }]
  });
