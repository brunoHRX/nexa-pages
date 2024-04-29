import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Link from "next/link"

const words = [
  {
    text: "Seja",
  },
  {
    text: "Visto,",
  },
  {
    text: "Seja",
  },
  {
    text: "nexa",
    className: "text-huge"
  },
];

export default function Home() {
  return (

    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center h-[40rem] mb-10  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-base">
        Destaque-se em um mundo competitivo
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4  ">
          <Link href="/signup" passHref>
            <div className="w-40 h-11 text-center px-8 py-2 rounded-md font-bold bg-black border dark:border-white border-transparent text-white ">
              Acesse
            </div>
          </Link> 
          <Link href="/signup" passHref>
            <div className="px-8 py-2 rounded-md bg-nexa_lime text-white font-bold transition duration-200 hover:bg-nexa_white hover:text-black border-2 border-transparent hover:border-nexa_lime">
              Cadastre-se
            </div>
          </Link>
        </div>
      </div>  
    </div>
  );
}
