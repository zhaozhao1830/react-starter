require('@inrupt/jest-jsdom-polyfills')

Object.defineProperty(global, 'globalConfig', {
  writable: false,
  value: {
    default: {
      userManagerConfig: {},
      HOST: ''
    }
  }
})

/* eslint-disable global-require */
if (typeof window !== 'undefined') {
  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth
    global.window.innerHeight = height || global.window.innerHeight
    global.window.dispatchEvent(new Event('resize'))
  }
  global.window.scrollTo = () => {}
  // ref: https://github.com/ant-design/ant-design/issues/18774
  if (!window.matchMedia) {
    Object.defineProperty(global.window, 'matchMedia', {
      value: jest.fn((query) => ({
        matches: query.includes('max-width'),
        addListener: () => {},
        removeListener: () => {}
      }))
    })
  }
}

const Enzyme = require('enzyme')

const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

Object.assign(Enzyme.ReactWrapper.prototype, {
  findObserver() {
    return this.find('ResizeObserver')
  },
  triggerResize() {
    const ob = this.findObserver()
    ob.instance().onResize([{ target: ob.getDOMNode() }])
  }
})
