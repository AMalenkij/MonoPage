import { StarIcon } from "@radix-ui/react-icons"
import { useTranslations } from 'next-intl'

import ScrollableContentWithTOC from "@/components/ScrollableContentWithTOC"
import ListOfServices from '@/components/ui/listOfServices'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
 } from "@/components/ui/accordion"

 interface CardData {
	id: string;
	heading: string;
	subHeading: string;
	content: string;
	list: string[];
 }
 
 interface Section {
	id: string;
	title: string;
	subTitle: string;
	content: string;
	list: string[];
 }
 
 export default function Services() {
	const t = useTranslations('HomePage.ServicesSection');
	const sections: Section[] = (t.raw('cards') as CardData[]).map((card: CardData) => ({
	  id: card.id,
	  title: card.heading,
	  subTitle: card.subHeading,
	  content: card.content,
	  list: card.list,
	}));
 
	return (
	  <div className="relative bg-background-secondary">
		 <section className="container mx-auto py-16 md:py-20 lg:py-28">
			<h2 className="text-3xl xl:text-4xl font-semibold mb-8">{t('title')}</h2>
			<p className="xl:text-xl text-lg font-light mb-16 lg:max-w-2xl">{t('subTitle')}</p>
			
			<div className="hidden lg:block">
			  <ScrollableContentWithTOC sections={sections} />
			</div>
			
			<Accordion type="single" collapsible className="w-full lg:hidden">
			  {sections.map((section: Section) => (
				 <AccordionItem value={section.id} key={section.id}>
					<AccordionTrigger className="text-start">
					  <div className="flex flex-col items-start gap-0.5">
						 <h4 className="text-xs font-light text-primary/60 uppercase">{section.title}</h4>
						 <span className="text-2xl font-bold text-primary uppercase">{section.subTitle}</span>
					  </div>
					</AccordionTrigger>
					<AccordionContent>
					  <ListOfServices content={section.content} list={section.list} />
					</AccordionContent>
				 </AccordionItem>
			  ))}
			</Accordion>
		 </section>
		 <StarField />
	  </div>
	);
 }

const StarField: React.FC = () => {
	const stars = [
		{ size: 12, left: '25%', top: '10%' },   // Меньше
		{ size: 40, left: '40%', top: '15%' },   // Больше
		{ size: 28, left: '55%', top: '20%' },   // Больше
		{ size: 16, left: '70%', top: '25%' },   // Меньше
		{ size: 48, left: '30%', top: '30%' },   // Больше
		{ size: 40, left: '45%', top: '45%' },   // Самая большая звезда
		{ size: 15, left: '60%', top: '40%' },   // Меньше
		{ size: 32, left: '75%', top: '45%' },   // Средний размер
		{ size: 20, left: '65%', top: '55%' },   // Меньше
		{ size: 10, left: '45%', top: '65%' },   // Самая маленькая звезда
	 ];
 
	return (
	  <div className="absolute w-[500px] h-[500px] top-0 right-[20%] hidden xl:flex">
		 {stars.map((star, index) => (
			<StarIcon
			  key={index}
			  className="absolute"
			  style={{
				 left: star.left,
				 top: star.top,
				 width: `${star.size}px`,
				 height: `${star.size}px`,
			  }}
			/>
		 ))}
	  </div>
	);
 };


 