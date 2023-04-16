import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'
import * as stateHelper from './status-helper'
import * as path from 'path'
import {createHash} from 'crypto'
import {count} from 'console'
import { exec } from 'child_process'

// https://raw.githubusercontent.com/actions/python-versions/main/versions-manifest.json
const TAILSCALE_URL = `https://pkgs.tailscale.com/stable/tailscale_1.38.4_amd64.tgz`
const MD5_TAILSCAL_URL = md5String(TAILSCALE_URL)

const TAILSCALE_TOKEN =core.getInput('')
const HOSTNAME = core.getInput('')


function md5String(s: string): string {
  let md5 = createHash('md5')
  md5.update(s)
  return md5.digest('hex')
}

export async function install(): Promise<void> {
  // 如果缓存匹配，将从缓存加载
  if (MD5_TAILSCAL_URL) {
    restore_tailscale()
  } else {
    let tailscalePath = await tc.downloadTool(TAILSCALE_URL)
    let node12ExtractedFolder = await tc.extractTar(tailscalePath, '')

    // 完成安装后缓存安装件
    cache_tailscale()
  }
}

async function cache_tailscale() {
  // 缓存
}

async function restore_tailscale() {
  // 重用
}

export function register(): void {
  // 将机器注册至tailscale
  exec("tailscale up ", )
}

export function unregister(): void {
  // 将主机从tailscale移除
  exec("tailscale down")
}
