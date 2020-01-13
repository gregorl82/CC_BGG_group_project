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
      text: "<ul><li>Tip 1 - Set a savings goal<br/></br>What do you want to get from your savings? How much do you need to save? When do you need the money?  Your savings goal will help determine which account is best for you. If you have more than one goal you could use different accounts for each one.</li><br/><li>Tip 2 - Know yourself when comparing rates<br/><br/>How hands on are you likely to be with your savings? Some accounts offer a high bonus rate which is designed to tempt you in – but bonuses drop off after a certain period.  If you have time to shop around and don't mind switching to get the best deals, set a reminder to switch at the end of any initial bonus rate.  If you don't have time to keep switching, avoid accounts offering bonus rates and look for a rate that's been more stable historically.<br/><br/>We recommend the following websites for comparing savings accounts:<br/><br/><li><a href='http://www.moneysavingexpert.com/banking/?tab=sect7'>Money Savings Expert</a></li><li><a href='https://www.moneysupermarket.com/savings/'>Money Super Market</a></li><li><a href='https://www.which.co.uk/money/savings-and-isas/compare-savings'>Which?</a></li><br/><li>Tip 3 - Use regular savings accounts or fixed term deposits<br/><br/>Can you set up a standing order to your savings account or tie up your money for a year or more?  If so, you could earn a bit more interest with a regular savings account or a fixed-term deposit or savings bond.  But remember, with a fixed term account you might not be able to access your money immediately (or even not until the end of the term) – and there could be a hefty withdrawal fee.</li><br/><li>Tip 4 - Be tax-wise<br/><br/>Do you pay income tax?  If not, ask to have your account interest paid gross – otherwise tax will be automatically deducted.  If you are a tax payer you can earn interest tax-free in a cash ISA.  But be sure you're getting a good interest rate so the tax benefit isn't cancelled out by lower returns.</li></ul>"},
      {heading: "Savings calculator",
      text: "Enter the amount you're saving and how often you're saving it, then select the item of your wildest dreams to see how many of them you could accrue over time!"}
    ],
	    factoids: [
        "55% of British male adults add to their savings each month, compared with only 43% of women",
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
      {heading: "Introduction",
      text: "There’s quite a range of borrowing products available to people aged 18 and over.  If you are aged under 18, you shouldn’t be borrowing and it might be illegal for a firm to try to sell you credit.  You will typically pay interest on what you borrow and possibly other charges as well.  A useful way of comparing costs is to use the Annual Percentage Rate (APR) which shows the cost of borrowing on an annualised basis.  But don’t just look at the APR – it might not reflect all the costs you might pay (for example, it does not include default fees).  In the case of a credit card, it is based on standard assumptions which might not reflect how you use the card.  APRs work best when comparing similar types of credit over similar periods."},
      {heading: "Can you afford to borrow money?",
      text: "Here are some costs to consider: <ul><li>Gas</li><li>Electricity</li><li>Council Tax</li><li>Water rates</li><li>TV licence</li><li>Mortgage or rent</li><li>Home and contents insurance</li><li>Telephone, mobile and internet service</li></ul><br/><br/>Of course, every household has different bills, so don’t treat this as a complete list.  Think about any additional costs you or your family might have to pay.  It’s a good idea to gather bank account and credit card statements from the last three months and record everything you spend over a period of a month or longer (as you might have some bills that are taken every six or twelve months).  Make sure you include everything you spend to get a true picture and add a bit extra to allow for inflation and any unexpected costs."},
      {heading: "Loan calculator",
      text: "Use this calculator to see how much a loan will cost you or how quickly you can pay off your existing loans. Simply add a loan below to get started."}
      ],
	    factoids: [
        "In July 2019, there were 61.9 million credit cards issued to UK residents, and 97.3 million debit cards issued. In other words, people are 57% more likely to own a debit card. The total number of cards issued has risen from 158.9 million in 2018 to 159.2 million in 2019",
        "People tend to spend more time on a debit card than on a credit card, with Brits making 1.3 billion debit card transactions compared to 342 million credit card transactions in July 2019",
        "The average purchase via credit card is £54.09, 68% higher than the debit card’s average of £32.19. Contactless purchases are also higher on a credit card, with an average value of £10.27 per transaction on credit card compared to £9.26 per transaction on debit card",
        "In February 2019 the total credit card debt in the UK was £72.6 billion. This equates to £2,649 credit card debt per household and £1,386 per adult. This is a £1.8 billion increase from February 2018",
      ],
	    comparatives: [
        {name: "You could sail around the world ", value: 3.5},
        {name: "You could travel to the Moon with Neil, Buzz and Michael ", value: .25},
        {name: "Your favourite pair of leather shoes would naturally decompose ", value: 25},
        {name: "You could stay on the International Space Station ", value: .5}
      ]
  });

  db.budget.insertOne(
   {
     subtopics: [
       {heading: "Managing Your Money",
       text: "If you're going to be financially independent for the first time, are trying to reach a big savings goal, or regularly find that you don't have enough money at the end of the month, then creating a budget can help you understand exactly how much is going in and out, and what your biggest costs are.<br /> The most common and significant outgoings for any household usually come under the following headings, and should be your first stop when creating your budget: <br /><ul><li>Accommodation</li><li>Utility Bills (Gas, Electricity, Phone, Internet)</li><li>Transport Costs</li><li>Food and Groceries</li><li>Loan or Credit Card Repayments</li></ul><br />However, many people forget to account for other costs such as clothing, entertainment subscriptions, or their Friday lunch at their favourite falafel vendor. This is where a budget can really help; to prioritise and reduce your spending where necessary."},
       {heading: "Cutting Costs",
       text: "Once you have an idea of the total money coming into and going out of your household, you can start to look at areas where you can reduce costs. If you haven't changed energy, phone or internet providers in a while, this could be a good area to start. The average UK household spends <b>£3,329</b> on water, gas, electricity, phone and internet bills. Mobile phone and broadband companies in particular tend to offer better deals to new customers, so it's worth shopping around.<br /> Make sure you're receiving any and all benefits that you're entitled to. There are a wide range of benefits available for a variety of circumstances, not just unemployment or disability benefits. The government has a number of <a href='https://www.gov.uk/benefits-calculators'>benefits calculators</a> to streamline this process.<br />If you are struggling to make ends meet on a consistent, month-by-month basis, you may qualify for government support under schemes such as <a href='https://www.mygov.scot/scottish-welfare-fund/'>the Scottish Welfare Fund</a> "}
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
