import {exec} from 'child_process'

// 更新用户信息
export function updateUserInfo(): void {
  let shell_username = process.env['SHELL_USERNAME']
  let shell_password = process.env['SHELL_PASSWORD']

  if (shell_username === '') {
    shell_username = 'runner'
  }

  if (shell_username === 'runner') {
    var child = exec(
      `echo "${shell_username}:${shell_password}" |sudo chpasswd`
    )
  } else {
    var child = exec(
      `sudo useradd -m -s /bin/bash -G sudo -p $(openssl passwd -1 "${shell_password}") ${shell_username}`
    )
  }

  if (child.exitCode != 0) {
    throw Error()
  }
}
