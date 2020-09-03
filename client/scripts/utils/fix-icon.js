const fs = require('fs')
const path = require('path')

const iconFilePath = path.join(__dirname, '../../src/styles/icons/index.less')
const iconsDir = 'icons/'

fs.readFile(iconFilePath, { encoding: 'utf-8' }, function (err, fr) {
  if (err) {
    console.log('fix icon error')
    return
  } else {
    let str = fr
    const fixRegx = /\.\//g
    str = str.replace(fixRegx, function (match) {
      return iconsDir
    })
    // 写入文件
    fs.writeFile(iconFilePath, str, function (err) {
      if (err) {
        console.log('fix icon error: write file error')
      } else {
        console.log('fix icon success')
      }
    })
  }
})
