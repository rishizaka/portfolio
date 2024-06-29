import type { Meta, StoryObj } from "@storybook/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./Button";
import Image from "next/image";

const meta = {
  title: "components/ui/Dialog",
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Edit profile</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed bg-[rgb(0,0,0)]/50" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
            <Image
              width={16}
              height={16}
              src="/images/icons/close.svg"
              alt="close"
            />
          </Dialog.Description>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <Button className="IconButton bg-transparent" aria-label="Close">
              {/* <Image
                width={16}
                height={16}
                src="/images/icons/close.svg"
                alt="close"
              /> */}
              X
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
