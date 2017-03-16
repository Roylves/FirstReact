import { PUSH_ROUTE, POP_ROUTE, RESET_ROUTE } from './constants'

export function push(route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop() {
  return {
    type: POP_ROUTE
  }
}

export function reset(route) {
  return {
    type: RESET_ROUTE,
    route
  }
}