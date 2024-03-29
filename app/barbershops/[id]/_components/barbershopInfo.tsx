'use client'
import { Button } from '@/app/_components/ui/button';
import { Barbershop } from '@prisma/client';
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
    const router = useRouter()
    const handleBackClick = () => {
        router.replace('/')
    }
  return (
    <React.Fragment>
      <div>
            <div className='h-[250px] w-full relative'>
                <Button 
                    size={'icon'} 
                    variant={'outline'} 
                    className='z-50 absolute top-4 left-4'
                    onClick={handleBackClick}
                >
                    <ChevronLeftIcon />
                </Button>
                <Button 
                    size={'icon'} 
                    variant={'outline'} 
                    className='z-50 absolute top-4 right-4'
                    // onClick={}
                >
                    <MenuIcon />
                </Button>
                <Image 
                    src={barbershop.imageUrl} 
                    fill 
                    alt={barbershop.name} 
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    className='opacity-75'
                />
            </div>
            <div className='px-5 pt-3 pb-6 border-b border-solid border-secondary'>
                <h1 className='text-xl font-bold'>{barbershop.name}</h1>
                <div className="flex items-center gap-1 mt-2">
                    <MapPinIcon className='text-primary' size={18}/>
                    <p className='text-gray-400 text-sm'>{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <StarIcon className='text-primary' size={18}/>
                    <p className='text-gray-400 text-sm'>5.0 (899 avaliações)</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default BarbershopInfo;
