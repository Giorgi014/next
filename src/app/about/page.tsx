// export const metaData = {
//   title: "About Codevolution",
// };

// export default function About() {
//   return <h1>About me</h1>;
// }
import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("about me");
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
