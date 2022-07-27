# Ommuse Coding Challenge

### Instructions

Create a react application, with a page that is __as close as__ possible to the page in [grid.png](./grid.png). We do not expect an exact pixel for pixel match but the general functionality should all be there. Font being used is `Syne`.

Each of the grid elements is a music NFT. You can use dummy or auto-generated data for the artist and title, and can use the mp3 included in the asset folder for playback. We have also included several 'cover' arts in the aset folder that you can use for the icons.

We have included a sample [data.json](./data.json) file that you can use to model the data with. Note the include fields and also that the `date_published` is in epoch time. The `price` field is in ethereum.

You do not need to implement `Trending` or `Best Selling`.

### Acceptance Critera
* Application is written in React.
* Application works locally with `npm run start`.
* We have included a simple React app in this folder under [app](./app).
* Grid is usable, contains elements for scrolling.
* Clicking play button will play the song attached to the element.
* Menus are functional and filter or sort based on Genre (left menu) or Price and Date (right menu). If you are running low on time priortize the Genre filter.
* Code is written cleanly and easy to read. You should be prepared to answer questions on choices taken.
* The header and footer are not required but we will consider extra effort if they are there.
* All data/mp3 can be included as part of the static build.

TODO-