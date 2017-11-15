//example extensions for electrongui

const {
  GuiExtension
} = module.parent.require('electrongui')

class DevExt extends GuiExtension {

  constructor(gui) {
    super(gui, {
      icon: 'fa fa-bars',
      // alternatively image: 'path-to-image',
      //setting a manuLabel and a menuTemplate
      menuLabel: 'Dev',
      menuTemplate: [{
        label: 'toggleDevTools',
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      }]
    })
  }

  activate() {
    super.activate() //always call super methods
    this.appendMenu()
  }

  deactivate() {
    super.deactivate() // clean main pane and menu
  }
}

module.exports = DevExt
