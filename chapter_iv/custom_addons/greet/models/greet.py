from odoo import models, fields


class Greet(models.Model):
    _name = 'greet.greet'
    _description = 'Greetings'

    name = fields.Char()
    date = fields.Datetime(default=fields.Datetime.now)


