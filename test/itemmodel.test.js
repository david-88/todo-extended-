const Item = require('../src/Model/itemmodel')
const assert = require('assert')

describe('item tests', function () {
  describe('title tests', function () {
    it('should be able to get the title', function () {
      const item = new Item('myItem')
      const title = item.title
      assert.strictEqual(title, 'myItem')
    })

    xit('should be able to change the title', function () {
      const item = new Item('myItem')
      item.setTitle('myChangedItem')
      const title = item.title
      assert.strictEqual(title, 'myChangedItem')
    })

    xit('should throw error if more than 255 title chars', function () {
      const createError = () => {
        const item = new Item('More then 255 a\'s: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      }
      assert.throws(createError, new Error('too many characters'))
    })

    xit('should throw error if no title chars', function () {
      const createError = () => {
        const item = new Item('')
      }
      assert.throws(createError, new Error('no characters'))
    })
  })

  describe('id tests', function () {
    it('id should be a valid uuid', function () {
      const item = new Item('myNewItem')
      const id = item.id
      // https://www.geeksforgeeks.org/how-to-validate-guid-globally-unique-identifier-using-regular-expression/
      assert.match(id, /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/)
    })

    it('id length should be 36', function () {
      const item = new Item('myNewItem')
      const id = item.id
      assert.strictEqual(id.length, 36)
    })

    it('id should be a string', function () {
      const item = new Item('myNewItem')
      assert.ok(typeof item.id === 'string')
    })
  })

  xit('should be able to get the order', function () {
    // Get order which was assigned automically at creation
  })
})