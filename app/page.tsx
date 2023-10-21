import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import { ArrowBigLeft, ArrowBigRight, ArrowRightFromLineIcon, CheckCircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const features = [
  "No hiring headaches",
  "Weekly turnaround times",
  "One flat monthly rate",
];

const images = [
  "/combinator.png",
  "/a16z.svg",
  "/accel.svg",
  "/sequoia.svg",
];

const steps = [
  {
    img: "/arrow.svg",
    title: "Costs 70% less",
    desc: "We developed highly-optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you"
  },
  {
    img: "/rectangle.svg",
    title: "Adaptable and scalable",
    desc: "High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters"
  },
  {
    img: "/reload.svg",
    title: "Fast turnaround times",
    desc: "TDP was built for flexibility—we quickly adapt and grow as you grow"
  },
];

const howWorks = [
  {
    title: "Sign up for one of our services",
    img: "/hair.png",
    desc: "Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs.",
    width: 96,
    height: 162,
  },
  {
    title: "Meet your perfect match",
    img: "/laptop.png",
    desc: "We match you with the best TDP design expert for your needs. Then we schedule a call to learn about your startup.",
    width: 138,
    height: 152,
  },
  {
    title: "The first sprint begins (hold on tight)",
    img: "/hood.png",
    desc: "TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations.",
    width: 108,
    height: 156,
  },
];

const plans = [
  {
    title: "Essential",
    desc: "Great for basic UI/UX design needs",
    priceMonth: "$2,600",
    priceQuarter: "$5,000",
    priceYear: "$7,000",
    included: [
      "UI execution",
      "Connect on Slack",
      "One 30 minute meeting a week",
    ],
    designTeam: [
      "1 designer working with 4-5 other customers at the same time",
    ],
  },
  {
    title: "pro",
    desc: "Great for end-to-end product design",
    priceMonth: "$3,595",
    priceQuarter: "$6,000",
    priceYear: "$8,000",
    included: [
      "Everything in Essential",
      "Full UI/UX design and research",
      "Dev ready Figma files",
      "One 1 hour meeting a week",
    ],
    designTeam: [
      "1 design lead",
      "1 designer working with 4-5 other customers at the same time",
    ],
  },
  {
    title: "turbo",
    desc: "Great for products that require more design horsepower and tight timelines",
    priceMonth: "$2,600",
    priceQuarter: "$5,000",
    priceYear: "$7,000",
    included: [
      "Everything in Essential and Pro",
      "User Testing",
      "Figma Prototypes",
      "Flexible meetings",
      "Custom workflows to speed up delivery",
    ],
    designTeam: [
      "1 design lead",
      "1 designer working with 4-5 other customers at the same time",
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-[#E0EAF3] overflow-hidden">
        <Container className="lg:max-w-[65%] max-w-[85%]">
          <div className="flex flex-col items-center">
            <div className="flex items-center flex-col">
              <h1 className="lg:text-[50px] text-4xl font-bold leading-[54.5px] capitalize text-center">
                A UI/UX design subscription so{" "}
                <span className="text-primary">good </span>
                it should come with a{" "}
                <span className="text-primary">warning </span>label
              </h1>
              <ul className="w-full flex items-center justify-around mt-9">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="lg:text-[17px] text-sm text-black font-bold leading-7 flex items-center gap-2"
                  >
                    <CheckCircleIcon color="#F86642" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="rounded-xl mt-[22px]">
                start your risk free trial
              </Button>
            </div>
            <Image
              src="/people.svg"
              width={770}
              height={433}
              alt="Hero image"
              className="-mb-[20px]"
            />
          </div>
        </Container>
      </section>
      <section className="bg-dark py-20">
        <Container className="lg:max-w-[75%] max-w-[85%]">
          <div className="flex flex-col items-center gap-[52px]">
            <h2 className="text-white lg:text-[38px] text-3xl font-bold text-center">We helped our customers raise <span className="text-primary">$1B+</span></h2>
            <ul className="flex items-center justify-center flex-wrap">
              {images.map((image, index) => (
                <li key={index}>
                  <Image
                    src={image}
                    width={250}
                    height={100}
                    alt="Customer image"
                    className={cn("", index === (images.length - 1) || "pr-[26px] lg:border-r border-primary")}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="py-[152px]">
        <Container className="lg:max-w-[77.8%] max-w-[85%]">
          <div className="flex flex-col items-center gap-[23px]">
            <h2 className="lg:text-[40px] text-3xl text-center font-bold capitalize leading-[47px]">A diverse team of <span className="text-primary">passionate</span> UX nerds who are here to help your <span className="text-primary">startup succeed</span></h2>
            <p className="lg:text-base text-sm text-black font-medium leading-6 text-center lg:max-w-[75%]">From ideation to expansion, TDP understands the unique demands of your startup—providing you with optimized design strategies and fast turnarounds for an affordable monthly subscription.</p>
            <ul className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 gap-10">
              {steps.map((step, index) => (
                <li key={index} className="flex flex-col items-center justify-end text-center gap-[23px]">
                  <Image
                    src={step.img}
                    width={150}
                    height={130}
                    alt={step.title}
                  />
                  <div className="flex flex-col gap-[13px]">
                    <h5 className="text-[19px] font-bold text-black leading-5">{step.title}</h5>
                    <p className="text-sm text-black leading-5">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="py-8 pb-[130px]">
        <Container className="lg:max-w-[75%] max-w-[85%]">
          <div className="flex flex-col gap-[69px]">
            <div className="flex flex-col items-center gap-[23px]">
              <h2 className="lg:text-[40px] text-3xl text-center font-bold capitalize leading-[47px]">How <span className="text-primary">signing up</span> with The Design Project <span className="text-primary">works</span>!?</h2>
              <p className="lg:text-base text-sm text-black font-medium leading-6 text-center max-w-[85%]">Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.</p>
            </div>
            <ul className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 items-end gap-[100px]">
              {howWorks.map((howWork, index) => (
                <li key={index} className="flex flex-col items-center gap-[30px]">
                  <div className="w-[59px] h-[59px] flex items-center justify-center text-[#F6F6F6] text-[34px] font-bold leading-10 rounded-full bg-[linear-gradient(180deg,#FF734F_18.18%,#E83C11_100%)]">
                    0{index + 1}
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h5 className="text-xl font-semibold leading-5 capitalize text-primary text-center">{howWork.title}</h5>
                    <Image
                      src={howWork.img}
                      width={howWork.width}
                      height={howWork.height}
                      alt={howWork.title}
                    />
                    <p className="text-sm text-black text-center">{howWork.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-dark pt-[135px] pb-[70px]">
        <Container className="lg:max-w-[75.7%] max-w-[85%]">
          <div className="flex flex-col items-center gap-[55px] text-center">
            <div className="flex flex-col gap-[110px]">
              <h2 className="lg:text-[40px] text-3xl font-bold capitalize leading-[54px] text-white">How <span className="text-primary">accessible</span> UX design is changing the <span className="text-primary">businesses</span> for the better</h2>
              <ul className="flex flex-col gap-[70px]">
                <li>
                  <Image
                    src="/article-1.png"
                    width={1160}
                    height={565}
                    alt="Article 1"
                  />
                </li>
                <li>
                  <Image
                    src="/article-2.png"
                    width={1160}
                    height={565}
                    alt="Article 2"
                  />
                </li>
                <li>
                  <Image
                    src="/article-3.png"
                    width={1160}
                    height={565}
                    alt="Article 3"
                  />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex items-center justify-between">
                <ArrowBigLeft color="white" opacity="0.2" width={70} height={70} className="hidden lg:block cursor-pointer" />
                <h2 className="lg:text-[40px] text-3xl font-bold leading-[48px] text-white lg:max-w-[75%]">TDP helped identify the main pain points and designed a new UX that is accessible and easy to understand. The redesign pushed us forward on our mission to be able to verify 100% of IDs in real-time, and we raised over $100M in funding.</h2>
                <ArrowBigRight color="white" opacity="0.2" width={70} height={70} className="hidden lg:block cursor-pointer" />
              </div>
              <div className="flex flex-col items-center gap-12">
                <div className="flex items-center gap-6">
                  <Image
                    src="/erick.png"
                    width={74}
                    height={74}
                    alt="Erick"
                  />
                  <div className="flex flex-col items-start">
                    <h5 className="text-primary text-2xl font-bold leading-6">Erick Desoto</h5>
                    <p className="leading-5 text-base text-white">VP of Product at Socure</p>
                  </div>
                </div>
                <Button>see our case studies</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-[150px] pb-[158px]">
        <Container className="lg:max-w-[81.7%] max-w-[85%]">
          <div>
            <Tabs defaultValue="month" className="flex flex-col gap-[116px] items-center">
              <TabsList className="grid grid-cols-3 grid-rows-1 w-[250px]">
                <TabsTrigger value="month" className="pt-[15px] pb-4 px-[21px] border border-primary rounded-s-xl font-bold leading-4 hover:bg-black hover:border-black hover:text-white">Monthly</TabsTrigger>
                <TabsTrigger value="quarter" className="pt-[15px] pb-4 px-[21px] border border-primary font-bold leading-4 hover:bg-black hover:border-black hover:text-white">Quarterly</TabsTrigger>
                <TabsTrigger value="year" className="pt-[15px] pb-4 px-[21px] border border-primary rounded-e-xl font-bold leading-4 hover:bg-black hover:border-black hover:text-white">Yearly</TabsTrigger>
              </TabsList>
              <ul>
                  <TabsContent value="month" className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 gap-x-[42px] gap-y-[30px]">
                    {plans.map((plan, index) => (
                      <li key={index} className="h-[887px] border-[2px] border-primary hover:border-black hover:bg-primary-foreground rounded-2xl text-dark hover:text-white duration-200 flex items-center justify-center pt-[65px] pb-[39px] px-[52px]">
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex flex-col items-center text-center justify-between">
                            <div className="flex flex-col gap-[10px]">
                              <h3 className="text-[29px] font-bold leading-8 capitalize">{plan.title}</h3>
                              <p className="text-[15px] leading-5">{plan.desc}</p>
                            </div>
                            <div className="flex flex-col gap-[34px]">
                              <div className="flex flex-col">
                                <h4 className="text-[35px] font-bold leading-8">{plan.priceMonth}</h4>
                                <p className="text-[11px] font-bold uppercase leading-8">per month</p>
                              </div>
                              <div className="flex flex-col items-start gap-3 pt-[38px] border-t-[2px]">
                                <h6 className="text-[15px] font-bold leading-5 uppercase">What’s included:</h6>
                                <ul className="flex flex-col items-start gap-[10px] pl-[26px]">
                                  {plan.included.map((item, index) => (
                                    <li key={index} className="text-base leading-5">{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col h-[242px] justify-between">
                            <div className="flex flex-col items-start gap-3">
                              <h6 className="text-[15px] font-bold leading-5 uppercase">Design Team</h6>
                              <ul className="flex flex-col items-start gap-[10px] pl-[26px]">
                                {plan.designTeam.map((item, index) => (
                                  <li key={index} className="text-sm leading-5">{item}</li>
                                ))}
                              </ul>
                            </div>
                            <Button variant="outline" className="hover:text-white border-[2px]">
                              try free
                              <ArrowRightFromLineIcon width={22} height={16} />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </TabsContent>
                  <TabsContent value="quarter" className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 gap-x-[42px] gap-y-[30px]">
                    {plans.map((plan, index) => (
                      <li key={index} className="h-[887px] border-[2px] border-primary hover:border-black hover:bg-primary-foreground rounded-2xl text-dark hover:text-white duration-200 flex items-center justify-center pt-[65px] pb-[39px] px-[52px]">
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex flex-col items-center text-center justify-between">
                            <div className="flex flex-col gap-[10px]">
                              <h3 className="text-[29px] font-bold leading-8 capitalize">{plan.title}</h3>
                              <p className="text-[15px] leading-5">{plan.desc}</p>
                            </div>
                            <div className="flex flex-col gap-[34px]">
                              <div className="flex flex-col">
                                <h4 className="text-[35px] font-bold leading-8">{plan.priceQuarter}</h4>
                                <p className="text-[11px] font-bold uppercase leading-8">per quarter</p>
                              </div>
                              <div className="flex flex-col items-start gap-3 pt-[38px] border-t-[2px]">
                                <h6 className="text-[15px] font-bold leading-5 uppercase">What’s included:</h6>
                                <ul className="flex flex-col items-start gap-[10px] pl-[26px]">
                                  {plan.included.map((item, index) => (
                                    <li key={index} className="text-base leading-5">{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col h-[242px] justify-between">
                            <div className="flex flex-col items-start gap-3">
                              <h6 className="text-[15px] font-bold leading-5 uppercase">Design Team</h6>
                              <ul className="flex flex-col items-start gap-[10px] pl-[26px]">
                                {plan.designTeam.map((item, index) => (
                                  <li key={index} className="text-sm leading-5">{item}</li>
                                ))}
                              </ul>
                            </div>
                            <Button variant="outline" className="hover:text-white border-[2px]">
                              try free
                              <ArrowRightFromLineIcon width={22} height={16} />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </TabsContent>
                  <TabsContent value="year" className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 gap-x-[42px] gap-y-[30px]">
                    {plans.map((plan, index) => (
                      <li key={index} className="h-[887px] border-[2px] border-primary hover:border-black hover:bg-primary-foreground rounded-2xl text-dark hover:text-white duration-200 flex items-center justify-center pt-[65px] pb-[39px] px-[52px]">
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex flex-col items-center text-center justify-between">
                            <div className="flex flex-col gap-[10px]">
                              <h3 className="text-[29px] font-bold leading-8 capitalize">{plan.title}</h3>
                              <p className="text-[15px] leading-5">{plan.desc}</p>
                            </div>
                            <div className="flex flex-col gap-[34px]">
                              <div className="flex flex-col">
                                <h4 className="text-[35px] font-bold leading-8">{plan.priceYear}</h4>
                                <p className="text-[11px] font-bold uppercase leading-8">per year</p>
                              </div>
                              <div className="flex flex-col items-start gap-3 pt-[38px] border-t-[2px]">
                                <h6 className="text-[15px] font-bold leading-5 uppercase">What’s included:</h6>
                                <ul className="flex flex-col items-start gap-[10px] pl-[26px]">
                                  {plan.included.map((item, index) => (
                                    <li key={index} className="text-base leading-5">{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col h-[242px] justify-between">
                            <div className="flex flex-col items-start gap-3">
                              <h6 className="text-[15px] font-bold leading-5 uppercase">Design Team</h6>
                              <ul className="flex flex-col items-start gap-[10px] pl-[26px]">
                                {plan.designTeam.map((item, index) => (
                                  <li key={index} className="text-sm leading-5">{item}</li>
                                ))}
                              </ul>
                            </div>
                            <Button variant="outline" className="hover:text-white border-[2px]">
                              try free
                              <ArrowRightFromLineIcon width={22} height={16} />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </TabsContent>
              </ul>
            </Tabs>
          </div>
        </Container>
      </section>
      <section>
        <Container className="lg:max-w-[40%] max-w-[85%]">
          <div className="flex flex-col w-full pt-7 border-t-[1.5px] items-center text-center gap-[62px]">
            <div className="flex flex-col gap-[13px]">
              <h4 className="text-[18px] font-bold leading-5">Hey! Need a custom plan? <span className="text-primary">Contact us!</span></h4>
              <p className="text-[14px] leading-5 text-black">Try us risk free for 7 days, if you don’t love us, get your money back.</p>
            </div>
            <Button className="px-[62px] py-7 rounded-xl">Get Started</Button>
          </div>
        </Container>
      </section>
      <section className="py-[200px]">
        <Container className="lg:max-w-[65%] max-w-[85%]">
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-[35px] font-bold leading-10 text-center">How to know if <span className="text-primary">TDP</span> is right for your <span className="text-primary">startup</span></h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <div className="font-bold rounded-[35px] rounded-bl-none py-5 pl-[30px] pr-[65px] bg-black hover:bg-primary hover:shadow-lg duration-200 text-white">You want a new, innovative, and user-centered UX strategy for an existing product</div>
                <div className="font-bold rounded-[35px] rounded-bl-none py-5 pl-[30px] pr-[65px] bg-black hover:bg-primary hover:shadow-lg duration-200 text-white mt-[34px]">You want to translate complex data into an easy-to-understand dashboard</div>
                <div className="font-bold rounded-[35px] rounded-bl-none py-5 pl-[30px] pr-[65px] bg-black hover:bg-primary hover:shadow-lg duration-200 text-white mt-[86px]">You want a new, innovative, and user-centered UX strategy for an existing product</div>
              </div>
              <div>
                <div className="font-bold rounded-[35px] rounded-br-none py-5 pl-[30px] pr-[65px] bg-black hover:bg-primary hover:shadow-lg duration-200 text-white">You want to understand where users struggle when using your product</div>
                <div className="font-bold rounded-[35px] rounded-br-none py-5 pl-[30px] pr-[65px] bg-black hover:bg-primary hover:shadow-lg duration-200 text-white mt-[60px]">You need additional design resources that synergize with your (already) amazing design team</div>
                <div className="font-bold rounded-[35px] rounded-br-none py-5 pl-[30px] pr-[65px] bg-black hover:bg-primary hover:shadow-lg duration-200 text-white mt-[60px]">You want to understand your users and design products that meet their needs</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className="lg:max-w-[75%] max-w-[85%]">
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-[35px] font-bold leading-10 text-center">Our most <span className="text-primary">frequently</span> asked questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do I really get unlimited design services?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente reprehenderit iusto ullam quo atque sit recusandae sequi dolorum velit. Eius ab non voluptatibus laudantium eveniet a doloribus est! Hic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is a realistic turnaround time?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente reprehenderit iusto ullam quo atque sit recusandae sequi dolorum velit. Eius ab non voluptatibus laudantium eveniet a doloribus est! Hic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>I need my designs ASAP—can you help?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente reprehenderit iusto ullam quo atque sit recusandae sequi dolorum velit. Eius ab non voluptatibus laudantium eveniet a doloribus est! Hic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What types of projects do you work on?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente reprehenderit iusto ullam quo atque sit recusandae sequi dolorum velit. Eius ab non voluptatibus laudantium eveniet a doloribus est! Hic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What if I want to cancel my service?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente reprehenderit iusto ullam quo atque sit recusandae sequi dolorum velit. Eius ab non voluptatibus laudantium eveniet a doloribus est! Hic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>
      <section className="pt-[200px]">
        <Container className="max-w-[42.4%]">
          <div className="flex flex-col items-center text-center gap-[54px]">
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col gap-7">
                <h2 className="text-[50px] font-bold leading-10">Let’s <span className="text-primary">build</span> something <span className="text-primary">awesome</span> together!</h2>
                <p className="text-[14px] text-black leading-5">Try us risk free for 7 days, if you don’t love us, get your money back.</p>
              </div>
              <Button className="px-[62px] py-7 rounded-xl">Get Started</Button>
            </div>
            <Image
              src="/people-2.svg"
              width={601}
              height={437}
              alt="People 2"
              className="-mb-5 -z-50"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
