import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/home/Footer";

import PatientOverview from "../../components/dashboard/PatientOverview";
import DoctorOverview from "../../components/dashboard/DoctorOverview";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 px-6 pt-32">

        <div className="mx-auto max-w-7xl">

          <PatientOverview />

          <DoctorOverview />

        </div>

      </main>

      <Footer />
    </>
  );
}