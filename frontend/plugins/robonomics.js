import { Robonomics, utils } from 'robonomics-interface'
import AccountManager from 'robonomics-interface/dist/accountManagerUi'
import { Keyring } from '@polkadot/keyring'

import { stringToU8a, u8aToHex } from '@polkadot/util'
let robonomics

const SEED = 'frown pear live badge idea praise deny more click offer setup neglect'
export const getInstance = async () => {
  if (robonomics) {
    return robonomics
  }
  robonomics = new Robonomics({
    endpoint: 'wss://kusama.rpc.robonomics.network'
  })
  robonomics.setAccountManager(new AccountManager(new Keyring({ type: 'sr25519' })))
  await robonomics.run()
  // await AccountManager.initPlugin(robonomics.accountManager.keyring)
  return robonomics
}

export const getAddresses = async () => {
  const robonomics = await getInstance()
  const accounts = await robonomics.accountManager.getAccounts()
  return accounts.map(account => account.address)
}

export const getAccounts = async () => {
  const robonomics = await getInstance()
  return await robonomics.accountManager.getAccounts()
}

export const setActiveAccount = async (address) => {
  const robonomics = await getInstance()
  await robonomics.accountManager.selectAccountByAddress(address)
}

let activeAccountBalanceUnsubscribe

export const subscribeToBalanceUpdates = async (address, onBalanceUpdate) => {
  if (activeAccountBalanceUnsubscribe) {
    activeAccountBalanceUnsubscribe()
  }
  const robonomics = await getInstance()
  activeAccountBalanceUnsubscribe = await robonomics.account.getBalance(
    address,
    onBalanceUpdate
  )
}

export const makeLaunchTx = async (targetAddress, cid) => {
  const robonomics = await getInstance()
  const tx = robonomics.launch.send(targetAddress, utils.cidToHex(cid))
  return tx
}

/**
 * Transfer XRT balance from active account to recipient.
 * @param {string} recipient - Transfer destination address in Robonomics parachain format.
 * @param {number} value - Amount to transfer in Wn. 1 Wn = 1 XRT * 10^-9.
 */
export const makeTransferTx = async (recipient, value) => {
  const robonomics = await getInstance()
  const tx = robonomics.api.tx.balances.transfer(recipient, value)
  return tx
}

export const signMessage = async (message) => {
  const robonomics = await getInstance()

  const keyring = robonomics.accountManager.keyring.addFromUri(SEED)
  const signature = keyring.sign(stringToU8a(message))
  console.log(signature)
  console.log(u8aToHex(signature))

  return u8aToHex(signature)
}

export const signAndSendTxWithActiveAccount = async (tx) => {
  const robonomics = await getInstance()
  robonomics.accountManager.keyring.addFromUri(SEED)
  const accounts = robonomics.accountManager.getAccounts()
  console.log(accounts[0].address)
  await robonomics.accountManager.selectAccountByAddress(accounts[0].address)
  const resultTx = await robonomics.accountManager.signAndSend(tx)
  return resultTx
}

/**
 * Combine multiple transactions in one, sign it with an active account and send.
 * @param {Array} txs - An array of transactions to sign and send.
 */
export const signAndSendTxsBatchWithActiveAccount = async (txs) => {
  const robonomics = await getInstance()
  const tx = await robonomics.api.tx.utility.batch(txs)
  const resultTx = await robonomics.accountManager.signAndSend(tx)
  return resultTx
}

export const makeSubscanLink = (network, suffix) => {
  return `https://${network}.subscan.io/extrinsic/${suffix}`
}

export const addressShort = (address) => {
  if (!address) {
    return ''
  }
  return address.slice(0, 6) + '...' + address.slice(-4)
}
