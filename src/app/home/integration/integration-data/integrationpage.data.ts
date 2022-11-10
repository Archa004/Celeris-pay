export interface IntegrationPageData {
    image: string;
    title: string;
    description: string;
    
  }
  
  export const integrationPageData: Array<IntegrationPageData> = [
    {image:"../assets/images/c-1.png",
        title: 'Payment API',
        description:
          'Partner PSPs can use this API to send a payment Transaction to be processed by our payment gateway',
      },
  ]