/**
 * @description 水波纹指令
 * @author typeofnan
 * @time 2020-10-27
 */

import './style.css'

export const ripples = {
  bind(el, binding) {
    el.addEventListener('click', e => {
      const customOpts = { ...binding.value }
      const opts = { ...{
        ele: el, // 波纹作用元素
        type: 'hit', // hit 点击位置扩散 center中心点扩展
        color: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
      }, ...customOpts }

      const target = opts.ele

      if (target) {
        target.style.position = 'relative'
        target.style.overflow = 'hidden'
        const rect = target.getBoundingClientRect()
        let ripple = target.querySelector('.typeofnan_vue_ripples')

        if (!ripple) {
          ripple = document.createElement('span')
          ripple.className = 'typeofnan_vue_ripples'
          ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
          target.appendChild(ripple)
        } else {
          ripple.className = 'typeofnan_vue_ripples'
        }

        switch (opts.type) {
          case 'center':
            ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px'
            ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px'
            break
          default:
            ripple.style.top = (
              e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop ||
              document.body.scrollTop
            ) + 'px'
            ripple.style.left = (
              e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft ||
              document.body.scrollLeft
            ) + 'px'
        }
        ripple.style.backgroundColor = opts.color
        ripple.className = 'typeofnan_vue_ripples z-active'

        setTimeout(() => {
          ripple.remove()
        }, 600)
        return false
      }
    }, false)
  }
}
