// 'use client'
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';

const Header: React.FC = async () => {  
  return (
    <React.Fragment>
        <Card>
            <CardContent className='p-5 flex justify-between items-center'>
                <Image src="/logo.png" alt="FSW Barber" width={120} height={22} />
                <Button variant={'outline'} size={'icon'} className='h-8 w-8'>
                    <MenuIcon size={16}/>
                </Button>             
            </CardContent>
        </Card>
    </React.Fragment>
  );
};

export default Header;
