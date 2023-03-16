import React from 'react'
import GameCanvas from '../game/GameCanvas';

const Map = ({ game }) => {
  return (
    <>
    <div>Map</div>
    <div>
      GameCanvas......
      <GameCanvas game={game} />
    </div>
    </>
  )
}

export default Map