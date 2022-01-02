export interface EuDashboard {
//export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const UserSites = [
  {
    id: 1,
    name: 'Kent Lab',
    url:'https://kent-nagao-test.oktapreview.com',
    image: 'assets/img/okta-japan-small.png'
  },
  {
    id: 2,
    name: 'CSM Lab',
    url:'https://csm-apac.oktapreview.com/',
    image: 'assets/img/okta_logo_blue_small.png'
  },
  {
    id: 3,
    name: 'Yoshi Lab',
    url:'https://dev-1854044.okta.com/',
    image: 'assets/img/okta_logo_blue_small.png'
  },
  {
    id: 4,
    name: 'DeNA Test Org',
    url:'https://csm-dena.okta.com/app/UserHome',
    image: 'assets/img/okta_logo_blue_small.png'
  }
];


