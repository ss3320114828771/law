import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Advocate Hafiz Sajid Hussain",
  description:
    "Learn about Advocate Hafiz Sajid Hussain – experienced lawyer in Lahore specializing in civil, criminal, family, corporate, and constitutional law.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Advocate Hafiz Sajid Hussain
        </h1>

        <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6">
          <p>
            Advocate Hafiz Sajid Hussain ایک تجربہ کار وکیل ، پنجاب میں مقیم ہیں۔ 
            وہ سول، کریمنل، فیملی، پراپرٹی، کارپوریٹ اور آئینی مقدمات میں مہارت رکھتے ہیں۔
          </p>

          <p>
            پنجاب بار کونسل سے رجسٹرڈ اور لاہور ہائی کورٹ سمیت مختلف عدالتوں میں پریکٹس کرتے ہیں۔
          </p>

          {/* اگر آپ Image استعمال کرنا چاہتے ہیں تو یہاں شامل کریں */}
          {/* <div className="my-10">
            <Image
              src="https://img.freepik.com/...your-image.jpg"
              alt="Advocate Hafiz Sajid Hussain"
              width={600}
              height={400}
              className="rounded-xl shadow-xl mx-auto"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}