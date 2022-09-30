import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atom/playlistAtom'
import Song from './Song'

function Songs() {
  const playlist = useRecoilValue(playlistState)
  console.log(playlist)
  return (
    <div className="flex flex-col space-y-3 px-8 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  )
}

export default Songs
