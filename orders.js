let orders = {
  defendBase: creep => {
    let hostileHealers = creep.room.find(FIND_HOSTILE_CREEPS, { filter: creep => creep.getActiveBodyparts(HEAL) > 0 })
    //TODO sort to attck weakest first

    if (hostileHealers.length) {
      if (creep.attack(hostileHealers[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(hostileHealers[0])
      }
    } else {
      let nearEnemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS)
      if (nearEnemy) {
        if (creep.attack(nearEnemy) == ERR_NOT_IN_RANGE) {
          creep.moveTo(nearEnemy)
        }
      }
    }
  },
}

module.exports = orders
