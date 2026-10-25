<script setup>
import { ref } from 'vue'

const hexInput = ref('#FF0000')
const rgbResult = ref('')

const red = ref(255)
const green = ref(0)
const blue = ref(0)
const hexResult = ref('')

const hexError = ref('')
const rgbError = ref('')

function hexToRgb() {
  hexError.value = ''
  rgbResult.value = ''

  let hex = hexInput.value.trim().replace('#', '')

  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    hexError.value = 'Please enter a valid 6-digit hex value.'
    return
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  rgbResult.value = `RGB(${r}, ${g}, ${b})`
}

function rgbToHex() {
  rgbError.value = ''
  hexResult.value = ''

  const r = Number(red.value)
  const g = Number(green.value)
  const b = Number(blue.value)

  if (
    !Number.isInteger(r) ||
    !Number.isInteger(g) ||
    !Number.isInteger(b) ||
    r < 0 || r > 255 ||
    g < 0 || g > 255 ||
    b < 0 || b > 255
  ) {
    rgbError.value = 'RGB values must be integers between 0 and 255.'
    return
  }

  const toHex = (value) =>
    value.toString(16).padStart(2, '0').toUpperCase()

  hexResult.value = `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
</script>

<template>
  <main class="container">
    <h1>Hex ↔ RGB Converter</h1>

    <p class="description">
      A simple Vue application for converting hexadecimal colors and RGB values.
    </p>

    <section class="card">
      <h2>Hex to RGB</h2>

      <label for="hex-input">Hex value</label>

      <input
        id="hex-input"
        v-model="hexInput"
        data-test="hex-input"
        type="text"
        placeholder="#FF0000"
      />

      <button
        data-test="hex-button"
        @click="hexToRgb"
      >
        Convert to RGB
      </button>

      <p
        v-if="rgbResult"
        data-test="rgb-result"
        class="result"
      >
        {{ rgbResult }}
      </p>

      <p
        v-if="hexError"
        data-test="hex-error"
        class="error"
      >
        {{ hexError }}
      </p>
    </section>

    <section class="card">
      <h2>RGB to Hex</h2>

      <div class="rgb-inputs">
        <div>
          <label for="red">R</label>
          <input
            id="red"
            v-model="red"
            data-test="red-input"
            type="number"
          />
        </div>

        <div>
          <label for="green">G</label>
          <input
            id="green"
            v-model="green"
            data-test="green-input"
            type="number"
          />
        </div>

        <div>
          <label for="blue">B</label>
          <input
            id="blue"
            v-model="blue"
            data-test="blue-input"
            type="number"
          />
        </div>
      </div>

      <button
        data-test="rgb-button"
        @click="rgbToHex"
      >
        Convert to Hex
      </button>

      <p
        v-if="hexResult"
        data-test="hex-result"
        class="result"
      >
        {{ hexResult }}
      </p>

      <p
        v-if="rgbError"
        data-test="rgb-error"
        class="error"
      >
        {{ rgbError }}
      </p>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

.description {
  text-align: center;
  margin-bottom: 30px;
}

.card {
  padding: 25px;
  margin-bottom: 25px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}

button {
  padding: 10px 18px;
  cursor: pointer;
}

.rgb-inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.result {
  margin-top: 15px;
  font-weight: bold;
}

.error {
  margin-top: 15px;
  font-weight: bold;
}

@media (max-width: 600px) {
  .rgb-inputs {
    grid-template-columns: 1fr;
  }
}
</style>