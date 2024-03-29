import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface BookingItemProps {
  property?: string;
}

const BookingItem: React.FC<BookingItemProps> = ({ property }) => {
  return (
    <React.Fragment>
        <Card>
            <CardContent className='p-5 flex justify-between py-0'>
                <div className='flex flex-col gap-3 py-5'>
                    <Badge className='bg-[#221C30] text-primary hover:bg-[#221C30] w-fit'>Confirmado</Badge>
                    <h2 className='font-bold'>Corte de cabelo</h2>
                    <div className='flex'>
                        <Avatar className='h-6 w-6'>
                            <AvatarImage src='https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png'/>
                            <AvatarFallback>CB</AvatarFallback>
                        </Avatar>
                        <h3 className='taxt-sm'>Vintage Barber</h3>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center px-3 border-l border-solid border-secondary'>
                    <p className='text-sm'>Fevereiro</p>
                    <p className='text-2xl'>06</p>
                    <p className='text-sm'>09:45</p>
                </div>
            </CardContent>
        </Card>
    </React.Fragment>
  );
};

export default BookingItem;
