import { getCars } from "@/actions/car";
import Slider from "@/components/Slider";

export const revalidate = 60 * 60;

export default async function Newest() {
  const cars = await getCars("");
  return (
    <section className="md:px-8 px-3 xl:container m-auto my-32">
      {cars?.length && <Slider cars={cars} from={0} to={4} />}
    </section>
  );
}
