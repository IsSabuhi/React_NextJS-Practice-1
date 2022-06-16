/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
    const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель', text: 'Какой-то текст', listens: 5, audio: '', picture: 'https://avatars.yandex.net/get-music-content/6021799/6a43ed6a.a.22736848-1/200x200', comments: [{_id: '1', username: 'Sabuhi', text: 'qwerty', }]}

    const router = useRouter()

    return (
        <MainLayout>
            <div>
                <Button 
                    variant="outlined"
                    style={{fontSize: 32}}
                    onClick={() => router.push('/tracks')}
                >
                    К списку
                </Button>
                <Grid container style={{margin: '20px 0'}}> 
                    <img src={track.picture} width={200} height={200} />
                    <div style={{marginLeft: 30}}>
                        <h1>Название трека - {track.name}</h1>
                        <h1>Исполнитель - {track.artist}</h1>
                        <h1>Прослушиваний - {track.listens}</h1>
                    </div>
                </Grid>
                <h1>Слова в треке</h1>
                <p>{track.text}</p>
                <h1>Комментарий</h1>
                <Grid container>
                    <TextField 
                        label="Ваше имя"
                        fullWidth
                    />
                    <TextField 
                        label="Комментарий"
                        fullWidth
                        multiline
                        rows={4}
                    />
                    <Button>Отправить</Button>
                </Grid>
                <div>
                    {track.comments.map(comment =>
                        <div>
                            <div>Автор - {comment.username}</div>
                            <div>Комментарий - {comment.text}</div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default TrackPage;