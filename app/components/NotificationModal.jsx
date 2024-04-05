
"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useAppSelector } from "../../store/configureStore";
import {url} from '../constant'

export  default function NotificationModal() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [category,setCategory]=useState("")
const [imageUrl,setImageUrl]=useState("")
  

function onCloseModal(props) {
    setOpenModal(false);
    setEmail('');
  }
const token= useAppSelector((state)=>state.auth.token)
  const handleSendNotification = async ()=>{
    if(category && description && title)
    {
        if(category=="BROADCAST"){

            const formData={
                notificationBody:description,
                notificationTitle:title,
                notificationImage:imageUrl
            }
            const res= await fetch(
                `${url}/getAppData/${props.appId}`,{
                  method:'Post',
                  headers: {
                     
                      "Authorization": `Bearer ${token}`
                    },
                  body:JSON.stringify(formData)
                }
              )
              const result= await res.json()
              console.log("result----->",result)
        }

    }else{
        
    }
  }

  return (
    < >
      <Button className="text-black  bg-white" onClick={() => setOpenModal(true)}>Send</Button>
      <Modal show={openModal}  className="bg-[#151718]" size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-3 ">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Fill notification details</h3>
           
            <div class="col-span-2 sm:col-span-1">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select onChange={(e)=>setCategory(e.target.value)} id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select category</option>
                            <option value="BROADCAST">Broadcast</option>
                        </select>
                    </div>
            <div>
              <div className=" block">
                <Label htmlFor="email" value="Title" />
              </div>
              <TextInput
                
                id="email"
                placeholder="Title"
                value={email}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Description" />
              </div>
              <TextInput
                id="description"
                placeholder="Notification Body"
                value={email}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </div>
            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Notification Image URL" />
              </div>
              <TextInput onChange={(e)=>setImageUrl(e.target.value)} id="text" type="text" required />
            </div>
           
            <div className="w-full">
              <Button>Send</Button>
            </div>
          
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
