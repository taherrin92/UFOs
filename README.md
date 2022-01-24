# UFOs

## Overview
- Dana has been wanting to put together a website that consolidates all of the UFO sightings from recent history. She provided the data.js file containing all of the sightings across the country and wanted a way to be able to search for specific eye-witness accounts.
- To help, I created her website and referenced her data.js file for the table. I added multiple search criteria that could refine a sighting search down to five different categories. By doing this, a viewer on the website could find any sightings they were looking for.

## Results
- In order for the search bars to work, two different systems were required. 
  1. First the app.js file needed to search each entry for the first search bar input and save the results. When the second search input was entered, the app would search through the first set of results and save the results that matched both search criteria. The same process would continue until all search bars contained inputs. This only saved and updated user inputs but did not update the table.
  2. The second system updated the table by applying a `.forEach()` function on the inputs saved by the `UpdateFilters()` function to each entry that satisfied the filter inputs. The `.forEach()` function takes an array and applies the programmed function to each item in the array. In this case, the `.forEach()` function used the search inputs from the user, applied each input to each item in the table and build the new table with only the results that matched all of the user's search criteria. The function is seen here: ![forEach function](https://github.com/taherrin92/UFOs/blob/main/Resources/search_results_js.png) 
  - The `.forEach()` function took each key from the `filters` object (user's saved search inputs) and applied them to  `d3.select("#"+key).property("value")` which selected the rows from the table that matched the inputs using the `if (inputs) { ... }` statement to build the table.

## Summary
- The webpage shows all of the table entries when someone visits the page. This makes the webpage very long. The table could be presented in an "example" form, only displaying a few random entries to base a search off of, or a second page that shows how to search so that the table itself could be hidden from view until the search is performed.
  1. The search critera only matches exact results. For example, all cities are lower case, if a user enters their city as with capital letters, like "San Diego", no results would appear. Coding in a way to match `id`s in a non case sensitive way would be a major improvement to the site.
  2. If no results are found, the table is just blank, with the headers still showing. I would recommend updating the page to get rid of the headers if no search is found and displaying a message that tells the user, "no results found"