'use client'
import { Badge } from '@/app/_components/ui/badge';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Barbershop } from '@prisma/client';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem: React.FC<BarbershopItemProps> = ({ barbershop }) => {
    const router = useRouter()
    const handleBookingClick = () => {
        router.push(`/barbershops/${barbershop.id}`)
    }
  return (
    <React.Fragment>
        <Card className='min-w-[167px] max-w-[167px] rounded-2xl'>
            <CardContent className='px-1 pt-1'>
                <div className='px-1 relative w-full h-[159px]'>
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant={'secondary'} className="opacity-90 flex gap-1 items-cente top-3 left-3">
                            <StarIcon size={12} className='fill-primary text-primary'/>
                            <span>5,0</span>
                        </Badge>
                    </div>
                    <Image 
                        src={barbershop.imageUrl} 
                        alt={barbershop.name} 
                        fill
                        className='rounded-2xl' 
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <div className='px-2 pb-3'>
                    <h2 className='font-bold mt-2 overflow-hidden text-ellipsis text-nowrap'>{barbershop.name}</h2>
                    <p className='text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap'>{barbershop.address}</p>
                    <Button variant="secondary" className='w-full mt-3' onClick={handleBookingClick}>Reservar</Button>
                </div>
            </CardContent>
        </Card>
    </React.Fragment>
  );
};

export default BarbershopItem;
