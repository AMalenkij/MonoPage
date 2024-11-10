import { useTranslations } from 'next-intl'

import ScrollableContentWithTOC from '@/components/ScrollableContentWithTOC'
import ListOfServices from '@/components/ui/listOfServices'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

interface ServiceItem {
	id: string
	title: string
	subTitle: string
	descriptionTitle: string
	serviceList: string[]
	pricingTitle: string
	pricingDetails: string[]
	specialNotes?: string
}

export default function Services() {
	const t = useTranslations('HomePage.ServicesSection')
	const services: ServiceItem[] = t.raw('services') as ServiceItem[]

	return (
		<div className="relative bg-background-secondary">
			<section className="container mx-auto py-16 md:py-20 lg:py-28">
				<h2 className="mb-8 font-semibold text-3xl xl:text-4xl">{t('title')}</h2>
				<p className="mb-16 font-light text-lg lg:max-w-2xl xl:text-xl">{t('subTitle')}</p>

				<div className="hidden lg:block">
					<ScrollableContentWithTOC sections={services} />
				</div>

				{/* Mobile version */}
				<Accordion type="single" collapsible className="w-full lg:hidden">
					{services.map((section: ServiceItem) => (
						<AccordionItem value={section.id} key={section.id}>
							<AccordionTrigger className="text-start">
								<div className="flex flex-col items-start gap-0.5">
									<h4 className="font-light text-primary/60 text-xs uppercase">{section.title}</h4>
									<span className="font-bold text-2xl text-primary uppercase">{section.subTitle}</span>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<ListOfServices
									descriptionTitle={section.descriptionTitle}
									serviceList={section.serviceList}
									pricingTitle={section.pricingTitle}
									pricingDetails={section.pricingDetails}
									specialNotes={section.specialNotes}
								/>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</div>
	)
}
