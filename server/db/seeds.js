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
      text: "Managing a tight budget can be tough. What often throws us off course is the unexpected, but regular saving can help. If you save regularly, you'll quickly find that your savings add up and keep growing. Get into the habit and watch your money turn into more money.<br/>"}
      {heading: "Why bother saving?",
      text: "There are three main reasons for saving regularly:<ul><li>For emergencies: to make sure there's money available if something unexpected happens, like your car breaking down.</li><li>To fund luxuries: this might include a holiday or buying a new car, or things such as a tablet, computer or new phone.</li><li>To live comfortably in the future: although it might seem very far away, once you stop working, your income will go down and you'll probably have to rely on money you've saved to keep up your standard of living.</li></ul>"},
      {heading: "Make saving a habit",
      text: "The easiest way to build your savings is to set things up so that you automatically add a little bit each month. Before you know it, you'll have built up a solid chunk of money.<br />One of the quickest ways to do this is to set up a standing order (a regular payment) from a bank current account into your chosen savings account. The best time to put a bit of money aside is just after you've been paid, so set up your standing order to go out on, or just after pay day."},
      {heading: "",
      text: "There are hundreds of accounts, but only a few types of account – some for easy access to emergency funds, some for saving regularly and some for growing your money. Take a look at the table to see which suits you best..<br /><br /><table><thead><tr><th colspan="2">Types of cash savings account</th></tr></thead><tbody><tr><td>Instant and easy access accounts</td><td>The place for your emergency savings. They might pay more interest than a normal current account, and the money is on hand when you need it.</td></tr><tr><td>Regular savings accounts</td><td>For saving a monthly chunk of your income. There are rules about how much you can put in and take out, but you get a slightly higher interest rate.</td></tr><tr><td>Fixed-term deposit accounts</td><td>For setting money aside for a set length of time. A fixed rate of interest is set in advance, so you know exactly how much you'll end up with.</td></tr><tr><td>Cash ISAs (tax-free)</td><td>Tax-free savings. You get an annual allowance – so make the most of it! A Cash ISA is usually a simple savings or deposit account. You can get a Cash ISA from the age of 16, or a Junior ISA for under 18s.</td></tr></tbody></table>"},
      {heading: "Handy tips for choosing a savings account",
      text: "Use these tips to narrow down your search for a savings account – then get saving! <ol><li>Set a savings goal</li><li>Know yourself when comparing rates</li><li>Use regular savings accounts or fixed term deposits</li><li>Be tax-wise</li><li>Don't keep more than £85,000 with one banking group</li></ol>"}
    ],
    factoids: [
        "You can use different savings accounts for different goals. For example, use an instant access account to save for an emergency fund while using a fixed-rate account to save up for a deposit on a house",
        "Even a small amount of savings can come in handy and stop you tipping into debt if things go wrong. Gather up pocket change and to put in a jar at the end of a week, or keep a spending diary to identify areas of your spending where you might be able to cut back",
        "55% of British male adults add to their savings each month, compared with only 43% of women",
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
      text: "There’s quite a range of borrowing products available to people aged 18 and over.  If you are aged under 18, you shouldn’t be borrowing and it might be illegal for a firm to try to sell you credit.  You will typically pay interest on what you borrow and possibly other charges as well.  A useful way of comparing costs is to use the Annual Percentage Rate (APR) which shows the cost of borrowing on an annualised basis.  But don’t just look at the APR – it might not reflect all thecosts you might pay (for example, it does not include default fees).  In the case of a credit card, it is based on standard assumptions which might not reflect how you use the card.  APRs work best when comparing similar types of credit over similar periods."},
      {heading: "Can you afford to borrow money?",
      text: "Here are some costs to consider: <ul><li>Gas</li><li>Electricity</li><li>Council Tax</li><li>Water rates</li><li>TV licence</li><li>Mortgage or rent</li><li>Home and contents insurance</li><li>Telephone, mobile and internet service</li></ul><br/><br/>Of course, every household has different bills, so don’t treat this as a complete list.  Think about any additional costs you or your family might have to pay.  It’s a good idea to gather bank account and credit card statements fromthe last three months and record everything you spend over a period of a month or longer (as you might have some bills that are taken every six or twelve months).  Make sure you include everything you spend to get a true picture and add a bit extra to allow for inflation and any unexpected costs."},
      {heading: "Loan calculator",
      text: "Use this calculator to see how much a loan will cost you or how quickly you can pay off your existing loans. Simply add a loan to get started!"}
      ],
  	   factoids: [
        "In July 2019, there were 61.9 million credit cards issued to UK residents, and 97.3 million debit cards issued. In other words, people are 57% more likely to own a debit card. The total number of cards issued has risen from 158.9 million in 2018 to 159.2 million in 2019",
        "People tend to spend more time on a debit card than on a credit card, with Brits making 1.3 billion debit card transactions compared to 342 million credit card transactions in July 2019",
        "The average purchase via credit card is £54.09, 68% higher than the debit card’s average of £32.19. Contactless purchases are also higher on a credit card, with an average value of £10.27 per transaction on credit card compared to £9.26 per transaction on debit card",
        "In February 2019 the total credit card debt in the UK was £72.6 billion. This equates to £2,649 credit card debt per household and £1,386 per adult. This is a £1.8 billion increase from February 2018",
      ],
  	   comparives: [
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
      text: "If you're going to be financially independent for the first time, are trying to reach a big savings goal, or regularly find that you don't have enough money at the end of the month, then creating a budget can help you understand exactly how much is going in and out, and what your biggest costs are.<br /> The most common and significant outgoings for any household usually come under the following headings, and should be your first stop when creating your budget: <br><ul><li>Accommodation</li><li>Utility Bills (Gas, Electricity, Phone, Internet)</li><li>Transport Costs</li><li>Food and Groceries</li><li>Loan or Credit Card Repayments</li></ul><br />However, many people forget to account for other costs such as clothing, entertainment subscriptions, or their Friday lunch at their favourite falafel vendor. This is where a budget can really help; to prioritise and reduce your spending where necessary."},
      {heading: "Cutting Costs",
      text: "Once you have an idea of the total money coming into and going out of your household, you can start to look at areas where you can reduce costs. If you haven't changed energy, phone or internet providers in a while, this could be a good area to start. The average UK household spends <b>£3,329</b> on water, gas, electricity, phone and internet bills. Mobile phone and broadband companies in particular tend to offer better deals to new customers, so it's worth shopping around.<br> Make sure you're receiving any and all benefits that you're entitled to. There are a wide range of benefits available for a variety of circumstances, not just unemployment or disability benefits. The government has a number of <a href='https://www.gov.uk/benefits-calculators'>benefits calculators</a> to streamline this process.<br />If you are struggling to make ends meet on a consistent, month-by-month basis, you may qualify for government support under schemes such as <href='https://www.mygov.scot/scottish-welfare-fund/'>the Scottish Welfare Fund</a> "}
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
    })
