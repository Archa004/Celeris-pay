export interface HomePageData {
    icon: string;
    title: string;
    description: string;
    routing: string;
  }
  
  export const homePageData: Array<HomePageData> = [
    {
      routing: '/payment',
      icon: 'fa-sitemap',
      title: 'Payment API',
      description:
        'Partner PSPs can use this API to send a payment Transaction to be processed by our payment gateway',
    },
    {
      routing: '/integration',
      icon: 'fa-cubes',
      title: 'Integrations',
      description:
        'We support all major programming languages and frameworks. Find the suitable Plugins and Wrappers here',
    },
    {
      routing: '/secure',
      icon: 'fa-shield',
      title: '3D Secure',
      description:
        'The newest version of 3DS, namely 3DS2 offers an improved overall checkout experience',
    },
    {
      routing: '/subscription',
      icon: 'fa-calendar-check-o',
      title: 'Subscription API',
      description:
        'Partner PSPs can use this API to send a recurring payment transaction to be processed by our payment gateway',
    },
    {
      routing: '/faq',
      icon: 'fa-question-circle',
      title: 'FAQ',
      description:
        "Frequently asked questions and their answers regarding our API's",
    },
    {
      routing: '/testing',
      icon: 'fa-tags',
      title: 'Testing',
      description:
        'A complete and comprehensive list of all testing cards Response codes with their description',
    },
  ];
  