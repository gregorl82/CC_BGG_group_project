use financial_data;
db.dropDatabase();

db.topics.insertMany(
  [{
    topicHeading: "Savings"
  },
  {
    topicHeading: "Credit"
  },
  {
    topicHeading: "Budget"
  },
  {
    topicHeading: "Travel"
  },
  {
    topicHeading: "Pension"
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
      ]
  });

db.budget.insertOne(
  {
    subtopics: [
      {heading: "Managing your money",
      text: "If you're going to be financially independent for the first time, are trying to reach a big savings goal, or regularly find that you don't have enough money at the end of the month, then creating a budget can help you understand exactly how much is going in and out, and what your biggest costs are.<br /> The most common and significant outgoings for any household usually come under the following headings, and should be your first stop when creating your budget: <br><ul><li>Accommodation</li><li>Utility Bills (Gas, Electricity, Phone, Internet)</li><li>Transport Costs</li><li>Food and Groceries</li><li>Loan or Credit Card Repayments</li></ul><br />However, many people forget to account for other costs such as clothing, entertainment subscriptions, or their Friday lunch at their favourite falafel vendor. This is where a budget can really help; to prioritise and reduce your spending where necessary."},
      {heading: "Cutting costs",
      text: "Once you have an idea of the total money coming into and going out of your household, you can start to look at areas where you can reduce costs. If you haven't changed energy, phone or internet providers in a while, this could be a good area to start. The average UK household spends <b>£3,329</b> on water, gas, electricity, phone and internet bills. Mobile phone and broadband companies in particular tend to offer better deals to new customers, so it's worth shopping around.<br> Make sure you're receiving any and all benefits that you're entitled to. There are a wide range of benefits available for a variety of circumstances, not just unemployment or disability benefits. The government has a number of <a href='https://www.gov.uk/benefits-calculators'>benefits calculators</a> to streamline this process.<br />If you are struggling to make ends meet on a consistent, month-by-month basis, you may qualify for government support under schemes such as <href='https://www.mygov.scot/scottish-welfare-fund/'>the Scottish Welfare Fund</a> "},
      {heading: "Budget calculator",
      text: "Enter all of your spending values across different areas for the month, and your monthly earnings, and we'll show you how much you're spending in each area of life as well as how well you're sticking to your budget!"}
    ],
      factoids: [
        "Did you know? Around £4.2billion of housing benefit was unclaimed last year.",
        "Did you know? The average monthly water bill is £32!",
        "Did you know? The average unused mobile phone data allowance is 3.4Gb"
      ]
    });

