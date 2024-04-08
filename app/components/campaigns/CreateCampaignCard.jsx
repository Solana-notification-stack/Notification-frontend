import React from 'react';
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Image from 'next/image';
import announcementIcon from '../../../assets/announcementIcon.jpg'
import CreateCampaignModal from '../../components/campaigns/CreateCampaignModal'
import { cardStyle } from '../../constant';
const CreateCampaignCard = () => {
  return (
    <>
      <Card className={`text-white ${cardStyle} `}>
        <Title className="text-white text-center">Create Campaign</Title>
        <Image className=' rounded-full mx-auto mt-6' src={announcementIcon} height={150}/>
        <Flex className="mt-6">
          <div className="mx-auto"></div>
        </Flex>
        <div className="flex mx-auto justify-center ">
          <CreateCampaignModal/>
        </div>
      </Card>
    </>
  );
};

export default CreateCampaignCard;
