import { db } from '@/app/_lib/prisma';
import React from 'react';
import BarbershopInfo from './_components/barbershopInfo';
import ServiceItem from './_components/ServiceItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_lib/auth';

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    const session = await getServerSession(authOptions);
    if(!params.id) {
        return (
            <h1>No id provided</h1>
            // TODO - Redirect to home
        )
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
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
        <div className="px-5 py-6 flex flex-col gap-4">
            {barbershop.services.map((service) => 
                <ServiceItem key={service.id} service={service} isAuthenticated={!!session?.user} />
            )}
        </div>
    </React.Fragment>
  );
};

export default BarbershopDetailsPage;
