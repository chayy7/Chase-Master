import { ServicesSection } from "@/components/home/ServicesSection";

export const metadata = {
  title: "Services | ChaseMaster",
  description: "Premium career services including ATS Resume Making, Portfolio Building, Placement Assistance, and more.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-10">
        <ServicesSection />
      </div>
    </div>
  );
}
