import Link from "next/link";

export default function Home() {
  return (
    <div className='space-y-2 mt-10'>
      <h1 className='text-3xl font-bold sm:text-5xl '>Share Your Data</h1>
      <p className='max-w-[600px] text-muted-foreground md:text-xl'>
        Remson makes essay to share your JSON data with others. Simply
        authenticate and upload your data
      </p>
      <Link href='/dashboard'>
        <button className="mt-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded p-3 px-4 font-bold ">
          Get Started
        </button>
      </Link>
    </div>
  );
}
