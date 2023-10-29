'use client';
import { signOut, useSession } from 'next-auth/react';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Anime {
  anime: string;
  character: string;
  quote: string;
}
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


const [data, setData] = useState<Anime[]>([])
useEffect(() => {
  const fetchData = async () => {
    try{
        const response =await axios.get('https://animechan.xyz/api/random')
        setData(response.data)
        console.log('response', response)
    }catch(error){
        console.error('Error fetching data:', error)
    }
  };
fetchData()
},[])

  return (
    <div className="p-8 w-full">
     <div className='w-full flex pb-4 px-4 justify-between'>
     <div id='#navbar' className=' text-white'>Hi {session?.data?.user?.email && findNameByEmail(session?.data?.user?.email)}</div>
      <button className='text-white' onClick={() => signOut()}>Logout</button>
      
      </div>
      <div className='mt-10 w-8/12 text-2xl text-stone-100 flex flex-col'>
<div>Data coming from APIs using axios, they change everytime you refresh</div>
<div className='mt-6 text-xl'><p>Anime Title : {data.anime}</p>
<p>Character name: {data.character}</p>
<p> Character quote: {data.quote}</p></div>
</div>
  
    </div>
  )
}

Home.requireAuth = true
