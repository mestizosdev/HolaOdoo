/** @odoo-module **/

import { registry } from '@web/core/registry'
import { useService } from '@web/core/utils/hooks'

const { Component, useState, onWillStart } = owl

export class OwlGreetDashboard extends Component {
  setup() {
    this.state = useState({
      title: ''
    })

    onWillStart(async () => {
      console.log('onWillStart')
      this.state.title = 'Greetings Dashboard'
      console.log('this.state.title', this.state.title)
    })
  }
}

OwlGreetDashboard.template = 'owl.OwlGreetDashboard'

registry.category('actions').add('owl.greet_dashboard', OwlGreetDashboard)
