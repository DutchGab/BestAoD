export const newKill = new Audio("../../assets/audio/NewKill.mp3")
export const updateNewKillVolume = (volume: number) => {
    newKill.volume = volume
}

export const north = new Audio("../../assets/audio/North.mp3")
export const east = new Audio("../../assets/audio/East.mp3")
export const updateSmokeVolume = (volume: number) => {
    north.volume = volume
    east.volume = volume
}

export const pool = new Audio("../../assets/audio/Pool.mp3")
export const poopPop = new Audio("../../assets/audio/PoolPopping.mp3")
export const updatePoolVolume = (volume: number) => {
    pool.volume = volume
    poopPop.volume = volume
}

export const bomb = new Audio("../../assets/audio/Bomb.mp3")
export const updateBombVolume = (volume: number) => {
    bomb.volume = volume
}

export const umbra = new Audio("../../assets/audio/Umbra.mp3")
export const glacies = new Audio("../../assets/audio/Glacies.mp3")
export const cruor = new Audio("../../assets/audio/Cruor.mp3")
export const fumus = new Audio("../../assets/audio/Fumus.mp3")
export const updateOrderVolume = (volume: number) => {
    umbra.volume = volume
    glacies.volume = volume
    cruor.volume = volume
    fumus.volume = volume
}

export const death = new Audio("../../assets/audio/Death.mp3")
export const updateDeathVolume = (volume: number) => {
    death.volume = volume
}
