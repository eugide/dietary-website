import FistSection from "./FistSection";
import SectionCard from "./SectionCard";

function Section() {
  return (
    <>
      <div className="w-1/2 mx-auto my-6 text-center">
        <h1 className="text-3xl">Pricing</h1>
        <p className="italic">
          Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Eu
          tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras
          semper auctor neque vitae tempus quam.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 w-1/2 my-6 mx-auto gap-10">

        <SectionCard
              name="Jumpstart Plan"
              mont="$39/mont"
              perfect="Perfect for get started on their nutrition journey velit velit"
              online=" Online Consultation"
              daily=" Daily meal tracking"
              weekly=" Weekly meal tracking"
              strategy=" Strategy to more healthy"
              weight=" Weight Assessment"
            />

<SectionCard
              name="Daily Plan"
              mont="$149/mont"
              perfect="Perfect for achieve their health and in voluptate velit"
              online=" Online Consultation"
              daily=" Daily meal tracking"
              weekly=" Weekly meal tracking"
              strategy=" Strategy to more healthy"
              weight=" Weight Assessment"
            />
            <SectionCard
              name="Transfor Plan"
              mont="$59/mont"
              perfect="Duis aute irure dolor in reprehenderit wellness goals"
              online=" Online Consultation"
              daily=" Daily meal tracking"
              weekly=" Weekly meal tracking"
              strategy=" Strategy to more healthy"
              weight=" Weight Assessment"
            />


        </div>
      </div>
      <FistSection />
    </>
  );
}

export default Section;
