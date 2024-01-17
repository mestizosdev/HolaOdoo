# -*- coding: utf-8 -*-
{
    'name': "Greetings",

    'summary': "Greetings in different languages",

    'description': """
        Greetings in different languages for Odoo 17
    """,

    'author': "Jorge Luis",
    'website': "https://mestizos.dev",

    'category': 'Learning/Learning',
    'version': '0.1',
    'license': 'LGPL-3',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/greet_dashboard.xml',
        'views/res_country.xml',
        'views/greet_menu.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'greet/static/src/components/**/*.js',
            'greet/static/src/components/**/*.xml',
        ],
    },
}
