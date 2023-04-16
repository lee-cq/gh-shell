import * as core from '@actions/core'
import * as stateHelper from './status-helper'

async function main(): Promise<void> {
  try {
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

async function post(): Promise<void> {
  try {
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

if (!stateHelper.IsPost) {
  main()
}
// Post
else {
  post()
}
