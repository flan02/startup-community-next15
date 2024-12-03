// We see the changes instantly in the browser thanks to the fast refresh feature of Next.js. HMR (Hot Module Replacement)

import Hello from "@/components/hello";

export default function Home() {
  console.log('What am I? -- SERVER COMPONENT');
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl text-purple-500">NEXTJS 15</h1>
        <Hello />
      </div>
    </>
  );
}
