import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-center pt-16 pb-8 items-center gap-12 bg-[url('/images/top-background.jpg')] bg-cover bg-center text-white">
        <h1 className="text-5xl w-[300px] flex flex-col gap-3 font-bold">
          <span className="block">This is </span>
          <span className="flex justify-center">
            <span>WEB SITE</span>
          </span>
          <span className="flex justify-end">
            <span>of Ishizaka</span>
          </span>
        </h1>
        <Button asChild className="rounded-full">
          <Link href="#" className=" w-[180px] font-bold rounded-full">
            career
          </Link>
        </Button>
      </div>

      <div className="bg-green-500 py-10 flex flex-col items-center font-semibold">
        <h2 className="text-xl w-max">私はどんな人か</h2>
        <p>
          私は一体どんな人か？趣味や経歴から私を知ってください。趣味や普段の生活は”ゆるく”がモットーです。趣味は仕事にしないからこそ良き趣味であると思います。もちろんプログラミングを休みの日に行うこともありますが、それはやはり仕事としての側面を完全に取り去ることはできません。ひとときも仕事のことを考えないような私の趣味はなんでしょう。
        </p>
        <div>
          <div>
            <h3>趣味</h3>
          </div>
          <div>
            <h3>経歴</h3>
          </div>
        </div>
      </div>

      <div className="bg-green-500 py-10 flex flex-col items-center font-semibold">
        <h2 className="text-xl w-max">仕事について</h2>
        <div>
          <div>
            <h3>趣味</h3>
          </div>
          <div>
            <h3>経歴</h3>
          </div>
        </div>
      </div>

      <div className="bg-green-500 py-10 flex flex-col items-center font-semibold">
        <h2 className="text-xl w-max">制作物</h2>
        <div>
          <div>
            <h3>ボタン</h3>
          </div>
          <div>
            <h3>カーセル</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
