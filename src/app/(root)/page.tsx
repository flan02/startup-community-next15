// We see the changes instantly in the browser thanks to the fast refresh feature of Next.js. HMR (Hot Module Replacement)

import ClientAlbums from "@/components/ClientAlbums";

import Hello from "@/components/hello";
import ServerAlbums from "@/components/ServerAlbums";


// * REVALIDATE
export const revalidate = 3600

// ! Tell Next.js to revalidate the page every the user requested for data 
//export const revalidate = 0

export default async function Home() {
  console.log('What am I? -- SERVER COMPONENT');

  // const serverAlbums = await fetchAlbums();  // * refreshes every 3600 seconds

  return (
    <div className="grid grid-rows-[20px_1fr_20px] space-y-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl text-purple-500">NEXTJS 15</h1>
      <Hello />
      <div className="grid grid-cols-2 h-screen">
        {/*Datafetching with a separate component + useEffect and custom hook*/}
        {/* THIS IS NO VERY EFFICIENT */}
        <ClientAlbums />
        {/* Better Way faster and clear */}
        <ServerAlbums />
      </div>
    </div>

  );
}
