import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How much can I save with solar panels?",
      answer: "Savings vary based on your energy usage, location, and system size. Most customers see 50-90% reduction in their electricity bills, with payback periods of 5-8 years."
    },
    {
      question: "What's the installation process like?",
      answer: "Our streamlined process includes site assessment, system design, permit acquisition, professional installation, and grid connection. Most residential installations are completed in 1-3 days."
    },
    {
      question: "Do solar panels work in cloudy weather?",
      answer: "Yes, solar panels continue to generate electricity on cloudy days, though at reduced efficiency. Modern panels can produce 20-40% of their rated capacity even in overcast conditions."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide comprehensive warranties: 25 years on solar panels, 10-15 years on inverters, and 5 years on installation workmanship. Extended warranties are also available."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fadeInUp">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">FAQ</h3>
          <p className="text-muted-foreground">Common questions about our solar solutions and services.</p>
        </div>
        
        <div className="max-w-4xl mx-auto fadeInUp stagger-1">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card rounded-lg border border-border px-6"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
