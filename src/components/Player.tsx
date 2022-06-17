import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';

let audio: any;

const Player = () => {
    
    const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель', text: 'Какой-то текст', listens: 5, audio: '../assets/music1.mp3', picture: 'https://avatars.yandex.net/get-music-content/6021799/6a43ed6a.a.22736848-1/200x200', comments: [{_id: '1', username: 'Sabuhi', text: 'qwerty', }]}

    const {active, currentTime, duration, pause, volume} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

    if (!active) {
        return null
    }

  return (
    <div className={styles.player}>
        <IconButton onClick={play}>
            {pause
                ? <PlayArrow />
                : <Pause/>
            }
        </IconButton>
        <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
            <div>{active?.name}</div>
            <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
        </Grid>
        <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
        <VolumeUp style={{marginLeft: 'auto'}} />
        <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
