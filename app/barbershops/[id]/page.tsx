import { db } from '@/app/_lib/prisma';
import React from 'react';
import BarbershopInfo from './_components/barbershopInfo';

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    if(!params.id) {
        return (
            <h1>No id provided</h1>
            // TODO - Redirect to home
        )
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        }
    })
    if (!barbershop){
        return (
            <div className='w-full h-[90vh] flex justify-center items-center'>
                <h1>Barbearia não encontrada</h1>
            </div>
        )
    }
  return (
    <React.Fragment>
        <BarbershopInfo barbershop={barbershop}/>
    </React.Fragment>
  );
};

export default BarbershopDetailsPage;
