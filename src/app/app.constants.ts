export const siteTitle = 'CHOICE Solar Estimator';
export const siteDescription = `Estimate my solar system
Find out how much a solar system might cost you and what your savings might look like`;
export const ogImageUrl = 'https://choice-solar.azureedge.net/assets/images/solar-estimator-media.png';
export const siteUrl = 'https://www.choice.com.au/solar-estimator';

export const qAndAs = [
  {
    sectionHeader: 'What if my energy use differs from the usage estimates shown in the tool?',
    // tslint:disable-next-line:max-line-length
    sectionBody: `<p>Our energy usage estimates are based on benchmarking data from the <a href="https://www.aer.gov.au/retail-markets/retail-guidelines-reviews/electricity-and-gas-bill-benchmarks-for-residential-customers-2017" target="_blank">Australian Energy Regulator</a>. If your energy use is higher than these estimates, you may consider installing a bigger sized solar system. However, if you use less energy than our estimates there is no economic advantage in installing a solar system less than 4kW in size.</p>`,
    defaultStatus: false,
  },
  {
    sectionHeader: 'Why do I need to enter my postcode and the number of people in my household?',
    // tslint:disable-next-line:max-line-length
    sectionBody: `<p>The geographical location of your house determines how much solar energy you can generate. For example, if you live in Cairns, your solar system will generate more energy each year than if you live in Tasmania. Our savings calculations and pay back times take this into account and assume you use 25% of the solar energy you generate.</p>
<p>The more people who live in your house, the more energy you will use so there are more benefits in investing in a bigger sized solar system. Geographical location and solar system size are the main factors that determine the amount of savings and length of payback times.</p>`,
    defaultStatus: false,
  },
  {
    sectionHeader: 'How does SolarQuotes vet solar installers?',
    // tslint:disable-next-line:max-line-length
    sectionBody: `<p>SolarQuotes works independently from CHOICE, and vets its own network of installers. Their due diligence includes scrutinising the legitimacy of each business, the validity of their electrical contractor’s licence and checking they have no Enforceable Undertakings with the Clean Energy Regulator.</p>`,
    defaultStatus: false,
  }
];
