import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';
import { Orbitron } from 'next/font/google';


export const lusitana = Lusitana({ subsets: ['latin'], weight: '400'})
export const inter = Inter({ subsets: ['latin'] });
export const poppins = Poppins({ subsets: ['latin'], weight: '400'});
export const sourcePro = Source_Code_Pro({ subsets: ['latin'], weight: '400'})
export const orbitronLite = Orbitron({ subsets: ['latin'], weight: '400' })
export const orbitronBold = Orbitron({ subsets: ['latin'], weight: '800' })