"use client"
import React from 'react'
import { Button, Modal,Label,TextInput } from "flowbite-react";
import { useState } from "react";
const CreateCampaignModal = () => {

    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
  
      }
  return (
    <>
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
           
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateCampaignModal