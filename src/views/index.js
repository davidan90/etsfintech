const Home = () => import(/* webpackChunkName: "Home" */ "./home/Home");
const Contact = () =>
  import(/* webpackChunkName: "Contact" */ "./contact/Contact");
const NotFound = () =>
  import(/* webpackChunkName: "NotFound" */ "./notFound/NotFound");

export { Home, Contact, NotFound };
