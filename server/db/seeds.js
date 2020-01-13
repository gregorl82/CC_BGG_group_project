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
  },
  {
    topicHeading: "Budget",
    subtopicHeadings: ["Sub topic 1", "Sub topic 2"]
  }
]);

db.savings.insertOne(
  {
    subtopics: [
      {heading: "Introduction",
      text: "The easiest way to get your savings working for you is to set things up so that you automatically add a little bit each month to your savings.  Before you know it, you'll have built up a solid chunk of savings for example, one way of saving tax efficiently is through a Cash ISA.<br/>The best time to put a bit of money aside is just after you've been paid, so set up your standing order to go out on, or just after pay day.  As your savings build up, they'll grow faster– even if you're only paying in the same regular amount.  This is because each time the interest earned on your money is paid into your account it starts earning interest too.<br/>"},
      {heading: "Choosing a savings account",
      text: "<ul><li>Tip 1 - Set a savings goal<br/></br>What do you want to get from your savings? How much do you need to save? When do you need the money?  Your savings goal will help determine which account is best for you. If you have more than one goal you could use different accounts for each one.</li><li><br/>Tip 2 - Know yourself when comparing rates<br/><br/>How hands on are you likely to be with your savings? Some accounts offer a high bonus rate which is designed to tempt you in – but bonuses drop off after a certain period.  If you have time to shop around and don't mind switching to get the best deals, set a reminder to switch at the end of any initial bonus rate.  If you don't have time to keep switching, avoid accounts offering bonus rates and look for a rate that's been more stable historically.<br/><br/>We recommend the following websites for comparing savings accounts:<br/><li><a href='http://www.moneysavingexpert.com/banking/?tab=sect7'>Money Savings Expert</a></li><li><a href='https://www.moneysupermarket.com/savings/'>Money Super Market</a></li><li><a href='https://www.which.co.uk/money/savings-and-isas/compare-savings'>Which?</a></li><br/><li>Tip 3 - Use regular savings accounts or fixed term deposits<br/><br/>Can you set up a standing order to your savings account or tie up your money for a year or more?  If so, you could earn a bit more interest with a regular savings account or a fixed-term deposit or savings bond.  But remember, with a fixed term account you might not be able to access your money immediately (or even not until the end of the term) – and there could be a hefty withdrawal fee.</li><li><br/>Tip 4 - Be tax-wise<br/><br/>Do you pay income tax?  If not, ask to have your account interest paid gross – otherwise tax will be automatically deducted.  If you are a tax payer you can earn interest tax-free in a cash ISA.  But be sure you're getting a good interest rate so the tax benefit isn't cancelled out by lower returns.</li></ul>"}
    ],
	    factoids: [
        "55% of British male adults add to their savings each month, compared with only 43% of women.",
        "40% of Brits said lacklustre earnings were the reason they're not adding more to their savings",
        "Almost 1 in 4 men have more than £20,000 saved – whether in ISAs, stocks and shares, or savings accounts – compared with less than 1 in 5 women",
        "More women than men are subscribed to Cash ISAs in the UK",
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
	    comparatives: [
        {name: "sing Twinkle Twinkle, Little Star", value: .02},
        {name: "travel to the moon with Neil", value: .3},
        {name: "your lovely leather shoes decompose", value: 25}
      ]
  });

  db.budget.insertOne(
   {
     subtopics: [
       {heading: "Managing Your Money",
       text: "If you're going to be financially independent for the first time, are trying to reach a big savings goal, or regularly find that you don't have enough money at the end of the month, then creating a budget can help you understand exactly how much is going in and out, and what your biggest costs are.<br /> The most common and significant outgoings for any household usually come under the following headings, and should be your first stop when creating your budget: <br /><ul><li>Accommodation</li><li>Utility Bills (Gas, Electricity, Phone, Internet)</li><li>Transport Costs</li><li>Food and Groceries</li><li>Loan or Credit Card Repayments</li></ul><br />However, many people forget to account for other costs such as clothing, entertainment subscriptions, or their Friday lunch at their favourite falafel vendor. This is where a budget can really help; to prioritise and reduce your spending where necessary."},
       {heading: "Cutting Costs", text: "Once you have an idea of the total money coming into and going out of your household, you can start to look at areas where you can reduce costs. If you haven't changed energy, phone or internet providers in a while, this could be a good area to start. The average UK household spends <b>£3,329</b> on water, gas, electricity, phone and internet bills. Mobile phone and broadband companies in particular tend to offer better deals to new customers, so it's worth shopping around.<br /> Make sure you're receiving any and all benefits that you're entitled to. There are a wide range of benefits available for a variety of circumstances, not just unemployment or disability benefits. The government has a number of <a href='https://www.gov.uk/benefits-calculators'>benefits calculators</a> to streamline this process.<br />If you are struggling to make ends meet on a consistent, month-by-month basis, you may qualify for government support under schemes such as <a href='https://www.mygov.scot/scottish-welfare-fund/'>the Scottish Welfare Fund</a> "}
     ],
       factoids: [
         "Did you know? Around £4.2billion of housing benefit was unclaimed last year.",
         "Did you know? The average monthly water bill is £32!",
         "Did you know? The average unused mobile phone data allowance is 3.4Gb"
       ],
       comparatives: [
         {name: "Adult Cinema Ticket", value: 16.65},
         {name: "Jeff Bezos", value: 116700000000},
         {name: "Falafel", value: 3},
         {name: "Pint of Milk", value: 0.49},
         {name: "New Macbook", value: 985}
       ]
     });
