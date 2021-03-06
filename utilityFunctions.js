let utilityFunctions = {
  findNextExtPos: source => {
    let spot = source.room.lookAt(Memory.construction.extp.x, Memory.construction.extp.y)

    let good = utilityFunctions.checkSpot(spot)

    if (!good) {
      console.log(Memory.construction.extp.x, Memory.construction.extp.y)
      if (Memory.construction.count < Memory.construction.lap + 2) {
        switch (Memory.construction.dir % 5) {
          case 0:
            Memory.construction.extp.y -= 2
            break
          case 1:
            Memory.construction.extp.x += 2
            break
          case 2:
            Memory.construction.extp.y += 2
            break
          case 3:
            Memory.construction.extp.x -= 2
            break
          case 4:
            Memory.construction.extp.x -= 1
            Memory.construction.extp.y += 1
            Memory.construction.lap++
            Memory.construction.count = Memory.construction.lap + 2
            break
        }
        console.log(Memory.construction.extp.x, Memory.construction.extp.y)

        Memory.construction.count++
      } else {
        Memory.construction.count = 0
        Memory.construction.dir++

        return { x: 0, y: 0 }
      }
    } else {
      return Memory.construction.extp
    }

    return { x: 0, y: 0 }
  },

  checkSpot: spot => {
    let good = true

    for (let i in spot) {
      console.log('Checking spot : ', Memory.construction.extp.x, Memory.construction.extp.y)
      console.log(spot[i].type)
      switch (spot[i].type) {
        case LOOK_STRUCTURES:
          good = false
          break
        case LOOK_SOURCES:
          good = false
          break
        case LOOK_MINERALS:
          good = false
          break
        case LOOK_FLAGS:
          good = false
          break
        case LOOK_CONSTRUCTION_SITES:
          good = false
          break
        case LOOK_NUKES:
          good = false
          break
        case LOOK_CONSTRUCTION_SITES:
          good = false
          break
        case LOOK_TERRAIN:
          console.log('reached terrain')
          if (spot[i].terrain == 'wall') {
            console.log('found wall')
            good = false
          }
      }
    }
    console.log(good)
    return good
  },
}
module.exports = utilityFunctions
