export interface FaqPageData {
  title: string,
  description: Array<string>
}

export const faqPageData: Array<FaqPageData> = [

  {
    title: 'Integrations',
    description: ['What programming languages do you support?', 'Can I integrate with my Android/IOS mobile app?', 'Can I still install your plugins if my business is run on an eCommerce platform?']
  },
  {
    title: 'Payments',
    description: ['How do I process payments from your platform?', 'Do you have any test credentials/cards for staging the integration?', 'Can I simulate a failed payment in your staging environment?']
  },
  {
    title: '3D Secure 2',
    description: ['What is SCA?', 'How difficult is it to implement SCA?', 'When can SCA be exempted?', 'What is 3DS2?', 'When does a liability shift occur?']
  },
  {
    title: 'Backoffice',
    description: ['Why do I get “Void is not supported”?', 'Why do I get “refund not allowed”?', 'What is the difference between void and refund?']
  },
  {
    title: 'Webhooks',
    description: ['What is a webhook notification?', 'What is the difference between Callback notification and Transaction Status?', 'What are different types of events supported by webhooks?']
  },
  {
    title: 'Going Live',
    description: ['What do I need to check before going live with the new integration?', 'I have finalized the integration now how do I move to production?', 'Do the test cards work in the production environment?']
  },
  {
    title: 'Portal',
    description: ['Where do I find my User ID and password?', 'Where do I enter User ID and password to the Merchant Portal?', 'How do I check if a customer’s payment has been declined?']
  },
  {
    title: 'PCI Compliance',
    description: ['Do I need to be PCI compliant in order to process payments?', 'How do I get PCI Compliant?', 'What PCI form is needed for server to server payments?'],
  },
  {
    title: 'Subscription',
    description: ['How do subscriptions work?', 'How can I create a plan for a subscription?', 'How can I create a subscription?',]
  },
];
