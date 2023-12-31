"use client";
import { appPicType } from "@/types/appPic.type";
import { CldImage } from "next-cloudinary";

export default async function Banner({ banners }: { banners: appPicType[] }) {
  return (
    <div
      className="min-h-full"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dmywzd0yw/image/upload/v1703789411/ktyjoemn9ppwoawhvmxu.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {banners?.length &&
        banners?.map((banner: appPicType) => (
          <nav
            key={banner._id}
            className="grid md:grid-cols-3 md:py-32 py-20 px-8 xl:container m-auto"
          >
            <div className="col-span-1">
              <h1 className="text-5xl font-bold" style={{ lineHeight: "60px" }}>
                {banner?.title}
              </h1>
              <p className="mt-12 text-gray-200" style={{ lineHeight: "33px" }}>
                {banner?.description}
              </p>
            </div>
            <div className="col-span-2 md:mt-0 mt-20">
              <CldImage
                width="1000"
                height="1000"
                src={String(banner?.image)}
                sizes="100vw"
                alt="Description of my image"
              />
            </div>
          </nav>
        ))}
    </div>
  );
}
