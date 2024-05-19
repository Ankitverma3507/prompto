"use client";

import Link from 'next/link' // Link is a component that allows you to link to other pages in your app
import Image from 'next/image' // Image is a component that allows you to display images
import { useState, useEffect } from 'react'
import {SignIn, SignOut, useSession, getProviders, signOut} from 'next-auth/react'

const Nav = () => {

const isUserLogIn= true;
return (
    <nav className='w-full flex-between mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
                <Image 
                src='/assets/images/logo.svg' 
                width={40} 
                height={40} 
                alt='Prompto Logo' 
                className='object-contain'
                />
                <p className='logo_text'>Prompto</p>
        </Link>

        {/* {Desktop view} */}

        <div className='sm:flex hidden'>
            {isUserLogIn ?(
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'>
                        Create post
                    </Link>

                    <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>

                    <Link href='/profile'>
                        <Image 
                        src='/assets/images/logo.svg' 
                        width={40} 
                        height={40} 
                        alt='Profile' 
                        className='object-contain'
                        />
                    </Link>
                </div>
            ):
            <>

            </>
            }
        </div>
    </nav>
);
};

export default Nav