import { useState } from "react"

import { Input }
from "@/components/ui/input"

import { Button }
from "@/components/ui/button"

import { supabase }
from "@/services/supabase/supabaseClient"

export default function CreateClassForm(){

 const [title,setTitle]=
  useState("")

 const [meetLink,setMeetLink]=
  useState("")

 async function createClass(){

  await supabase
   .from("classes")
   .insert({
     title,
     meet_link:meetLink,
     level:"A1"
   })

 }

 return (

  <div className="space-y-4">

   <Input
    placeholder="Class Title"
    value={title}
    onChange={(e)=>
      setTitle(e.target.value)
    }
   />

   <Input
    placeholder="Google Meet Link"
    value={meetLink}
    onChange={(e)=>
      setMeetLink(e.target.value)
    }
   />

   <Button
    onClick={createClass}
    className="bg-brand-red"
   >
    Create Class
   </Button>

  </div>
 )
}