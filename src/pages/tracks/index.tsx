import { Button, Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import TrackList from '../../components/TrackList'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

export default function Index() {

    const router = useRouter()

    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Исполнитель', text: 'Какой-то текст', listens: 5, audio: '../assets/music1.mp3', picture: 'https://avatars.yandex.net/get-music-content/6021799/6a43ed6a.a.22736848-1/200x200', comments: [{_id: '1', username: 'Sabuhi', text: 'qwerty', }]},
        {_id: '2', name: 'Трек 2', artist: 'Исполнитель1', text: 'Какой-то текст1', listens: 9, audio: '', picture: 'https://avatars.yandex.net/get-music-content/6021799/6a43ed6a.a.22736848-1/200x200', comments: [{_id: '1', username: 'Alex', text: 'qweqwe', }]},
    ]

  return (
    <MainLayout>
        <Grid container justifyContent='center'>
            <Card style={{width: '900px'}}>
                <Box p={3}>
                    <Grid container justifyContent='space-between'>
                        <h1>Список треков</h1>
                        <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                    </Grid>
                </Box>
                <TrackList tracks={tracks} />
            </Card>
        </Grid>
    </MainLayout>
  )
}
