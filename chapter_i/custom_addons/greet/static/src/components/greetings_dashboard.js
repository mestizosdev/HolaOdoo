/** @odoo-module */

import { registry } from "@web/core/registry"
const { Component } = owl

export class OwlGreetingsDashboard extends Component { }

OwlGreetingsDashboard.template = "owl.OwlGreetingsDashboard"

registry.category("actions").add("owl.greetings_dashboard", OwlGreetingsDashboard)