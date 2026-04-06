import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white flex flex-col items-center justify-center text-center min-h-screen">
      <h1 className=" text-5xl md:hover:text-8xl md:text-7xl font-bold mb-8 tracking-wide transition-all duration-200">
        Learning Dashboard
      </h1>

      <div className="font-semibold flex flex-col gap-4 text-2xl md:text-3xl ">

        <Link href="/dashboard" className="hover:text-gray-300 transition">
          Dashboard
        </Link>

        <Link href="/courses" className="hover:text-gray-300 transition">
          Courses
        </Link>

      </div>
    </div>
  );
}
