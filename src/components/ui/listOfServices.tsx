import React from 'react';
import { CheckCircledIcon } from '@radix-ui/react-icons';

interface SectionContentProps {
  content: string;
  list?: string[];
}

const ListOfServices: React.FC<SectionContentProps> = ({ content, list }) => {
  return (
    <div>
      <p className='pb-4'>{content}</p>
      {list && (
        <ul>
          {list.map((item, index) => (
            <li 
              className='pt-2 font-semibold text-xl flex items-start gap-x-2' 
              key={index}
            >
              <CheckCircledIcon className='min-w-5 min-h-5 mt-1' />
              <span className='break-words'>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListOfServices;
