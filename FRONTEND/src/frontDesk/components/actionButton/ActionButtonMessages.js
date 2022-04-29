import React,{useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { ContainerGlobal } from '../container/container';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Grow } from '@mui/material';
import { Title } from '../../../client/components/title/styles';
import { HorizontalLine } from '../../../client/components/horizontalLine/HorizontalLine';
import Button from '@mui/material/Button';


function ActionButtonMessages() {
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
        w='70%'
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
          Are you sure you want to <b style={{ color: 'red' }}>DELETE</b> this message?
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
        w='100%'
        h='auto'
        direction='row'
        align='center'
        justify='center'
        gap='10px'
      >
        <IconButton onClick={() => setShow(prev => !prev)} type="submit" sx={{ p: '8px', backgroundColor: 'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete'>
          <DeleteIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
        </IconButton>

        <Grow in={show}>{deleteModal}</Grow>
      </ContainerGlobal>
    </div>
  )
}

export default ActionButtonMessages