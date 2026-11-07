import Banner from "./components/home/Banner";
import SummaryCards from "./components/home/SummaryCards";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <Banner />
      <SummaryCards />
    </div>
  );
}