/** @odoo-module */

import { registry } from "@web/core/registry"
import { useService } from "@web/core/utils/hooks"
const { Component, useState, onWillStart } = owl

export class OwlGreetDashboard extends Component {
    setup() {
        this.state = useState({
            title: "",
            information: [],
        })
        this.orm = useService("orm")

        onWillStart(async () => {
            console.log("onWillStart")
            this.state.title = "Greetings Dashboard"
            console.log(this.state.title)
            this.state.information = await this.getModuleInformation()
        })
    }

    async getModuleInformation() {
        let information = await this.orm.searchRead(
            "ir.module.module",
            [['name', '=', 'greet']],
            ['author', 'description', 'shortdesc', 'website', 'license', 'summary']
        )
        console.log(information)

        return information
    }
}

OwlGreetDashboard.template = "owl.OwlGreetDashboard"

registry.category("actions").add("owl.greet_dashboard", OwlGreetDashboard)
