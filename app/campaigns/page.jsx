import React from 'react'
import Nav from '../nav'
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import CreateCampaign from '../components/campaigns/CreateCampaignCard'
const Page = () => {
  return (
    <>
    <Nav/>
    <div className="text-center text-3xl mt-5 text-white">
          Create a new campaign
          <p className="text-xs text-gray-400 mt-2">
            Quickly create personalized campaigns to target specific users
          </p>
        </div>
    <Grid numItemsSm={2} numItemsLg={3} className="
      gap-6">
    <CreateCampaign/>

      </Grid>
    </>
  )
}

export default Page