import type { Meta, StoryObj } from "@storybook/react";
import CarouselReactSlick from "./CarouselReactSlick";
import Image from "next/image";

const meta = {
  component: CarouselReactSlick,
  tags: ["autodocs"],
} satisfies Meta<typeof CarouselReactSlick>;

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  "/images/html-css.jpg",
  "/images/ts.jpg",
  "/images/react.jpg",
  "/images/laravel.jpg",
  "/images/mysql.jpg",
  "/images/git.jpg",
];

const prevIcon = (
  <Image
    src="/images/icons/caret-right.svg"
    alt=""
    width={30}
    height={30}
    className="rounded-md 10px"
  />
);
const nextIcon = (
  <Image
    src="/images/icons/caret-right.svg"
    alt=""
    width={30}
    height={30}
    className="rounded-md 10px"
  />
);

export const Default: Story = {
  args: {
    images: images,
  },
};

export const ArrowIcons: Story = {
  args: {
    images: images,
    prevIcon: prevIcon,
    nextIcon: nextIcon,
  },
};

export const NotLoop: Story = {
  args: {
    images: images,
    infinite: false,
  },
};
