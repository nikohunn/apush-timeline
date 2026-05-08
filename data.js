// APUSH Timeline Data — Units 1–9
// Each unit has an id (used for CSS theming), a label, and an array of events.
// Each event has: year (string), title (string), note (string).

const UNITS = [
  {
    id: 'u1',
    label: 'Unit 1 — Colonial beginnings',
    events: [
      {
        year: '1492',
        title: 'Columbus arrives in the Americas',
        note: 'Marks the beginning of sustained European contact with the Americas and triggers the Columbian Exchange — a massive transfer of plants, animals, culture, and disease between hemispheres.'
      },
      {
        year: '1607',
        title: 'Jamestown founded',
        note: 'First permanent English settlement in North America. Struggled early with disease and conflict but survived through tobacco cultivation, becoming the economic model for Southern colonies.'
      },
      {
        year: '1608',
        title: 'Settlement of Quebec by the French',
        note: 'France establishes a major colonial foothold in North America, beginning their control of the St. Lawrence River valley and launching a fur-trade empire that rivaled English settlements.'
      },
    ]
  },
  {
    id: 'u2',
    label: 'Unit 2 — Colonial society',
    events: [
      {
        year: '1619',
        title: 'First enslaved Africans arrive in Virginia',
        note: 'Marks the beginning of African slavery in English North America, transforming the labor system of the South and setting the stage for the central conflict of American history.'
      },
      {
        year: '1619',
        title: 'Virginia House of Burgesses',
        note: 'First representative legislative assembly in English North America — an early model of democratic self-governance that colonists would later cite in demanding rights from Britain.'
      },
      {
        year: '1620',
        title: 'Mayflower Compact',
        note: 'Pilgrims establish a framework for self-governance before landing at Plymouth — an early model of consent-based government and direct democracy in the colonies.'
      },
      {
        year: '1676',
        title: "Bacon's Rebellion",
        note: "Frontier settlers revolt against Virginia's colonial government. The rebellion's multiracial coalition of poor farmers and indentured servants alarmed planters, accelerating the shift from indentured servants to enslaved Africans as the primary labor force."
      },
    ]
  },
  {
    id: 'u3',
    label: 'Unit 3 — Revolution & founding',
    events: [
      {
        year: '1754',
        title: 'French and Indian War begins',
        note: "Britain and France fight for control of North America. Britain wins but accumulates enormous debt, leading to new taxes on colonists and ultimately sparking the Revolution."
      },
      {
        year: '1763',
        title: 'Proclamation of 1763',
        note: 'Britain forbids colonists from settling west of the Appalachians, angering colonists who expected western land as a reward for service in the war — one of the first major grievances against British rule.'
      },
      {
        year: '1765',
        title: 'Stamp Act',
        note: 'First direct tax on colonists by Britain — sparks the rallying cry "no taxation without representation" and unites the colonies in resistance for the first time.'
      },
      {
        year: '1776',
        title: 'Declaration of Independence',
        note: "Thomas Jefferson's document formally breaks from Britain and articulates Enlightenment ideals of natural rights and self-governance, influencing revolutions around the world."
      },
      {
        year: '1781',
        title: 'Battle of Yorktown',
        note: "Cornwallis's surrender to Washington effectively ends the Revolutionary War. The French alliance — ships and troops — proved decisive in the final siege."
      },
      {
        year: '1781',
        title: 'Articles of Confederation',
        note: "Weak federal central government that will fail due to inability to tax, regulate trade, or repress rebellions."
      },
      {
        year: '1786',
        title: "Shays' Rebellion",
        note: "Indebted Massachusetts farmers revolt, exposing the weakness of the Articles of Confederation and galvanizing delegates to draft a stronger federal Constitution."
      },
      {
        year: '1787',
        title: 'Constitution ratified',
        note: "Replaces the Articles of Confederation. Creates a stronger federal government with three branches, checks and balances, and a framework that remains the law of the land today."
      },
    ]
  },
  {
    id: 'u4',
    label: 'Unit 4 — Early republic & expansion',
    events: [
      {
        year: '1803',
        title: 'Louisiana Purchase',
        note: "Jefferson buys 828,000 sq miles from Napoleon, doubling the nation's size and fueling westward expansion — though it raised questions about presidential power and the future of slavery."
      },
      {
        year: '1812',
        title: 'War of 1812',
        note: 'Conflict with Britain over trade restrictions and impressment of sailors. Ends roughly in a draw but boosts American nationalism and effectively ends British-backed Native American resistance in the East.'
      },
      {
        year: '1820',
        title: 'Missouri Compromise',
        note: 'Admits Missouri as a slave state and Maine as a free state; bans slavery north of the 36°30′ line — a temporary fix to sectional tensions that held for 30 years.'
      },
      {
        year: '1823',
        title: 'Monroe Doctrine',
        note: "It's common ball."
      },
      {
        year: '1824',
        title: 'Corrupt Bargain',
        note: "No candidate wins the Electoral College; the House elects John Quincy Adams after Henry Clay throws his support Adams's way. Jackson's furious supporters cry foul, fracturing the Democratic-Republican Party."
      },
      {
        year: '1828',
        title: "Jackson elected — end of Era of Good Feelings",
        note: "Andrew Jackson's election launches the Jacksonian Democracy era — expanded white male suffrage, the spoils system, and a populist style that reshaped American politics."
      },
      {
        year: '1830',
        title: 'Indian Removal Act',
        note: 'Authorizes the forced relocation of Native American tribes from east of the Mississippi to designated western territory, leading to the Trail of Tears and thousands of deaths.'
      },
      {
        year: '1848',
        title: 'Mexican-American War ends — Treaty of Guadalupe Hidalgo',
        note: 'U.S. gains California, New Mexico, and other territories. Victory intensifies debate over whether new lands will be slave or free, pushing the country toward Civil War.'
      },
      {
        year: '1848',
        title: 'Seneca Falls Convention',
        note: "First women's rights convention in the U.S., organized by Elizabeth Cady Stanton and Lucretia Mott. Produces the Declaration of Sentiments demanding equal rights, including suffrage."
      },
    ]
  },
  {
    id: 'u5',
    label: 'Unit 5 — Civil War & Reconstruction',
    events: [
      {
        year: '1850',
        title: 'Compromise of 1850',
        note: 'Admits California as a free state while strengthening the Fugitive Slave Act — a deal that temporarily delays conflict but satisfies neither side fully.'
      },
      {
        year: '1854',
        title: 'Kansas-Nebraska Act',
        note: "Repeals the Missouri Compromise and introduces 'popular sovereignty,' allowing settlers to vote on slavery. Leads to violent conflict in 'Bleeding Kansas' and the rise of the Republican Party."
      },
      {
        year: '1857',
        title: 'Dred Scott decision',
        note: "Supreme Court rules enslaved people are property, not citizens, and that Congress cannot ban slavery in any territory — one of the most divisive rulings in American history."
      },
      {
        year: '1860',
        title: 'Lincoln elected; South secedes',
        note: "Lincoln wins without appearing on any Southern ballot. Southern states view his election as an existential threat and begin seceding to form the Confederate States of America."
      },
      {
        year: '1863',
        title: 'Emancipation Proclamation',
        note: "Lincoln declares enslaved people in Confederate states free, transforming the war's moral purpose and preventing European powers from recognizing the Confederacy."
      },
      {
        year: '1865',
        title: 'Appomattox Courthouse — Civil War ends',
        note: "Lee surrenders to Grant on April 9, 1865, ending four years of war and approximately 620,000–750,000 deaths — the deadliest conflict in American history."
      },
      {
        year: '1865',
        title: '13th Amendment abolishes slavery',
        note: 'Formally ends slavery throughout the United States, fulfilling the promise of the Emancipation Proclamation and marking a constitutional revolution.'
      },
      {
        year: '1877',
        title: "Hayes election ends Reconstruction",
        note: 'The Compromise of 1877 withdraws federal troops from the South, ending Reconstruction. This begins the Jim Crow era of legal segregation and systematic disenfranchisement of Black Americans.'
      },
    ]
  },
  {
    id: 'u6',
    label: 'Unit 6 — Gilded Age',
    events: [
      {
        year: '1869',
        title: 'Transcontinental Railroad completed',
        note: "The Golden Spike at Promontory Summit connects East and West coasts, transforming commerce and settlement while displacing Native Americans from the Great Plains."
      },
      {
        year: '1882',
        title: 'Chinese Exclusion Act',
        note: "The first federal law to restrict immigration based on race or nationality, barring Chinese laborers and reflecting the nativist anxieties of the Gilded Age."
      },
      {
        year: '1877–94',
        title: 'Major labor strikes',
        note: "The Great Railroad Strike (1877), Haymarket Affair (1886), Homestead Strike (1892), and Pullman Strike (1894) reflect industrial workers' struggles against powerful corporations and government repression."
      },
      {
        year: '1890',
        title: 'Sherman Antitrust Act',
        note: "First federal law targeting monopolistic corporations. Although weakly enforced at first, it set a landmark precedent for government regulation of business — later wielded aggressively by TR."
      },
      {
        year: '1896',
        title: 'Plessy v. Ferguson',
        note: '"Separate but equal" — Supreme Court upholds racial segregation on railroads, providing constitutional cover for Jim Crow laws throughout the South until Brown v. Board in 1954.'
      },
      {
        year: '1898',
        title: 'Spanish-American War',
        note: "Quick U.S. victory — Spain cedes Cuba, Puerto Rico, Guam, and the Philippines. Marks America's emergence as an imperial power and triggers debate over overseas expansion."
      },
    ]
  },
  {
    id: 'u7',
    label: 'Unit 7 — Progressive Era through WWII',
    events: [
      {
        year: '1901',
        title: 'Theodore Roosevelt takes office',
        note: 'Progressive president uses the "bully pulpit" to bust trusts, regulate railroads (Hepburn Act), and conserve millions of acres of public lands — redefining the role of the federal government.'
      },
      {
        year: '1920',
        title: "19th Amendment — women's suffrage",
        note: "After decades of activism by suffragists like Susan B. Anthony and Ida B. Wells, women gain the constitutional right to vote nationwide."
      },
      {
        year: '1920s',
        title: 'Immigration restriction acts',
        note: 'The Emergency Quota Act (1921) and Immigration Act (1924) sharply limit immigration, especially from Southern and Eastern Europe and Asia, reflecting nativist anxieties of the era.'
      },
      {
        year: '1929',
        title: 'Stock market crash — end of laissez-faire',
        note: "The Great Depression begins, discrediting hands-off economic policy and setting the stage for massive federal intervention through the New Deal."
      },
      {
        year: '1930',
        title: 'Neutrality Acts',
        note: "Congress passes a series of acts prohibiting arms sales and loans to warring nations — reflecting strong isolationist sentiment as Europe edges toward another world war."
      },
      {
        year: '1933',
        title: 'New Deal (FDR)',
        note: "Roosevelt's ambitious relief, recovery, and reform programs — including the CCC, TVA, Social Security, and banking regulation — dramatically expand the federal government's role in American life."
      },
      {
        year: '1941',
        title: 'Pearl Harbor — U.S. enters WWII',
        note: "Japan's surprise attack on December 7 kills 2,400 Americans and ends U.S. neutrality. Congress declares war the next day; the U.S. enters both the Pacific and European theaters."
      },
      {
        year: '1945',
        title: 'Germany and Japan surrender',
        note: "Germany surrenders in May (V-E Day); Japan surrenders in September following the atomic bombings of Hiroshima and Nagasaki (V-J Day), ending the deadliest conflict in world history."
      },
    ]
  },
  {
    id: 'u8',
    label: 'Unit 8 — Cold War & Civil Rights',
    events: [
      {
        year: '1947',
        title: 'Truman Doctrine',
        note: "Commits the U.S. to containing Communist expansion globally — the foundational foreign policy of the Cold War, articulated in response to crises in Greece and Turkey."
      },
      {
        year: '1947',
        title: 'Marshall Plan',
        note: "U.S. provides over $13 billion in economic aid to rebuild Western Europe, preventing war-weakened nations from turning to communism."
      },
      {
        year: '1954',
        title: 'Brown v. Board of Education',
        note: "Supreme Court unanimously overturns Plessy v. Ferguson, declaring school segregation unconstitutional. Galvanizes the Civil Rights Movement and challenges Jim Crow across the South."
      },
      {
        year: '1961',
        title: 'JFK elected',
        note: "Kennedy's narrow victory over Nixon ushers in a new era. His administration faces the Cold War's most dangerous moments and advances civil rights cautiously under intense pressure."
      },
      {
        year: '1962',
        title: 'Cuban Missile Crisis',
        note: "13-day nuclear standoff after Soviet missiles are discovered in Cuba — the closest the Cold War came to nuclear war. Resolved through secret diplomacy: Soviets remove missiles; U.S. pledges not to invade Cuba."
      },
      {
        year: '1964',
        title: 'Civil Rights Act',
        note: "Landmark legislation banning discrimination based on race, color, religion, sex, or national origin in employment and public accommodations — a cornerstone of the Second Reconstruction."
      },
      {
        year: '1965',
        title: 'Voting Rights Act',
        note: "Prohibits discriminatory voting practices such as literacy tests and provides federal oversight of elections in states with a history of suppression, dramatically increasing Black voter registration."
      },
      {
        year: '1960s',
        title: 'Vietnam War escalates',
        note: "U.S. deepens military involvement through the Gulf of Tonkin Resolution (1964). Over 58,000 Americans die; massive protests at home divide the country and erode public trust in government."
      },
      {
        year: '1973–74',
        title: "Watergate — Nixon resigns",
        note: "Nixon's cover-up of the 1972 Watergate break-in leads to impeachment proceedings. He resigns in August 1974 — the only U.S. president to do so — deepening a national crisis of confidence."
      },
    ]
  },
  {
    id: 'u9',
    label: 'Unit 9 — Post-Cold War & modern era',
    events: [
      {
        year: '1989',
        title: 'Fall of the Berlin Wall',
        note: "The wall separating East and West Berlin falls on November 9, symbolizing the collapse of Soviet power in Eastern Europe. East and West Germany reunify the following year."
      },
      {
        year: '1991',
        title: 'Dissolution of the USSR',
        note: "The Soviet Union officially dissolves on December 25, 1991 — ending the Cold War and leaving the U.S. as the world's sole superpower."
      },
      {
        year: '1994',
        tile: 'NAFTA',
        note: "Free trade agreement between the U.S., Canada, and Mexico that accelerated economic globalization, boosted trade, but also displaced American manufacturing workers."
      },
      {
        year: '2001',
        title: '9/11 attacks — invasion of Afghanistan',
        note: "Al-Qaeda attacks on the World Trade Center and Pentagon kill nearly 3,000 people. The U.S. invades Afghanistan to dismantle al-Qaeda and remove the Taliban, beginning America's longest war."
      },
      {
        year: '2003',
        title: 'Invasion of Iraq',
        note: "The U.S. invades Iraq, claiming Saddam Hussein possesses weapons of mass destruction. No WMDs are found; the war destabilizes the region and divides American public opinion."
      },
      {
        year: '2008',
        title: 'Obama elected & financial crisis',
        note: "Barack Obama becomes the first African American president. The 2008 financial crisis — triggered by the collapse of the housing market and risky mortgage-backed securities — leads to the Great Recession."
      },
    ]
  },
];
