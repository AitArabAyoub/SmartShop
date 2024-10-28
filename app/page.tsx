import { Banner } from "./_components/Banner";
import Categories from "./_components/Categories";
import Header from "./_components/Header";
import TopProds from "./_components/TopProds";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <TopProds/>
      <Categories/>
    </div>
  );
}
