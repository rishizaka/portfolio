import type { Meta, StoryObj } from "@storybook/react";
import * as Accordion from "@radix-ui/react-accordion";

const meta = {
  title: "components/ui/Accordion",
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion.Root
      type="single"
      defaultValue="item-1"
      collapsible
      className="AccordionRoot"
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger className="AccordionTrigger">
            Is it accessible?
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div className="AccordionContentText">
            Yes. It adheres to the WAI-ARIA design pattern.
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger className="AccordionTrigger">
            Is it unstyled?
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <div className="AccordionContentText">
            Yes. It's unstyled by default, giving you freedom over the look and
            feel.
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};
