export interface AdminDashboard {
//export interface Product {
  id: number;
  name: string;
  url: string;
  image: string;
}

export const AdminSites = [
  {
    id: 1,
    name: 'Kent Lab',
    url:'https://kent-nagao-test-admin.oktapreview.com',
    image: 'assets/img/okta-japan-small.png'
  },
  {
    id: 2,
    name: 'CSM Lab',
    url:'https://csm-apac-admin.oktapreview.com/',
    image: 'assets/img/okta_logo_blue_small.png'
  },
  {
    id: 3,
    name: 'Yoshi Lab',
    url:'https://dev-1854044-admin.okta.com/',
    image: 'assets/img/okta_logo_blue_small.png'
  },
  {
    id: 4,
    name: 'DeNA Test Org',
    url:'https://csm-dena-admin.okta.com/admin/dashboard/',
    image: 'assets/img/okta_logo_blue_small.png'
  },
  {
    id: 5,
    name: 'JFE Test Admin',
    url:'https://jfe-eng-sub-admin.oktapreview.com/admin/dashboard/',
    image: 'assets/img/okta_logo_blue_small.png'
  },
  {
    id: '6',
    name: 'Auth0 Org',
    url: 'https://manage.auth0.com/dashboard/jp/kent-nagao/',
    image: 'assets/img/okta_logo_blue_small.png'
  }

];


