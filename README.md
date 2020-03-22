# Covid-19 Resources

This project is a simple template to setup a website listing local resources available within a community. I felt this was particularly important now that local communities and councils are seeing massive changes to how businesses are running, and how locals are getting access to food and other things due to the 2020 Covid-19 outbreak. It was built as low-fi as possible, so there is no API for data – it is simply hard-coded in a set of files which will be outlined below.

The website consists of one main page, which allows users to filter by area and then search or browse a list of resources which are available in their area. There is a secondary page for users to create data for their business in the format required so the maintainer isn't inundated with having to edit JSON files constantly!

This website is build using React.js, but only a very basic understanding of this is needed, as no real tweaks are necessary to deploy for your usage.

## Getting Started
### Setup Required

You must have node installed to get this website running. The version I am running is: `v10.15.0`. A quick google should walk you through the setup you need to get this installed for your Operating System.

To get started you will then need to run:

```
npm install
npm run
```

## Customising

### Adding regions

Regions (Used to split data within a county for example) need to be added to `src/constants/regions.json`. The example structure can be seen in the existing file.

### Adding new locales

New locales need to be added to `src/constants/locales.json`. The example structure can be seen within the existing file in this repo.

### Adding new categories

New categories and sub-categories can be added to the `src/constants/categories.js` and `src/constants/subCategories.js` files respectively. These are simply an array of strings. Localisations will need to be added for any new categories or sub-categories in the `src/index.js`.

### Adding new resources

Resources can be added to the `src/constants/resources.json` file. In there you will see an example of a resource localised into english and welsh (Although the welsh locale isn't currently setup in the template project). Most properties in the resource are localisable, except for where it doesn't make sense like for urls, contact details, or people's names.

How each property is displayed in the UI is best visualised by visiting the `/submit` path of the website!

## Hosting

Please edit the CNAME file in `public/CNAME` to point at your domain name

### GitHub Pages

I host my version of the website using GitHub pages, if you run `npm run deploy` this is setup to automatically deploy to a `gh-pages` branch.

### Other Options

There are many other options out there for free hosting, I have been suggested by colleagues to use [netlify](https://app.netlify.com/drop) which apparently is basically drag-and-drop!


## Pull Requests

I am a mobile developer by trade, not a frontend developer but have a lot of experience with React Native which has given me enough knowledge to build this. For that reason I would actively encourage pull requests, as there are probably a lot of pitfalls I have made developing this site!
