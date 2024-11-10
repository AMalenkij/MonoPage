"use client"

import React, { useRef, useEffect, useState, useCallback, } from 'react'
import { useInView } from 'framer-motion'

import ListOfServices from '@/components/ui/listOfServices'
import { Button } from "@/components/ui/button"

interface Section {
  id: string
  title: string
	subTitle: string
  descriptionTitle: string
  serviceList?: string[]
  pricingTitle: string
  pricingDetails?: string[]
  specialNotes?: string
}

interface ScrollableContentWithTOCProps {
  sections: Section[]
}

const ScrollableContentWithTOC: React.FC<ScrollableContentWithTOCProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const handleInView = useCallback((inView: boolean, id: string) => {
    if (inView) {
      setActiveSection(id)
    }
  }, [])

  const scrollToSection = useCallback((id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="hidden flex-row justify-between lg:flex">
      <TableOfContents
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Content
        sections={sections}
        activeSection={activeSection}
        handleInView={handleInView}
        sectionRefs={sectionRefs}
      />
    </div>
  )
}

const TableOfContents: React.FC<{
  sections: Section[]
  activeSection: string | null
  scrollToSection: (id: string) => void
}> = React.memo(({ sections, activeSection, scrollToSection }) => (
  <nav className="sticky top-[10%] h-full w-1/4 text-xl">
    <ul>
      {sections.map((section) => (
        <li key={section.id}>
          <Button
            variant="link"
            className={`relative cursor-pointer px-4 py-6 text-xl ${activeSection === section.id ? '' : 'text-primary/60'
              }`}
            onClick={() => scrollToSection(section.id)}
          >
            <span
              className={`absolute top-0 bottom-0 left-0 w-1 transition-all duration-300 ease-in-out ${activeSection === section.id ? 'w-1 rounded-sm bg-primary' : 'bg-accent'}
              `}
            />
            {section.subTitle}
          </Button>
        </li>
      ))}
    </ul>
  </nav>
))

TableOfContents.displayName = 'TableOfContents'

const Content: React.FC<{
  sections: Section[]
  activeSection: string | null
  handleInView: (inView: boolean, id: string) => void
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}> = React.memo(({ sections, activeSection, handleInView, sectionRefs }) => (
  <div className="h-full w-1/2 overflow-y-hidden p-4">
    {sections.map((section) => (
      <SectionContent
        key={section.id}
        section={section}
        isActive={activeSection === section.id}
        handleInView={handleInView}
        sectionRefs={sectionRefs}
      />
    ))}
  </div>
))

Content.displayName = 'Content'

const SectionContent: React.FC<{
  section: Section
  isActive: boolean
  handleInView: (inView: boolean, id: string) => void
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}> = React.memo(({ section, isActive, handleInView, sectionRefs }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: false,
    margin: "0% 0px -75% 0px"
  })

  useEffect(() => {
    handleInView(isInView, section.id)
  }, [isInView, section.id, handleInView])

  useEffect(() => {
    sectionRefs.current[section.id] = ref.current
  }, [sectionRefs, section.id])

  return (
    <div
      ref={ref}
      className={`mb-16 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}
    >
      <h4 className="flex flex-col gap-y-0.5 font-light text-primary/60 text-xs uppercase">
        {section.title}
        <span className="mb-2 font-bold text-2xl text-primary uppercase">{section.subTitle}</span>
      </h4>
      <ListOfServices 
								descriptionTitle={section.descriptionTitle} 
								serviceList={section.serviceList}
								pricingTitle={section.pricingTitle}
								pricingDetails={section.pricingDetails}
								specialNotes={section.specialNotes}
								/>
    </div>
  )
})

SectionContent.displayName = 'SectionContent'

export default ScrollableContentWithTOC