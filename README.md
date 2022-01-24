# UFOs

## Overview
- Dana has been wanting to put together a website that consolidates all of the UFO sightings from recent history. She provided the data.js file containing all of the sightings across the country and wanted a way to be able to search for specific eye-witness accounts.
- To help, I created her website and referenced her data.js file for the table. I added multiple search criteria that could refine a sighting search down to five different categories. By doing this, a viewer on the website could find any sightings they were looking for.

## Results
- In order for the search bars to work, two different systems were required. 
  1. First the app.js file needed to search each entry for the first search bar input and save the results. When the second search input was entered, the app would search through the first set of results and save the results that matched both search criteria. The same process would continue until all search bars contained inputs. This only saved and updated user inputs but did not update the table.
  2. The second system updated the table by applying a `.forEach()` function on the inputs saved by the `UpdateFilters()` function to each entry that satisfied the filter inputs. 