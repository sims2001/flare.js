# FlareJS

<img src="https://raw.githubusercontent.com/sims2001/flarejs/master/FlareJS.png" width="900px" title="FlareJS" />

### [View Demos](https://sims2001.github.io/flarejs/) | [View Full Docs](https://sims2001.github.io/flarejs/docs) | [rutschka.at](https://www.rutschka.at)

FlareJS is small JavaScript Library that allows the user to add a radiant background flare to selected Elements that moves with the mouse.

---

## Installation

### CDN

```html
<script src="https://unpkg.com/flarejs@1.0.0/dist/flarejs.umd.js"></script>
```

For use directly in the browser via `<script>` tag:

```html
  <!-- Element to contain animated typing -->
  <div class="background"></div>

  <!-- Load library from the CDN -->
  <script src="https://unpkg.com/flarejs@1.0.0/dist/flarejs.umd.js"></script>

  <!-- Setup and start animation! -->
  <script>
      const flare = new FlareJS('.background', {
          glowRadius: 75,
          flareColor: '#ffaa0075',
      });
  </script>
</body>
```

### As an ESModule

For use with a build tool like [Vite](https://vitejs.dev/), and/or in a React application, install with NPM or Yarn.

#### NPM

```
npm install flarejs
```

#### Yarn

```
yarn add flarejs
```

#### General ESM Usage

```js
import FlareJS from 'flarejs';

const flare = new FlareJS('.background', {
    glowRadius: 75,
    flareColor: '#ffaa0075',
});
```

## Customization

```javascript
const flare = new FlareJs('.background', {
    /**
     * @property {number} glowRadius Radius of the FlareEffect in px
     */
    glowRadius: 50,
    /**
     * @property {string|null} bgColor CSS Color used as elements background color
     * (if null current background color is used)
     */
    bgColor: null,
    /**
     * @property {string} flareColor CSS Color for the FlareEffect
     */
    flareColor: 'rgba(254, 1, 154, 0.5)',
    /**
     * Experimental!
     * @property {boolean} fluentFlares smooth Flares between all Elements of selector
     */
    fluentFlares: false,
    /**
     * After destroy
     * @param {FlareJs} self
     */
    onDestroy: (self) => {},
    /**
     * After reset
     * @param {FlareJs} self
     */
    onReset: (self) => {},
    /**
     * After stop
     * @param {FlareJs} self
     */
    onStop: (self) => {},
    /**
     * After start
     * @param {FlareJs} self
     */
    onStart: (self) => {},
});
```

## Contributing

### [View Contribution Guidelines](./.github/CONTRIBUTING.md)

## end

Thanks for checking this out.

If you're using this, let me know! I'd love to see it.

It would also be great if you mentioned me or my website somewhere. [www.rutschka.at](https://www.rutschka.at)
