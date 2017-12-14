const logger = (actions, prevState, state) => {
  console.log(
    `Action: ${actions.type}\n%c\tprev\t=>\t%o\n%c\tpayload\t=>\t%o\n%c\tcurrent\t=>\t%o`,
    'color: green; font-weight: 900;',
    prevState,
    'color: gray; font-weight: 900;',
    actions.payload,
    'color: blue; font-weight: 900;',
    state
  )
}

module.exports = function(store) {
  store.subscribe(state => Object.assign({}, state))(logger)
}
