import Image from "next/image";
import Header from "./Components/Header";
import StatBar from "./Components/StatBar";
import LeadTable from "./Components/LeadTable";

export default function Home() {
  return (
    <section>
      <div className="bg-black min-h-screen">
        <Header></Header>
        <StatBar></StatBar>
        <LeadTable></LeadTable>
      </div>
    </section>
  );
}
