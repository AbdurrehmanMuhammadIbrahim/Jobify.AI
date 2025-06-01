import React from 'react'
import Agent from "../../components/Agent";
import { getCurrentUser } from "../../../lib/actions/auth.action";



const Page = async () => {
      const user = await getCurrentUser();
      console.log("User:", user);

    return (
        <>
            <h3>Interview Generation</h3>

            <Agent
               userId={user?.id}
        userName={user?.name!}
     
        profileImage={user?.profileURL!}
        type="generate"
      />
        </>
    )
}
export default Page