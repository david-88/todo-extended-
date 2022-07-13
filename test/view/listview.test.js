
import chai, { expect } from 'chai'
import chaiDom from 'chai-dom'
import { JSDOM } from 'jsdom'
import { describe, it, xit, beforeEach } from 'mocha'
import fs from 'fs'

import { renderList } from '../../src/view/listview.js'

chai.use(chaiDom)

beforeEach(() => {
  const html = fs.readFileSync('./dist/index.html')
  const dom = new JSDOM(html)
  global.window = dom.window
  global.document = dom.window.document
})

describe('list view tests', () => {
  describe('render list tests', () => {
    it('shout be able to render a list with input text and delete button after click of add button', () => {
      const listName = 'my new List'
      renderList(listName)
      // eslint-disable-next-line no-unused-expressions
      expect(document.querySelector('#lists')).to.be.visible
      expect(document.querySelector('#lists')).to.contain('p')
      expect(document.querySelector('#lists')).to.contain('button')
    })

    xit('should be able to edit the list element after double click on the list element', () => {

    })

    xit('should be delete list element after click on delete list button', () => {

    })

    xit('should be able to render a list with title "untitled" if no title for the list is specified', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(document.querySelector('#list-container')).to.be.visible
    })
  })
})
