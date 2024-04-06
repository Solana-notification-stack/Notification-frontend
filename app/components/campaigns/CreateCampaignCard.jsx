import React from 'react';
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Image from 'next/image';
import announcementIcon from '../../../assets/announcementIcon.jpg'
import CreateCampaignModal from '../../components/campaigns/CreateCampaignModal'
const CreateCampaignCard = () => {
  return (
    <>
      <Card className="text-white mt-6 mx-6 bg-[#1a1d1e]">
        <Title className="text-white text-center">Create Campaign</Title>
        <Image className=' rounded-full mx-auto mt-6' src={announcementIcon} height={150}/>
        <Flex className="mt-6">
          <div className="mx-auto"></div>
        </Flex>
        <div className="mt-3">
          <CreateCampaignModal/>
        </div>
      </Card>
    </>
  );
};

export default CreateCampaignCard;
