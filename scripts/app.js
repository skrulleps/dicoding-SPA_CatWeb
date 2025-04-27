import { getActiveRoute } from './routes/url-parser.js';
import routes from './routes/routes.js';

export default class App {
  #content;

  constructor({ content }) {
    this.#content = content;
  }

  async renderPage() {
    const routeName = getActiveRoute();
    const route = routes[routeName];

    // Get page instance
    const page = route();

    const initialHtml = await page.render();

    if (!document.startViewTransition){
      this.#content.innerHTML = initialHtml;
      await page.afterRender();

      return;
    }

    const transition = document.startViewTransition(async () => {
      this.#content.innerHTML = initialHtml;
    });

    transition.updateCallbackDone.then(() => {
      console.log('Callback telah dieksekusi');
    });
    transition.ready.then(async () => {
      console.log('View transition siap dijalankan.');
      await page.afterRender();
    });
    transition.finished.then(() => {
      console.log('View transition telah selesai.');
    });
  }
}
// Akhir SPA