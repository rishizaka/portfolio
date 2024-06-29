import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import CarouselReactSlick from "@/components/ui/CarouselReactSlick";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-center pt-16 pb-8 items-center gap-12 bg-[url('/images/banner-flower.jpg')] bg-cover bg-center text-white">
        <h1 className="text-5xl w-[300px] flex flex-col gap-3 font-bold">
          <span className="block">This is </span>
          <span className="flex justify-center">
            <span>WEB SITE</span>
          </span>
          <span className="flex justify-end">
            <span>of Ishizaka</span>
          </span>
        </h1>
        <Button asChild className="rounded-full bg-black">
          <Link href="#" className="w-[180px] font-bold rounded-full">
            works
          </Link>
        </Button>
      </div>

      <div className="py-10 flex flex-col items-center font-semibold gap-6 px-4">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-xl w-max">私はどんな人か</h2>
          <p className="text-sm font-medium leading-6">
            趣味や普段の生活は”ゆるく”がモットーです。趣味は仕事にしないからこそ良き趣味であると思います。日々の疲れを癒してくれる、そんな私の趣味とは一体どのようなものなのでしょうか。
          </p>
        </div>
        <div className="flex w-full gap-2">
          <Button
            variant="link"
            asChild
            className="flex-1 w-full flex flex-col gap-2 items-center py-2 border border-navy text-black bg-white hover:bg-[#B4CDD8] shadow-md"
          >
            <Link href="/works/" className="">
              <h3 className="w-fit">制作物</h3>
              <div className="w-full h-[100px] relative">
                <Image src="/images/hobby.svg" fill alt="" />
              </div>
            </Link>
          </Button>
          <Button
            variant="link"
            asChild
            className="flex-1 w-full flex flex-col gap-2 items-center py-2 border border-navy text-black bg-white hover:bg-[#B4CDD8] shadow-md"
          >
            <Link href="#" className="">
              <h3 className="w-fit">経歴</h3>
              <div className="w-full h-[100px] relative">
                <Image src="/images/work.svg" fill alt="" />
              </div>
            </Link>
          </Button>
        </div>
      </div>

      <div className="py-10 flex flex-col items-center font-semibold gap-4">
        <h2 className="text-xl w-max">スキルセット</h2>
        <div className="flex flex-col w-full px-4">
          <Skill language="HTML/CSS" href="/images/html-css.jpg" />
          <Skill language="TypeScript" href="/images/ts.jpg" />
          <Skill language="React/Next.js" href="/images/react.jpg" />
          <Skill language="Laravel" href="/images/laravel.jpg" />
          <Skill language="MySql" href="/images/mysql.jpg" />
          <Skill language="Git" href="/images/git.jpg" />
          <Skill
            language="figma"
            href="/images/figma.jpg"
            className="border-none"
          />
        </div>
      </div>

      <div className="py-10 flex flex-col items-center font-semibold gap-4 px-4">
        <h2 className="text-2xl w-max">ラーメン画像</h2>
        <p className="text-sm leading-6">
          食べてきたラーメンの画像集。特段ラーメン好きではないのですが、気づけば画像が溜まっていました。
        </p>
        <div>
          <div className="w-[300px]">
            <CarouselReactSlick images={images} />
          </div>
        </div>
      </div>
    </main>
  );
}

const images = [
  "/images/ramen01.jpg",
  "/images/ramen02.jpg",
  "/images/ramen03.jpg",
  "/images/ramen04.jpg",
  "/images/ramen05.jpg",
  "/images/ramen06.jpg",
];

interface SkillProps extends React.HTMLAttributes<HTMLDivElement> {
  language: string;
  href: string;
}
const Skill = ({ language, href, className = "" }: SkillProps) => {
  return (
    <div
      className={cn(
        "flex py-4 border-b border-[#B4CDD8] w-full gap-4",
        className ?? ""
      )}
    >
      <div className="h-[100px] w-[100px] relative">
        <Image
          src={href}
          fill
          alt=""
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h3 className="font-bold text-base">{language}</h3>
        <p className="text-xs leading-5 whitespace-pre-wrap">{htmlText}</p>
      </div>
    </div>
  );
};

const htmlText = `HTMLのタグを正しく使うことを意識しています。アクセシビリティにもSEOに影響してくるので侮ってはいけない!\nCSSは探せば探すほど便利なプロパティが出てくるので日々精進。Tailwindメインをメインに使用しています。`;
