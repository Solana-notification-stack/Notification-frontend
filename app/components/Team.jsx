'use client';
import React from 'react';
import { TeamImage } from './TeamImage';

function Team() {
  return (
    <div className="bg-black  py-8 px-6 flex flex-col ">
      <div className="flex flex-col md:flex-row text-[color:var(--Primary,#FFF)]  lg:mx-[4rem] [font-family:Sora] text-4xl md:text-5xl font-semibold mb-5 w-full leading-[140%] gap-6">
        <div>Meet The Minds</div>
        <div>Behind NotifEase</div>
      </div>
      <div className="flex items-center justify-around flex-wrap gap-6">
        <TeamImage
          name={'Ronak Gupta'}
          image={
            'https://firebasestorage.googleapis.com/v0/b/solana-notifications.appspot.com/o/WhatsApp%20Image%202024-04-09%20at%2005.06.53.jpeg?alt=media&token=9ed76245-80e9-4f97-9e49-e37062d0d609'
          }
          desc={'Developer'}
          github={'https://github.com/ronakgupta11'}
          twitter={'https://x.com/ronakguptark07'}
        />
        <TeamImage
          name={'Shivam Shaw'}
          image={
            'https://firebasestorage.googleapis.com/v0/b/solana-notifications.appspot.com/o/WhatsApp%20Image%202024-04-09%20at%2005.06.35.jpeg?alt=media&token=c9c99a47-cfa8-4b66-a08a-27156c650778'
          }
          desc={'Developer'}
          github={'https://github.com/tryptophan36'}
          twitter={'https://x.com/tryptophan36'}
        />
        <TeamImage
          name={'Shobhit Kumawat'}
          image={
            'https://firebasestorage.googleapis.com/v0/b/solana-notifications.appspot.com/o/WhatsApp%20Image%202024-04-09%20at%2005.06.34.jpeg?alt=media&token=d2cb0e6b-195e-4474-8773-bc58b66affc5'
          }
          desc={'Product Management'}
          twitter={'https://x.com/shobhit_k07'}
        />
      </div>
    </div>
  );
}

export default Team;
