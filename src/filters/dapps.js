export function dappAction (action) {
  if(action != 'steemit'){
    return String(action).substring(action.indexOf("_") + 1).replace('_', " ").replace(/\b\S/g, t => t.toUpperCase())
  }
  if(action == 'steemit'){
    return String(action).replace('_', " ").replace(/\b\S/g, t => t.toUpperCase())
  }
}

