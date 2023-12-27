"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { revalidateTag } from "next/cache";
import { CldUploadButton } from "next-cloudinary";

export default function ImageUpload({ id }: { id: string }) {
  const router = useRouter();

  const handleUpload = useCallback(async (result: any) => {
    console.log(result);

    const data = {
      scureId: result?.info?.secure_url,
      type: 0,
    };
    if (result?.event === "success") {
      const response = await fetch(`/api/upload/car/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/");
        toast.success("آپلود عکس با موفقیت انجام شد");
       // revalidateTag("cars");
      }
    }
  }, []);

  return (
    <div className="min-w-full mx-auto col-span-3 mt-12">
      <h1 className="text-2xl text-center">آپلود عکس خودرو</h1>
      <div>
        <CldUploadButton
          options={{ maxFiles: 1 }}
          onUpload={handleUpload}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET}
        ></CldUploadButton>
      </div>
    </div>
  );
}
