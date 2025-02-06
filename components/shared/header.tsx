import { Container } from '@/components/shared';
import * as React from 'react';
import {cn} from '@/lib/utils'; 

interface Props {
className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
return (
<header className={cn('border border-b', className)}>
    <Container className='flex items-center justify-between py-8'>
        <img src={pizza}/>
        
    </Container>
</header>
);
}