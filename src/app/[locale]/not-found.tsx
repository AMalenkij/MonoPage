import {notFound} from 'next/navigation';
 
export default function CatchAllPage() {
  notFound();  // Эта функция вызовет страницу 404
}