import * as Accordion from "@radix-ui/react-accordion";

export default () => (
  <Accordion.Root type="single">
    <Accordion.Item value="item-1">
      <Accordion.Header>
        <Accordion.Trigger />
      </Accordion.Header>
      <Accordion.Content />
    </Accordion.Item>
  </Accordion.Root>
);
