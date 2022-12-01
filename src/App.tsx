import { TranslationContex } from './Context/TranslationContext'
import { useContext, useEffect, useState } from 'react'
import { LoremIpsum } from 'lorem-ipsum'

function App() {
  const TranslateContext = useContext(TranslationContex)
  const [type, setType] = useState('paragraph')
  const [generate, setGenerate] = useState('')
  const [number, setNumber] = useState(5)

  function genLorem(genType: string, qtd: number) {
    const gen = new LoremIpsum()
    switch (genType) {
      case 'paragraph':
        setGenerate(gen.generateParagraphs(qtd))
        break
      case 'word':
        setGenerate(gen.generateWords(qtd))
        break
      case 'sentence':
        setGenerate(gen.generateSentences(qtd))
        break
    }
  }

  useEffect(() => {
    TranslateContext.handleChangeLanguage()
  }, [TranslateContext.currentLang])

  return (
    <div className='App'>
      <menu>
        <select id='languages'>
          <option
            value='enus'
            selected
            onClick={() => {
              TranslateContext.setCurrentLang('enus')
            }}
          >
            English
          </option>
          <option
            value='ptbr'
            onClick={() => {
              TranslateContext.setCurrentLang('ptbr')
            }}
          >
            Português
          </option>
        </select>
      </menu>
      <header>
        <h1>Lorem Ipsum</h1>
        <h4>
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...'
        </h4>
        <h5>{TranslateContext.t('LoremTranslation')}</h5>
        <p style={{ fontSize: 24 }}>{TranslateContext.t('SubTitle')}</p>
      </header>
      <div id='panel'>
        <div>{TranslateContext.t('WhatIs')}</div>
        <div style={{ marginTop: '40px' }}>{TranslateContext.t('WhyUse')}</div>
      </div>
      <div id='generator'>
        <table style={{ margin: 'auto', textAlign: 'left' }}>
          <td rowSpan={2} style={{ verticalAlign: 'middle' }}>
            <tr>
              <td>
                <input
                  value={number}
                  onChange={(e) => {
                    setNumber(parseInt(e.target.value))
                  }}
                  style={{ width: '35px', textAlign: 'center' }}
                  type='text'
                  id='numberOf'
                />
              </td>
            </tr>
          </td>
          <td rowSpan={2}>
            <tr>
              <td>
                <input
                  type='radio'
                  name='what'
                  value={'paragraph'}
                  defaultChecked={true}
                  onClick={() => {
                    setType('paragraph')
                  }}
                />
                {TranslateContext.t('Paragraph')}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type='radio'
                  name='what'
                  value={'sentence'}
                  onClick={() => {
                    setType('sentence')
                  }}
                />
                {TranslateContext.t('Sentences')}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type='radio'
                  name='what'
                  value={'word'}
                  onClick={() => {
                    setType('word')
                  }}
                />
                {TranslateContext.t('Words')}
              </td>
            </tr>
          </td>
        </table>
        <button
          onClick={() => {
            genLorem(type, number)
          }}
        >
          {TranslateContext.t('GenBtn')}
        </button>
        <div id='result'>
          {generate !== '' && (
            <div
              style={{
                width: '900px',
                backgroundColor: '#504f4f',
                borderRadius: '10px',
                padding: '12px',
              }}
            >
              <button
                style={{ marginBottom: '20px' }}
                onClick={() => {
                  navigator.clipboard.writeText(generate)
                }}
              >
                {TranslateContext.t('Copy')}
              </button>
              <p>{generate}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
