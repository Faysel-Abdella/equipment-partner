import Image from "next/image";
import { BusinessInfo } from "@/types/businessInfoType";
import { useRouter } from "next/navigation";

const businesses: BusinessInfo[] = [
  {
    businessName: "사업자명/개인이름",
    imageSrc: "/assets/images/cino.svg",
    dailyIncome: "일 60만원",
    monthlyIncome: "월 1,200만원",
    locations: ["경기 수원시", "경기 수원시", "경기 수원시"],
    services: ["임대 (장비+기사)", "임대 (장비+기사)", "임대 (장비+기사)"],
  },
  {
    businessName: "사업자명/개인이름",
    imageSrc: "/assets/images/truck.svg",
    dailyIncome: "일 60만원",
    monthlyIncome: "월 1,200만원",
    locations: ["경기 수원시", "경기 수원시", "경기 수원시"],
    services: ["임대 (장비+기사)", "임대 (장비+기사)", "임대 (장비+기사)"],
  },
  {
    businessName: "사업자명/개인이름",
    imageSrc: "/assets/images/truck2.svg",
    dailyIncome: "일 60만원",
    monthlyIncome: "월 1,200만원",
    locations: ["경기 수원시", "경기 수원시", "경기 수원시"],
    services: ["임대 (장비+기사)", "임대 (장비+기사)", "임대 (장비+기사)"],
  },
];

const Separator = () => (
  <Image src="/assets/icons/dot.svg" alt="dot icon" width={4} height={18} />
);

// const BusinessCard = ({ business }: { business: BusinessInfo }) => (
//   <div className="flex h-[90px] gap-[10px] px-[16px] mb-4 w-full">
//     {/* Image */}
//     <div className="!w-[90px] !h-[90px]">
//       <Image
//         src={business.imageSrc}
//         alt={business.businessName}
//         width={90}
//         height={90}
//         className="rounded-[12px] object-cover  !min-w-[90px] !min-h-[90px]"
//       />
//     </div>

//     {/* Business Details */}
//     <div className="space-y-[4px] text-[9px] xs:text-[11px] md:text-[13px] text-grey-font-light font-pretendardRegular">
//       {/* Business Name */}
//       <p className="text-start text-[16px] font-PretendardBold text-grey-font">
//         {business.businessName}
//       </p>

//       {/* Daily and Monthly Income */}
//       <div className="flex items-center gap-[2px]">
//         <Image
//           src="/assets/icons/ic1.svg"
//           alt="income icon"
//           width={15}
//           height={15}
//         />
//         <p className="text-[11.5px]">
//           {" "}
//           {business.dailyIncome.toLocaleString()}
//         </p>
//         <Separator />
//         <p className="text-[11.5px]">
//           {business.monthlyIncome.toLocaleString()}
//         </p>
//       </div>

//       {/* Locations */}
//       <div className="flex items-center gap-[2px]">
//         <Image
//           src="/assets/icons/location.svg"
//           alt="location icon"
//           width={15}
//           height={15}
//         />
//         {business.locations.map((location, index) => (
//           <span key={index} className="flex items-center">
//             <p className="text-[11.5px]">{location}</p>
//             {index < business.locations.length - 1 && <Separator />}
//           </span>
//         ))}
//       </div>

//       {/* Services */}
//       <div className="flex items-center  gap-[2px] !w-[260px] overflow-hidden whitespace-nowrap">
//         <Image
//           src="/assets/icons/setting.svg"
//           alt="services icon"
//           width={15}
//           height={15}
//         />
//         {business.services.map((service, index) => (
//           <span key={index} className="flex items-center">
//             <p className="text-[11.5px]">{service}</p>
//             {index < business.services.length - 1 && <Separator />}
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>
// );

const BusinessSearchCard = ({ business }: { business: BusinessInfo }) => (
  <div className="flex h-[90px] gap-[10px] mb-4 w-full">
    {/* Image */}
    <div className="flex-shrink-0 w-[90px] h-[90px]">
      <Image
        src={business.imageSrc}
        alt={business.businessName}
        width={90}
        height={90}
        className="rounded-[12px] object-cover min-w-[90px] min-h-[90px]"
      />
    </div>

    {/* Business Details */}
    <div className="flex-1 space-y-[4px] text-[9px] xs:text-[11px] md:text-[13px] text-grey-font-light font-pretendardRegular">
      {/* Business Name */}
      <p className="text-start text-[16px] font-PretendardBold text-grey-font">
        {business.businessName}
      </p>

      {/* Daily and Monthly Income */}
      <div className="flex items-center gap-[2px]">
        <Image
          src="/assets/icons/ic1.svg"
          alt="income icon"
          width={15}
          height={15}
        />
        <p className="text-[11.5px]">{business.dailyIncome.toLocaleString()}</p>
        <Separator />
        <p className="text-[11.5px]">{business.monthlyIncome.toLocaleString()}</p>
      </div>

      {/* Locations */}
      <div className="flex items-center gap-[2px]">
        <Image
          src="/assets/icons/location.svg"
          alt="location icon"
          width={15}
          height={15}
        />
        {business.locations.map((location, index) => (
          <span key={index} className="flex items-center">
            <p className="text-[11.5px]">{location}</p>
            {index < business.locations.length - 1 && <Separator />}
          </span>
        ))}
      </div>

      {/* Services */}
      <div className="flex items-center gap-[2px] overflow-hidden whitespace-nowrap text-ellipsis">
        <Image
          src="/assets/icons/setting.svg"
          alt="services icon"
          width={15}
          height={15}
        />
        {business.services.map((service, index) => (
          <span key={index} className="flex items-center">
            <p className="text-[11.5px]">{service}</p>
            {index < business.services.length - 1 && <Separator />}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BusinessList = () => {
  const router = useRouter();
  return (
    <div className="space-y-[20px] w-full flex flex-col px-4">
      {businesses.map((business, index) => (
        <button
          key={index}
          className="space-y-[20px] w-full"
          onClick={() => {
            router.push("/home/item-detail");
          }}
        >
          <BusinessSearchCard business={business} />
          {/* Add a div except for the last business */}
          {index < businesses.length - 1 && (
            <div className="h-[1px] w-full bg-grey-light"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default BusinessList;

export const BusinessSearchList = () => {
  const router = useRouter();
  return (
    <div className="space-y-[20px] w-full flex flex-col px-4">
      {businesses.map((business, index) => (
        <button
          key={index}
          className="space-y-[20px]"
          onClick={() => {
            router.push("/home/item-detail");
          }}
        >
          <BusinessSearchCard business={business} />
          {/* Add a div except for the last business */}
          {index < businesses.length - 1 && (
            <div className="h-[1px] bg-grey-light"></div>
          )}
        </button>
      ))}
    </div>
  );
};
