import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { ContainerGlobal } from '../container/container';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const ActionButton = (props) => {
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
            <IconButton onClick={props.view} type="submit" sx={{ p: '8px', backgroundColor:'rgb(191, 170, 126, 0.7)' }} aria-label="search" title='View'>
                <RemoveRedEyeIcon style={{color: '#2e2e2e', fontSize: '18px'}} title='View'/>
            </IconButton>
            <IconButton onClick={props.edit} type="submit" sx={{ p: '8px', backgroundColor:'rgb(191, 170, 126, 0.7)' }} aria-label="search" title='Edit/Update'>
                <EditIcon style={{color: '#2e2e2e', fontSize: '18px'}} title='View'/>
            </IconButton>
            <IconButton type="submit" sx={{ p: '8px', backgroundColor:'rgb(255, 36, 0, 0.7)' }} aria-label="search" title='Delete'>
                <DeleteIcon style={{color: '#2e2e2e', fontSize: '18px'}} title='View'/>
            </IconButton>
            </ContainerGlobal>
        </div>
    )
}

export default ActionButton