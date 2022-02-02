// import Link from 'next/link';
// const About = props => {
//  return (
//  <div>
//  <Link href="/">
//  <a>Home</a>
//  </Link>
//  <h1>About Next.js</h1>
//  <p>Next.js - Server-side rendering for React.</p>
//  </div>
//  )
// }
// export default About;

//Nav

import Nav from './Nav';
const About = props => {
 return (
 <div>
 <Nav />
 <h1>About Next.js</h1>
 <p>Next.js - Server-side rendering for React.</p>
 </div>
 )
}
export default About;