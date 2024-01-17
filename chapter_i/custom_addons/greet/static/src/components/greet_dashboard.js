/** @odoo-module */

import { registry } from "@web/core/registry"
const { Component } = owl

export class OwlGreetDashboard extends Component { }

OwlGreetDashboard.template = "owl.OwlGreetDashboard"

registry.category("actions").add("owl.greet_dashboard", OwlGreetDashboard)
