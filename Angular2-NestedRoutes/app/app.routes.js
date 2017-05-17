"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_component_1 = require("app/about.component");
var home_component_1 = require("app/home.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        children: [
            { path: '', component: about_component_1.AboutHomeComponent },
            { path: 'item/:id', component: about_component_1.AboutItemComponent }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map