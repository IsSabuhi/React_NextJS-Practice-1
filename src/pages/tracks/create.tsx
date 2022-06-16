import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload'
import StepWrapper from '../../components/StepWrapper'
import MainLayout from '../../layouts/MainLayout'

export default function create() {
  
  const [activeStep, setActiveStep] = useState(0)

  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1)
    }
  }
  const back = () => {
    setActiveStep(prev => prev -  1)
  }

  return (
    <MainLayout>
      <div>
        <StepWrapper activeStep={activeStep}>
          {activeStep === 0 && 
          <Grid container direction={"column"} style={{padding: 20}}>
            <TextField
              style={{margin: 10}}
              label="Название трека"
            />
            <TextField
              style={{margin: 10}}
              label="Имя исполнителя"
            />
            <TextField
              style={{margin: 10}}
              label="Слова к треку"
              multiline
              rows={3}
            />
          </Grid>
          }
          {activeStep === 1 && 
          <FileUpload setFile={setPicture} accept='image/*'>
            <Button>Загрузить изображение</Button>
          </FileUpload>
          }
          {activeStep === 2 && 
          <FileUpload setFile={setAudio} accept='audio/*'>
            <Button>Загрузить аудио</Button>
          </FileUpload>
          }
        </StepWrapper>
        <Grid container justifyContent='space-between' >
          <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
          <Button onClick={next}>Далее</Button>
        </Grid>
      </div>
    </MainLayout>
  )
}
