import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "./components/ui/button-group";
import { intro, items } from "./tos_data";
import { useState } from "react";

export default function TermsOfService() {
  const [isVietnamese, setIsVietnamese] = useState(true);
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <h2 className="text-2xl text-amber-100 text-center">
        {isVietnamese ? "Điều Khoản Dịch Vụ" : "Terms Of Service"}
      </h2>
      <ButtonGroup>
        <Button
          variant={isVietnamese ? "default" : "outline"}
          onClick={() => setIsVietnamese(true)}
        >
          Vietnamese
        </Button>
        <Button
          variant={!isVietnamese ? "default" : "outline"}
          onClick={() => setIsVietnamese(false)}
        >
          International
        </Button>
      </ButtonGroup>
      <div className="flex flex-col gap-4 max-w-3xl">
        {intro[isVietnamese ? "vietnamese" : "english"]}
      </div>
      <Accordion type="multiple" className="max-w-3xl w-full" defaultValue={[]}>
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>
              {item.trigger[isVietnamese ? "vietnamese" : "english"]}
            </AccordionTrigger>
            <AccordionContent>
              {item.content[isVietnamese ? "vietnamese" : "english"]}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
