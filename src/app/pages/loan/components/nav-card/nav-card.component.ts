import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataCardsComponent } from "../data-cards/data-cards.component";

@Component({
    selector: 'app-nav-card',
    templateUrl: './nav-card.component.html',
    styleUrls: ['./nav-card.component.scss'],
    standalone: true,
    imports: [CommonModule, DataCardsComponent]
})
export class NavCardComponent {
  activeLink: string = 'About card';
  listItems = [
    {
      image: '../assets/images/money.svg',
      title: 'Up to 50 000 ₽',
      subtitle: 'Cash and transfers without commission and percent',
    },
    {
      image: '../assets/images/calendar.svg',
      title: 'Up to 160 days',
      subtitle: 'Without percent on the loan',
    },
    {
      image: '../assets/images/clock.svg',
      title: 'Free delivery',
      subtitle:
        'We will deliver your card by courier at a convenient place and time for you',
    },
    {
      image: '../assets/images/bag.svg',
      title: 'Up to 12 months',
      subtitle:
        'No percent. For equipment, clothes and other purchases in installments',
    },
    {
      image: '../assets/images/creditCard.svg',
      title: 'Convenient deposit and withdrawal',
      subtitle:
        'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    },
  ];

  listItems2 = [
    {
      title: 'For food delivery, cafes and restaurants',
      subtitle: '5%',
    },
    {
      title: 'In supermarkets with our subscription',
      subtitle: '5%',
    },
    {
      title: "In clothing stores and children's goods",
      subtitle: '2%',
    },
    {
      title: 'Other purchases and payment of services and fines',
      subtitle: '1%',
    },
    {
      title: 'Shopping in online stores',
      subtitle: 'up to 3%',
    },
    {
      title: 'Purchases from our partners',
      subtitle: '30%',
    },
  ];

  FAQList = [
    {
      title: 'Issuing and receiving a card',
      info: 'We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.',
    },
    {
      title:
        'What documents are needed and how old should one be to get a card?',
      info: 'Need a passport. You must be between 20 and 70 years old.',
    },
    {
      title: 'In what currency can I issue a card?',
      info: 'In rubles, dollars or euro',
    },
    {
      title: 'How much income do I need to get a credit card?',
      info: 'To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.',
    },
    {
      title: "How do I find out about the bank's decision on my application?",
      info: 'After registration, you will receive an e-mail with a decision on your application.',
    },
  ];

  FAQList2 = [
    {
      title: 'What is an interest free credit card?',
      info: 'A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.',
    },
    {
      title: 'How to activate a credit card',
      info: 'You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.',
    },
    {
      title: 'What is a settlement date?',
      info: 'The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.',
    },
    {
      title: 'What do I need to know about interest rates?',
      info: 'For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.',
    },
  ];

  onClick(link: string) {
    this.activeLink = link;
  }
}
