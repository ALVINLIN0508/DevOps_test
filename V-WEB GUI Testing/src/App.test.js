import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('Hex RGB Converter UI', () => {

  it('converts #FF0000 to RGB(255, 0, 0)', async () => {
    const wrapper = mount(App)

    await wrapper
      .get('[data-test="hex-input"]')
      .setValue('#FF0000')

    await wrapper
      .get('[data-test="hex-button"]')
      .trigger('click')

    expect(
      wrapper.get('[data-test="rgb-result"]').text()
    ).toBe('RGB(255, 0, 0)')
  })


  it('shows an error for invalid hex input', async () => {
    const wrapper = mount(App)

    await wrapper
      .get('[data-test="hex-input"]')
      .setValue('XYZ123')

    await wrapper
      .get('[data-test="hex-button"]')
      .trigger('click')

    expect(
      wrapper.get('[data-test="hex-error"]').text()
    ).toContain('valid 6-digit hex')
  })


  it('converts RGB 255, 0, 0 to #FF0000', async () => {
    const wrapper = mount(App)

    await wrapper
      .get('[data-test="red-input"]')
      .setValue(255)

    await wrapper
      .get('[data-test="green-input"]')
      .setValue(0)

    await wrapper
      .get('[data-test="blue-input"]')
      .setValue(0)

    await wrapper
      .get('[data-test="rgb-button"]')
      .trigger('click')

    expect(
      wrapper.get('[data-test="hex-result"]').text()
    ).toBe('#FF0000')
  })


  it('shows an error when RGB value is outside 0-255', async () => {
    const wrapper = mount(App)

    await wrapper
      .get('[data-test="red-input"]')
      .setValue(300)

    await wrapper
      .get('[data-test="green-input"]')
      .setValue(0)

    await wrapper
      .get('[data-test="blue-input"]')
      .setValue(0)

    await wrapper
      .get('[data-test="rgb-button"]')
      .trigger('click')

    expect(
      wrapper.get('[data-test="rgb-error"]').text()
    ).toContain('between 0 and 255')
  })
})