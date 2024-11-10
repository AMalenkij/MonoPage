import { CheckCircledIcon, BackpackIcon } from '@radix-ui/react-icons'

interface SectionContentProps {
  descriptionTitle: string
  serviceList?: string[]
  pricingTitle: string
  pricingDetails?: string[]
  specialNotes?: string
}

const ListOfServices: React.FC<SectionContentProps> = ({ descriptionTitle, serviceList, pricingTitle, pricingDetails, specialNotes }) => {
  return (
    <div>
      <p className='pb-4'>{descriptionTitle}</p>
      {serviceList && (
        <ul>
          {serviceList.map((item) => (
            <li
              className="flex items-start gap-x-2 pt-2 font-semibold text-xl"
              key={item}
            >
              <CheckCircledIcon className="mt-1 min-h-5 min-w-5" />
              <span className='break-words'>{item}</span>
            </li>
          ))}

          <p className="mt-3 pb-4">{pricingTitle}</p>
          {pricingDetails?.map((item) => (
            <li
              className="flex items-start gap-x-2 pt-2 font-semibold text-xl"
              key={item}
            >
              <BackpackIcon className="mt-1 min-h-5 min-w-5" />
              <span className='break-words'>{item}</span>
            </li>
          ))}
          {specialNotes && <p className="pb-4">{specialNotes}</p>}
        </ul>
      )}
    </div>
  )
}

export default ListOfServices
