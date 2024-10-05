import { getDictionary } from "@/dictionary/dictionary";

const Home = async () => {
  const pagedata = await getDictionary();
  console.log(pagedata)
  return <div className="container section text-3xl">
    <h1>{pagedata.homePage.heroSection.title}</h1>
    <p>{pagedata.homePage.heroSection.subtitle}</p>
  </div>;
};

export default Home;
