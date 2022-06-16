import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React from 'react'
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';

const Player = () => {
    
    const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель', text: 'Какой-то текст', listens: 5, audio: '', picture: 'https://avatars.yandex.net/get-music-content/6021799/6a43ed6a.a.22736848-1/200x200', comments: [{_id: '1', username: 'Sabuhi', text: 'qwerty', }]}

    const active = false;

  return (
    <div className={styles.player}>
        <IconButton onClick={e => e.stopPropagation()}>
            {!active
                ? <PlayArrow />
                : <Pause/>
            }
        </IconButton>
        <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
            <div>{track.name}</div>
            <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
        </Grid>
        <TrackProgress left={0} right={100} onChange={() => ({})} />
        <VolumeUp style={{marginLeft: 'auto'}} />
        <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
