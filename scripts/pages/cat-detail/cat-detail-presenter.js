export default class CatDetailPresenter{
    #model;
    #view;
    #catId;
    

    constructor(catId, { model, view }) {
        this.#catId = catId;
        this.#model = model;
        this.#view = view;
    }

    async getCatDetail(){
        const cat = await this.#model.getCatById(this.#catId);
        this.#view.showCat(cat);
    }

}