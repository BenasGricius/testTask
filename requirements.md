**Requirements:**
1. Create react app, using provided data and design.

**Preferences:**
1. React JS
2. Functional components
3. ES6
4. SASS/LESS

**Design:**
_https://www.figma.com/file/UBkBrlPqCSp5VbI2pau41E/emotion---Javascript-testine-uzduotis?node-id=0%3A1_

**App structure:**
1. Page header with app title (_resource: data/data.js_ - `APP_TITLE`).

2. Product controls section:  
    - Products search input (only show products which names matches input value).  
    - Products sort select (sort options: by brand, title, price).
        
3. Product list (_recourse: data/data.js_ - `PRODUCTS`):  
    - Desktop - 3 columns grid, mobile - 1 column.
    - Product item (select item on click event, will be used in 4th point):  
      - Image (image property matches image name, _resource: data/images_).  
      - Brand.  
      - Title.  
      - Price (show discount if the product has it).  
        
4. Selected product (do not show if no one is selected).
