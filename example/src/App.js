import React from 'react'
import Button from 'react-mat-button'
import 'react-mat-button/dist/index.css'


const App = () => {
  return (
    <React.Fragment>
      <div style={{ padding: 16 }}>
        <h2>Building Button</h2>

        <h6>Xtra Small Button</h6>
        
        <Button size='xs' colorVariant='danger' variant='solid'>Danger Button</Button>
        <Button size='xs' colorVariant='warning' variant='solid'>Warning Button</Button>
        <Button size='xs' colorVariant='accent' variant='solid'>Accent Button</Button>
        <Button size='xs' colorVariant='primary' variant='solid'>Primary Button</Button>
        <Button size='xs' colorVariant='secondary' variant='solid'>Secondary Button</Button>
        <Button size='xs' variant='solid'>Default Button</Button>
        <br/><br/>
        <Button size='xs' colorVariant='danger' variant='outline'>Danger Button</Button>
        <Button size='xs' colorVariant='warning' variant='outline'>Warning Button</Button>
        <Button size='xs' colorVariant='accent' variant='outline'>Accent Button</Button>
        <Button size='xs' colorVariant='primary' variant='outline'>Primary Button</Button>
        <Button size='xs' colorVariant='secondary' variant='outline'>Secondary Button</Button>
        <Button size='xs' variant='outline'>Default Button</Button>
        <br/><br/>
        <Button size='xs' colorVariant='danger' variant='text'>Danger Button</Button>
        <Button size='xs' colorVariant='warning' variant='text'>Warning Button</Button>
        <Button size='xs' colorVariant='accent' variant='text'>Accent Button</Button>
        <Button size='xs' colorVariant='primary' variant='text'>Primary Button</Button>
        <Button size='xs' colorVariant='secondary' variant='text'>Secondary Button</Button>
        <Button size='xs' variant='text'>Default Button</Button>

        <h6>Small Button</h6>
        
        <Button size='sm' colorVariant='danger' variant='solid'>Danger Button</Button>
        <Button size='sm' colorVariant='warning' variant='solid'>Warning Button</Button>
        <Button size='sm' colorVariant='accent' variant='solid'>Accent Button</Button>
        <Button size='sm' colorVariant='primary' variant='solid'>Primary Button</Button>
        <Button size='sm' colorVariant='secondary' variant='solid'>Secondary Button</Button>
        <Button size='sm' variant='solid'>Default Button</Button>
        <br /><br />
        <Button size='sm' colorVariant='danger' variant='outline'>Danger Button</Button>
        <Button size='sm' colorVariant='warning' variant='outline'>Warning Button</Button>
        <Button size='sm' colorVariant='accent' variant='outline'>Accent Button</Button>
        <Button size='sm' colorVariant='primary' variant='outline'>Primary Button</Button>
        <Button size='sm' colorVariant='secondary' variant='outline'>Secondary Button</Button>
        <Button size='sm' variant='outline'>Default Button</Button>
        <br/><br/>
        <Button size='sm' colorVariant='danger' variant='text'>Danger Button</Button>
        <Button size='sm' colorVariant='warning' variant='text'>Warning Button</Button>
        <Button size='sm' colorVariant='accent' variant='text'>Accent Button</Button>
        <Button size='sm' colorVariant='primary' variant='text'>Primary Button</Button>
        <Button size='sm' colorVariant='secondary' variant='text'>Secondary Button</Button>
        <Button size='sm' variant='text'>Default Button</Button>

        <h6>Medium Button</h6>
        
        <Button size='md' colorVariant='danger' variant='solid'>Danger Button</Button>
        <Button size='md' colorVariant='warning' variant='solid'>Warning Button</Button>
        <Button size='md' colorVariant='accent' variant='solid'>Accent Button</Button>
        <Button size='md' colorVariant='primary' variant='solid'>Primary Button</Button>
        <Button size='md' colorVariant='secondary' variant='solid'>Secondary Button</Button>
        <Button size='md' variant='solid'>Default Button</Button>
        <br /><br />
        <Button size='md' colorVariant='danger' variant='outline'>Danger Button</Button>
        <Button size='md' colorVariant='warning' variant='outline'>Warning Button</Button>
        <Button size='md' colorVariant='accent' variant='outline'>Accent Button</Button>
        <Button size='md' colorVariant='primary' variant='outline'>Primary Button</Button>
        <Button size='md' colorVariant='secondary' variant='outline'>Secondary Button</Button>
        <Button size='md' variant='outline'>Default Button</Button>
        <br/><br/>
        <Button size='md' colorVariant='danger' variant='text'>Danger Button</Button>
        <Button size='md' colorVariant='warning' variant='text'>Warning Button</Button>
        <Button size='md' colorVariant='accent' variant='text'>Accent Button</Button>
        <Button size='md' colorVariant='primary' variant='text'>Primary Button</Button>
        <Button size='md' colorVariant='secondary' variant='text'>Secondary Button</Button>
        <Button size='md' variant='text'>Default Button</Button>

        <h6>Large Button</h6>
        
        <Button size='lg' colorVariant='danger' variant='solid'>Danger Button</Button>
        <Button size='lg' colorVariant='warning' variant='solid'>Warning Button</Button>
        <Button size='lg' colorVariant='accent' variant='solid'>Accent Button</Button>
        <Button size='lg' colorVariant='primary' variant='solid'>Primary Button</Button>
        <Button size='lg' colorVariant='secondary' variant='solid'>Secondary Button</Button>
        <Button size='lg' variant='solid'>Default Button</Button>
        <br /><br />
        <Button size='lg' colorVariant='danger' variant='outline'>Danger Button</Button>
        <Button size='lg' colorVariant='warning' variant='outline'>Warning Button</Button>
        <Button size='lg' colorVariant='accent' variant='outline'>Accent Button</Button>
        <Button size='lg' colorVariant='primary' variant='outline'>Primary Button</Button>
        <Button size='lg' colorVariant='secondary' variant='outline'>Secondary Button</Button>
        <Button size='lg' variant='outline'>Default Button</Button>
        <br/><br/>
        <Button size='lg' colorVariant='danger' variant='text'>Danger Button</Button>
        <Button size='lg' colorVariant='warning' variant='text'>Warning Button</Button>
        <Button size='lg' colorVariant='accent' variant='text'>Accent Button</Button>
        <Button size='lg' colorVariant='primary' variant='text'>Primary Button</Button>
        <Button size='lg' colorVariant='secondary' variant='text'>Secondary Button</Button>
        <Button size='lg' variant='text'>Default Button</Button>

        <h6>Disabled</h6>
        <Button size='xs' disabled colorVariant='danger' variant='text'>Danger Button</Button>
        <Button size='sm' disabled colorVariant='warning' variant='text'>Warning Button</Button>
        <Button size='md' disabled colorVariant='accent' variant='text'>Accent Button</Button>
        <Button size='lg' disabled colorVariant='primary' variant='text'>Primary Button</Button>
        <br /><br />
        <Button size='xs' disabled colorVariant='danger' variant='outline'>Danger Button</Button>
        <Button size='sm' disabled colorVariant='warning' variant='outline'>Warning Button</Button>
        <Button size='md' disabled colorVariant='accent' variant='outline'>Accent Button</Button>
        <Button size='lg' disabled colorVariant='primary' variant='outline'>Primary Button</Button>
        <br /><br />
        <Button size='xs' disabled colorVariant='danger' variant='solid'>Danger Button</Button>
        <Button size='sm' disabled colorVariant='warning' variant='solid'>Warning Button</Button>
        <Button size='md' disabled colorVariant='accent' variant='solid'>Accent Button</Button>
        <Button size='lg' disabled colorVariant='primary' variant='solid'>Primary Button</Button>

        <h6>Link</h6>
        <Button size='xs' colorVariant='danger' variant='link'>Danger Button</Button>
        <Button size='sm' colorVariant='warning' variant='link'>Warning Button</Button>
        <Button size='md' colorVariant='accent' variant='link'>Accent Button</Button>
        <Button size='lg' colorVariant='primary' variant='link'>Primary Button</Button>


        <h6>Loading</h6>
        <Button size='xs' loading colorVariant='danger' variant='outline'>Danger Button</Button>
        <Button size='sm' loading colorVariant='warning' variant='solid'>Warning Button</Button>
        <Button size='md' loading colorVariant='accent' variant='solid'>Accent Button</Button>
        <Button size='lg' loading colorVariant='primary' variant='outline'>Primary Button</Button>
      </div>
    </React.Fragment>
  )
}

export default App
