'use client'
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { SearchCheckIcon } from 'lucide-react';
import React from 'react';

const Search: React.FC = () => {
  return (
    <React.Fragment>
      <div className='flex items-center gap-2'>
        <Input placeholder='Busque por uma barbearia...' />
        <Button variant={'default'}>
            <SearchCheckIcon size={20}/>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Search;
