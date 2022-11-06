import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { ContainerGlobal } from '../container/container';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { Grow } from '@mui/material';
import { Title } from '../../../client/components/title/styles';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine';
import Button from '@mui/material/Button';

function ActionButtonPayment(props) {
  const [show, setShow] = useState(false);

  const deleteModal = (
    <ContainerGlobal
      w='100%'
      h='100%'
      radius='none'
      justify='center'
      align='center'
      bg='rgb(46, 46, 46, 0.9)'
      index='1'
      overflow='auto'
      active
    >
      <ContainerGlobal
        w='40%'
        h='auto'
        bg='white'
        direction='column'
        padding='30px'
        gap='10px'
        justify='center'
        align='center'
      >
        <Title
          size='26px'
          color='black'
          family='Helvetica'
          fstyle='normal'
          weight='600'
          align='left'
        >
          Are you sure you want to <b style={{ color: 'red' }}>DELETE</b> this?
        </Title>
        <HorizontalLine
          bg='gray'
          w='100%'
          margin='0px'
        />
        <ContainerGlobal gap='30px' overflow='vissible'>
          <Button variant="contained"
            style={{ backgroundColor: 'rgb(80, 170, 50)' }}
            onClick={() => setShow(prev => !prev)}>
            Yes
          </Button>
          <Button variant="contained"
            style={{ backgroundColor: 'rgb(255, 36, 0)' }}
            onClick={() => setShow(prev => !prev)}>
            No
          </Button>
        </ContainerGlobal>
      </ContainerGlobal>
    </ContainerGlobal>
  );
  return (
    <div>
      <ContainerGlobal
        w='auto'
        h='auto'
        direction='row'
        align='center'
        justify='right'
        gap='10px'
      >
        <IconButton onClick={props.print} type="submit" disabled={props.printDisable == false ? false : true} sx={{p: '8px', backgroundColor: props.printDisable == false ? 'rgb(0, 0, 255, 0.5)' : 'rgb(46, 46, 46, .2)' }} aria-label="search" title='Print receipt'>
          <LocalPrintshopIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
        </IconButton>
        <IconButton onClick={props.pay} type="submit" sx={{ p: '8px', backgroundColor: props.paid == true ? 'rgb(46, 46, 46, .2)' : "rgb(80, 170, 50, 0.7)" }} aria-label="search" title='Payment'>
          <AddCardIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
        </IconButton>
        <IconButton onClick={props.view} type="submit" sx={{ p: '8px', backgroundColor: 'rgb(191, 170, 126, 0.7)' }} aria-label="search" title='View'>
          <RemoveRedEyeIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
        </IconButton>
        <IconButton onClick={props.edit} type="submit" sx={{ p: '8px', backgroundColor: 'rgb(191, 170, 126, 0.7)' }} aria-label="search" title='Edit/Update'>
          <EditIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
        </IconButton>


        <Grow in={show}>{deleteModal}</Grow>
      </ContainerGlobal>
    </div>
  )
}

export default ActionButtonPayment