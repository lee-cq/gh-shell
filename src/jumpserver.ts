import * as core from '@actions/core'
import axios from 'axios'

const JUMP_BASEURL:string = core.getInput("")
const JUMP_PTOKEN:string = core.getInput("")

const headers: JSON = {
    Auth
}


export function register(): void {
    // 注册至 jumpserver


}

export function unregister(): void {
    // 移除 jumpserver
}
