'use client';
import { signOut, useSession } from 'next-auth/react';

import { redirect } from 'next/navigation';
import { use, useEffect } from 'react';



export default function Home() {

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
 

  const findNameByEmail = (emailToFind: string | null | undefined) => {
    const name = [
      {
        id: 1,
        name: "Nora",
        email: "nora@gmail.com",
      },
      {
        id: 2,
        name: "Maddison",
        email: "maddison@gmail.com",
      },
      {
        id: 3,
        name: "Trinity",
        email: "trinity@gmail.com",
      },
      {
        id: 4,
        name: "Kayden",
        email: "kayden@gmail.com",
      },
      {
        id: 5,
        name: "Juan",
        email: "juan@gmail.com",
      },
      {
        id: 6,
        name: "Giovanna",
        email: "giovanna@gmail.com",
      },
    ];

    // Find the object with the matching email
    const result = name.find((person) => person.email === emailToFind);
  
    // Check if a matching object was found
    if (result) {
      return result.name;
    } else {
      return "Email not found";
    }
  };

  return (
    <div className="p-8 w-full">
     <div className='w-full flex pb-4 px-4 justify-between'>
     <div id='#navbar' className=' text-white'>Hi {session?.data?.user?.email && findNameByEmail(session?.data?.user?.email)}</div>
      <button className='text-white' onClick={() => signOut()}>Logout</button>
      </div>


  
    </div>
  )
}

Home.requireAuth = true
