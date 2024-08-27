import React, { useState } from 'react'

export default function EventHandling() {
    const [status, setStatus]= useState(false);
  return (
    <div>
      <button onClick={()=>setStatus(!status)}>
        {status?'Turn off' : 'Turn on'}
      </button>
<p>The status is {status?'on':'off'}</p>
    </div>
  )
}
