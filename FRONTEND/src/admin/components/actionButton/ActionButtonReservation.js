import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ContainerGlobal } from '../container/container';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const ActionButtonReservation = (props) => {

    return (
        <div>
            <ContainerGlobal
                w='100%'
                h='auto'
                direction='row'
                align='center'
                justify='center'
                gap='10px'
                display={props.paid == true ? 'none' : 'flex'}
            >

                
                <IconButton onClick={props.check} type="submit" sx={{ p: '8px', backgroundColor: props.unsettled == true ? 'rgb(46, 46, 46, .2)' : "rgb(80, 170, 50, 0.7)" }} aria-label="search" title='Edit/Update'
                >
                    <CheckIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton>
                <IconButton onClick={props.view} type="submit" sx={{ p: '8px', backgroundColor: 'rgb(191, 170, 126, 0.7)' }} aria-label="search" title='View'>
                    <RemoveRedEyeIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton>
                <IconButton onClick={props.edit} type="submit" sx={{ p: '8px', backgroundColor: 'rgb(191, 170, 126, 0.7)' }} aria-label="search" title='Edit/Update'>
                    <EditIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton>
                <IconButton type="submit" sx={{ p: '8px', backgroundColor: 'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete'>
                    <DeleteIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton>
            </ContainerGlobal>

            <ContainerGlobal
                w='100%'
                h='auto'
                direction='row'
                align='center'
                justify='center'
                gap='10px'
                display={props.paid == true ? 'flex' : 'none'}
            >

                
                <IconButton onClick={props.check} type="submit" sx={{ p: '8px', backgroundColor: "rgb(80, 170, 50, 0.7)" }} aria-label="search" title='Edit/Update'
                >
                    <MenuBookIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton>
                <IconButton onClick={props.view} type="submit" sx={{ p: '8px', backgroundColor: 'rgb(191, 170, 126, 0.7)' }} aria-label="search" title='View'>
                    <RemoveRedEyeIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton>
                <IconButton onClick={props.edit} type="submit" sx={{ p: '8px', backgroundColor: 'rgb(191, 170, 126, 0.7)' }} aria-label="search" title='Edit/Update'>
                    <EditIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton>
                <IconButton type="submit" sx={{ p: '8px', backgroundColor: 'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete'>
                    <DeleteIcon style={{ color: '#2e2e2e', fontSize: '18px' }} title='View' />
                </IconButton>
            </ContainerGlobal>
            

        </div>
    )
}

export default ActionButtonReservation