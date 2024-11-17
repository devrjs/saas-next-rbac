import { ability } from '@saas/auth'

const useCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log(useCanInviteSomeoneElse)
console.log(userCanDeleteOtherUsers)
console.log(userCannotDeleteOtherUsers)
