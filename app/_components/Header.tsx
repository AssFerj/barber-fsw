'use client'
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Avatar, AvatarImage } from './ui/avatar';

const Header: React.FC = () => {
  const {data} = useSession();
  const handleLogOut = () => signOut();
  const handleLogin = () => signIn();
  return (
    <React.Fragment>
        <Card>
            <CardContent className='p-5 flex justify-between items-center'>
                <Image src="/logo.png" alt="FSW Barber" width={120} height={22} />
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant={'outline'} size={'icon'} className='h-8 w-8'>
                        <MenuIcon size={16}/>
                    </Button>   
                  </SheetTrigger>
                  <SheetContent className='p-0'>
                    <SheetHeader className='text-left border-b border-solid border-secondary p-5'>
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    {data?.user ? (
                      <div className="flex justify-between px-5 py-6 items-center">
                        <div className='flex items-center gap-3'>
                          <Avatar>
                            <AvatarImage src={data.user?.image ?? ''}/>
                          </Avatar>
                          <h2 className='font-bold'>{data.user.name}</h2>
                        </div>
                        <Button variant={'secondary'} size={'icon'} className='h-8 w-8' onClick={handleLogOut}>
                            <LogOutIcon/>
                        </Button>   
                      </div>
                    ): (
                      <div className='flex flex-col px-5 py-6 gap-3'>
                        <div className="flex items-center gap-2">
                          <UserIcon size={32}/>
                          <h2 className='font-bold'>Olá, acesse sua conta!</h2>
                        </div>
                        <Button variant='secondary' className='w-full' onClick={handleLogin}>
                          <LogInIcon className='mr-2' size={18}/>
                          Acessar Conta
                        </Button>
                      </div>
                    )}
                    <div className="flex flex-col gap-3 px-5">
                      <Button variant='outline' className='justify-start' asChild>
                        <Link href='/'>
                          <HomeIcon size={18} className='mr-2'/>
                          Início
                        </Link>
                      </Button>
                      {data?.user && (
                        <Button variant='outline' className='justify-start' asChild>
                          <Link href='/bookings'>
                            <CalendarIcon size={18} className='mr-2'/>
                            Agendamentos
                          </Link>
                        </Button>
                      )}
                    </div>
                  </SheetContent>
                </Sheet> 
            </CardContent>
        </Card>
    </React.Fragment>
  );
};

export default Header;
