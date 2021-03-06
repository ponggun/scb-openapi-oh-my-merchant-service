const SCB_API_BASE_URL = process.env.SCB_API_BASE_URL
const SCB_API_KEY = process.env.SCB_API_KEY
const SCB_API_SECRET = process.env.SCB_API_SECRET
const SCB_BILLER_ID = process.env.SCB_BILLER_ID
const SCB_MERCHANT_ID = process.env.SCB_MERCHANT_ID
const SCB_MERCHANT_TERMINAL_ID = process.env.SCB_MERCHANT_TERMINAL_ID

module.exports = {
  API_KEY: SCB_API_KEY,
  API_SECRET: SCB_API_SECRET,
  BASE_URL: SCB_API_BASE_URL,
  BILLER_ID: SCB_BILLER_ID,
  MERCHANT_ID: SCB_MERCHANT_ID,
  MERCHANT_TERMINAL_ID: SCB_MERCHANT_TERMINAL_ID,
}
