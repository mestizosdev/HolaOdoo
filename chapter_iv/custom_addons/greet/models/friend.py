from odoo import fields, models


class Friend(models.Model):
    _name = 'greet.friend'
    _description = 'Friend'
    _inherits = {"res.partner": "partner_id"}
    _inherit = ['res.partner']

    nickname = fields.Char()
    is_friend = fields.Boolean()
    partner_id = fields.Many2one(
        "res.partner", delegate=True, ondelete="cascade", required=True
    )