"use client"
import React from 'react'
import { Button, Modal,Label,TextInput } from "flowbite-react";
import { useState } from "react";
import { useAppSelector } from '../../../store/configureStore';
import { toast } from 'react-toastify';
import {url} from '../../constant'
const CreateCampaignModal = () => {
    const appSecret=useAppSelector((state)=>state.auth.appSecret)

    const [openModal, setOpenModal] = useState(false);
    const [campaignName,setCampaignName]=useState()
    function onCloseModal() {
        setOpenModal(false);
  
      }

      const handleCreate = async ()=>{
        const formData = {
            campaignName
        }
        try {
            const res= await fetch(
                `${url}/appCreateCampaign`,{
                  method:'Post',
                  headers: {
                    
                      "Authorization": `${appSecret}`,
                      'Content-Type': 'application/json',
                    },
                  body:JSON.stringify(formData)
                }
              )
            
              const result= await res.json()
              if(result){
                toast.success("Campaign Created Successfully")
              }
              console.log("result----->",result)
        } catch (error) {
            console.log(error)
        }
      }
  return (
    <>
        <Button className='bg-white text-black ' onClick={() => setOpenModal(true)}>Create</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add campaign Details</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Campaign Name" />
              </div>
              <TextInput
                id="email"
                placeholder="Campaign...."
                onChange={(e)=>setCampaignName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="App Secret" />
              </div>
              <TextInput className='font-bold' placeholder={appSecret} readOnly  required />
            </div>
           
            <div className="w-full">
              <Button onClick={handleCreate}>Create</Button>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateCampaignModal