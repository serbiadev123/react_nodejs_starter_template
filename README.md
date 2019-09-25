
# distributed_database_systems

Final project for distributed database systems for Tsinghua University.

  

Application consists of single page (**React**) application -> **frontend folder**

supported by a API server (**nodeJS**) backend -> **backend folder**.

  

## File organization

Files are organized in:

- components:

- layout - *page layout components*

- pages - *pages using either the main home page or admin home page as their decorator*

- router - *router information for FE routing*

- js - *some useful helper classes and functions*

- scss - *scss data for easier FE changes*

- App.js - *renders the initial look of the page, and includes the decorator*

- fontawsome.js - *used to import fontawsome icons to a library FE can use*

- .env - should contain data which should not be public. And some global variables like the database name, server url, passwords.


# Starting the application
  
- frontend folder : **npm start**
- backend folder : **(to be decided)**
# FRONT END
## DESIGN
When creating the look of the site we should follow a pallet of maximum 5 colors for the site. Those colors must be defined in *scss/defaltVariables.scss* and used in scss. No hardcoding of colors, so if we decide to change the design, it can be easily done by changing the variable values.
Follow this way for all FE design elements, like font type, font size, margins, paddings...
We are using the bootstrap library, both scss and bootstrap components. So we can use the bootstrap variables, and we can easily overwrite them with our values if needed in the future.

## ROUTES

New routes can be added to: *frontend/source/components/router/Routes.js* .

Just add the new route as a AdminRoute or Route class to the routes array.

  

## ENUMS

All data which will require new instances of the same objects, should be added to enums.

Currently we have:

- ICONS

- LINKS

- ADMIN_LINKS

  

For easier data manipulation try to avoid hardcoding such values.

  

## DEVELOPMENT ADVICE

- Separate components into smaller components which are reusable. Always try to make the component reusable, instead of repeating same code multiple times.

- Only import libraries in component which you will use. Try to not import data globally in order to increase the application speed (reduce the size)

- try to not add new node modules if existing one can have the same functionality and be used