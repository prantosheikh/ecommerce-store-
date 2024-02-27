import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard';

export const revalidate = 0;
const HomePage = async () => {

   const billboard = await getBillboard("f5310f64-22da-49be-954c-b0bb3610a2f2")
   return (
      <div className='space-y-10 pb-10'>
         <Billboard data={billboard} />
      </div>
   );
};

export default HomePage;