db.travel.insertOne(
  {
    subtopics: [
      {heading: "Introduction",
      text: "If you’re going abroad, it’s a good idea to take some holiday money with you in the local currency to pay for essentials like food and drink, tips and taxis. To get the best deal, compare travel money prices online and buy it before you go.  You can purchase foreign currency at:<ul><li>Banks;</li><li>The Post Office;</li><li>Specialist websites</li><li>Bureaux de change;</li><li>Some travel agents</li><li>Larger supermarkets;</li><li>Foreign exchange brokers.</li></ul><br/><br/>You can either pick it up in person, or arrange for it to be delivered.<br/><br/>You’ll often find the best rates when you order currency online but there are some drawbacks:<ul><li>You’ll pay a charge of around £5 for delivery, unless free delivery is offered;</li><li>You’ll need to be at home to sign for it when it arrives, but they might deliver to a work address;</li><li>You might not be given the option to choose which notes you want – it’s often useful to have some smaller notes when you arrive to pay for things like tips.</li></ul><br/><br/>Depending on where you buy your currency you might get it delivered for free if you order more than a certain amount – normally over £500."},
      {heading: "Saving money on a holiday",
      text: "Holidays can be expensive, but there are a few things you can do to keep your dream trip affordable:<ul><li>Shop around - Comparison sites, high street travel agents and smaller firms are all worth checking before you buy a trip, change currency or purchase travel insurance. The more places you ask the more likely you are to bag a bargain;</li><li>Book your tickets at the right time - Find the best time of year to get cheap holiday deals. If you’re flexible on dates, comparison sites can help you work out the cheapest time to travel;</li><li>Haggle with high street operators - You might get them to offer you something cheaper than an online deal;</li><li>Package holiday vs DIY - Package holidays include flights, accommodation and sometimes food and drink. They can be cheaper, but less flexible than holidays where you book everything separately;</li><li>Match your trip to your budget - It’s no fun spending the rest of the year worrying about money after going on a holiday you can’t afford. If money’s tight why not consider a cheaper trip, or a ‘staycation’?</li>"},
      {heading: "Google is your friend, use comparison websites",
      text: "Price comparison websites are a quick and easy way to find lots of information on getting a cheap holiday.  Simply tell one of these websites where and when you want to go and it will search the market for available options.  Remember not to just focus on price. Make sure the holiday you pick matches your needs and your budget.<br/><br/>Many of these websites have a ‘price alert’ functionality, which means you can ask them to let you know if the cost of a trip falls below a certain sum.  Here are some good ones:<ul><li><a href='https://www.skyscanner.net/'>Skyscanner</a></li><li><a href='https://www.kayak.co.uk/'>Kayak</a></li><li><a href='https://www.momondo.co.uk/'>momondo</a></li><li><a href='https://www.dohop.com/'>Dohop</a></li></ul>"}
    ],
    factoids: [
      "The British Pound Sterling is the oldest currency still in use. The silver coins date back to around 775 C.E., when they were widely used throughout the Anglo-Saxon period",
      "Pop culture lovers may have a new favorite travel destination. The tiny Pacific island of Niue, which uses the New Zealand Dollar as its currency, annually releases commemorative coins featuring Disney princesses, Star Wars characters, Pokémon and other fan favorites",
      "Spain is the most visited country by residents of the United Kingdom, with around 15.9 million visits made in 2017. Outbound tourism from the UK has been increasing each year, with tourists mostly traveling to destinations in Europe",
      "Holiday spending was highest ever in 2018, at over 32 billion British pounds - approximately seven times as much as that spent on business travel by UK visitors in the same year"
    ]
  });

  db.pension.insertOne(
    {
      subtopics: [
        {heading: "Introduction",
        text: "There are three main types of pension:<ul><li>State pension;</li><li>defined benefit pensions;</li><li>defined contribution pensions.</li><br/><br/>State pension:<br/>Most people get some State Pension. It’s paid by the government and is a secure income for life which increases by at least the rate of inflation each year.  You build up your entitlement to the State Pension by making National Insurance contributions during your working life.  In some cases, you can do this even when you’re not working, such as when you’re bringing up children or claiming certain benefits.  From April 2016 a new flat-rate State Pension was introduced. For the current tax year 2019-20 the full new State Pension is £168.60 per week.  However, you might be entitled to more than this if you have built up entitlement to ‘additional state pension’ under the old pre-April 2016 system – or less than this if you were ‘contracted out’ of the additional state pension.  To be eligible for the full State Pension you will need 35 years NI record.  You’ll usually need at least 10 qualifying years on your national insurance record to qualify.<br/><br/>Defined benefit pension<br/>You’re most likely to have a defined benefit (DB) pension if you work in the public sector or for a large company.  This is a salary-related pension which pays out a secure income for life and increases each year.  The pension you get is based on how long you’ve been a part of the scheme and how much you earn.  You might have a final salary scheme where your pension is based on your pay when you retire or leave the scheme, or alternatively a career-average scheme where your pension is based on the average of your pay while you were a member of the scheme.<br/><br/>Defined contribution pension<br/>With this type of scheme, you build up a pension pot which you can draw an income from when you cut down or stop working. But you must be aged at least 55 before you can start to take money out. With this type of pension scheme, you can usually withdraw at least 25 per cent (a quarter) of your pot tax-free.  The amount that builds up depends on:<br/><br/><ul><li>the level of charges you pay;</li><li>how well your investment performs;</li><li>how much you and your employer (if you are employed) pay into the scheme</li></ul><br/><br/>Defined contribution (DC) pensions include workplace, personal and stakeholder pension schemes."},
        {heading: "Retiring abroad",
        text: "State pension<br/><br/>You can claim your State Pension if you live abroad, but Pension Credit - a benefit which tops up your weekly income, stops when you move overseas permanently.  When you move, you must let the International Pension Centre know (and the Northern Ireland Pension Centre if you’re from Northern Ireland).  You should also contact HMRC to ensure you pay the right amount of tax.  Your State Pension can be paid to a UK bank or building society account or to an overseas account in the local currency.  Just as in the UK, you can choose to defer your State Pension and get extra State Pension.<br/><br/>Your workplace and personal pensions<br/><br/>Personal or workplace pensions can be paid to you wherever you live.  And you’ll be entitled to any built-in annual increases in the same way as if you were living in the UK.  Talk to your pension scheme or provider before you move.  Some only pay into a UK bank account but others might pay into an overseas one if you ask.  There might be extra charges to pay.  Bear in mind that your pension income will be paid in pound sterling.  That means it will be affected by fluctuations in exchange rates when you convert it to your local currency.  You need to be prepared for your income to rise and fall because of this.  If rates go against you, it can seriously affect how much you have to live on."},
        {heading: "Returning to the UK",
        text: "If you come back to the UK, you should tell the Pension Service (International Pension Centre or the Northern Ireland Pension Centre).  If your State Pension hasn’t been rising while you’ve been abroad and you remain in the UK for more than six months, it will be increased to the current rate and will start increasing again each year.  It’s also important to notify HMRC by calling the HMRC Residency helpline on 0300 200 3300 in the UK, or +44 151 210 2222 from outside the UK.  You should also notify any pension schemes you belong to."}
      ],
      factoids: [
        "The number of centenarians (people aged 100 and over) living in the UK has risen by 72% over the last decade to 14,450 in 2014",
        "Despite automatic enrolment workplace pensions being put in place in the UK, only 65% of survey respondents said they had a pension, equating to 33.4 million people",
        "The recommended amount for a comfortable retirement is £260,000–£445,000, depending on accommodation costs",
        "80% of Millennials don't believe they will meet their predicted needed pension amount to retire comfortably (average prediction £126,400)",
        "75% of Gen X don't believe they will meet their predicted needed pension amount to retire comfortably (average prediction £188,300)",
        "59% of Baby Boomers don't believe they will meet their predicted needed pension amount to retire comfortably (average prediction £211,800)"
      ]
    });
