import Image from "next/image";
import { BankDetails } from "@/src/components/BankDetails";

export default function Home() {
  return (
    <div className="bg-[#3E0000]">
      <Image 
        priority
        src="/image.png"
        alt="5 Mission Points (Education, Medical Cases, Funerals, Ration Funding & Animal Rights)"
        className="object-cover rounded-full mx-auto"
        width={150}
        height={150}
        />

      <BankDetails />


      <Image 
        priority
        src="/FiveMissionPoints.png"
        alt="5 Mission Points (Education, Medical Cases, Funerals, Ration Funding & Animal Rights)"
        className="object-cover mx-auto"
        width={500}
        height={500}
      />

    </div>
  );
}
