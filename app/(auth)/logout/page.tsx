import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/actions/auth.action';
import React from 'react'

const page = () => {



  return (
    <div>
            <Button asChild className="btn-primary ml-auto" onClick={signOut()}>
            {/* <Link href="/interview"> */}
            Logout
            {/* </Link> */}
          </Button>
    </div>
  )
}

export default page
